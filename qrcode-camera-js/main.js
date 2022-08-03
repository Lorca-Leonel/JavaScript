const ZXing = require('./zxing')();

// Crossbrowser getUserMedia
navigator.getUserMedia  = navigator.getUserMedia ||
                          navigator.webkitGetUserMedia ||
                          navigator.mozGetUserMedia ||
                          navigator.msGetUserMedia;

// Variables
let _canvasWidth = 0, _canvasHeight = 0;
let skipFrame = 25;
let loopFrame;
let loopSkipedFrame = 0;
let source, binarizer, bitmap, result;
let ultimoDni = '';
const cameraOptions = document.querySelector('.video-options>select');
let stream;

// Crear canvas para el video
const canvas = document.createElement('canvas'),
      ctx = canvas.getContext('2d');

// Párrafo de resultado
let resultP        = document.getElementById('result');
let resultTemplate = resultP.innerHTML;

// Crear elemento video e imagen
const video = document.getElementById('dniVideo');
const videoW = document.getElementById('video-wrap');
const image = document.createElement('img');

// Boton de inicio
const iniciar = document.getElementById('iniciar');

// Validaciones
const validarTexto = _text => {
  // El protocolo mantiene el texto en mayúsculas y sin caracteres especiales
  let _regex = /^[A-Z ]+$/;
  return _regex.test(_text.trim());
}
const validarFecha = _text => {
  let _regex = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}?$/;
  return _regex.test(_text.trim());
}
const validarNumero = _text => {
  _text = _text.trim();
  return !isNaN(_text) && _text.length >= 7 && _text.length <= 8;
}

// Escanear código
function scanBarcode() {
  var format = 'PDF_417';

  canvas.toBlob((blob) => {
    const reader = new FileReader();
    reader.addEventListener('loadend', () => {
      const arrayBuffer = reader.result;
      var fileData = new Uint8Array(arrayBuffer);

      var buffer = Module._malloc(fileData.length);
      Module.HEAPU8.set(fileData, buffer);
      // El 3 atributo es el "Try Harder". Esto relentiza notablemente el procesamiento pero
      // debería dar resultados más confiables
      var result = Module.readBarcodeFromPng(buffer, fileData.length, false, format);
      Module._free(buffer);

      if( result.text ) {
        parseResult(result.text)
      }

      return result;
    });
    reader.readAsArrayBuffer(blob);
  }, 'image/png');
}

// Parsear resultado
const parseResult = _text => {
  let result = resultTemplate,
      nombre = '',
      apellido = '',
      dni = '',
      sexo = '',
      fechaNac = '',
      raw = _text;
  let data = _text.split('@');
  console.log(data);
  if( data.length == 8 ||  data.length == 9 ) {
    // Formato nuevo
    apellido = data[1].trim()
    nombre   = data[2].trim()
    sexo     = data[3].trim()
    dni      = data[4].trim()
    fechaNac = data[6].trim()

  } else if (data.length >= 10 && data.length <= 20 ) {
    // Formato anterior
    apellido = data[4].trim()
    nombre   = data[5].trim()
    sexo     = data[8].trim()
    dni      = data[1].trim()
    fechaNac = data[7].trim()
  } else {
    // Formato NO identificado
    resultP.classList.add('error');
    setTimeout(_ => {
      resultP.classList.remove("error");
    }, 1000);
    return;
  }

  if( ultimoDni === dni ) {
    // El DNI escaneado es igual al último
    return;
  }
  ultimoDni = dni;

  if( validarFecha(fechaNac) &&
      validarNumero(dni) && 
      validarTexto(sexo) && 
      validarTexto(apellido) && 
      validarTexto(nombre) ) {
    result = result.replace('%raw%', raw);
    result = result.replace('%nombre%', nombre);
    result = result.replace('%apellido%', apellido);
    result = result.replace('%sexo%', sexo);
    result = result.replace('%dni%', dni);
    result = result.replace('%fechaNac%', fechaNac);

    resultP.innerHTML = result;
    resultP.classList.add('success');
    if( navigator.vibrate ) {
      navigator.vibrate(150);
    }
    setTimeout(_ => {
      resultP.classList.remove("success");
    }, 1000);
  } else {
    result = result.replace('%raw%', raw);
    resultP.innerHTML = result;
    resultP.classList.add('error');
    setTimeout(_ => {
      resultP.classList.remove("error");
    }, 1000);
  }
}


const startWebcam = async (constraints1) => { 
  //----------------------------------------------------------------------
  //  Here we list all media devices, in order to choose between
  //  the front and the back camera.
  //      videoDevices[0] : Front Camera android / back camera ios
  //      videoDevices[1] : Back Camera android / front camera ios
  //---------------------------------------------------------------------   
    if (stream) {
	    stream.getTracks().forEach(function (track) {
	    track.stop();
	    });
    }
    stream = await navigator.mediaDevices.getUserMedia({ video: constraints1 });
    handleStream(stream);
  };

const handleStream = (stream) => {
  video.srcObject = stream;
};

const getCameraSelection = async () => {
  const devices = await navigator.mediaDevices.enumerateDevices();
  const videoDevices = devices.filter(device => device.kind == "videoinput");
  const options = videoDevices.map(videoDevice => {
    return `<option value="${videoDevice.deviceId}">${videoDevice.label}</option>`;
  });
  cameraOptions.innerHTML = options.join('');
};

const mainLoop = () => {
  // Clear the canvas
  ctx.globalAlpha = 1;
  ctx.drawImage(video, 0, 0, _canvasWidth, video.videoHeight*_canvasWidth/video.videoWidth);
  // ctx.drawImage(video, 0, 0, _canvasWidth, _canvasHeight);

  scanBarcode();
}

const startLoop = () => { 
  setInterval(mainLoop, 250);
}

// Iniciar loop al cargar video
video.addEventListener('loadedmetadata',function(){
  _canvasWidth  = canvas.width = videoW.offsetWidth;
  _canvasHeight = canvas.height = videoW.offsetHeight;
  startLoop();
});

// Inicializar
iniciar.addEventListener('click', function(){
  video.pause();  
  const updatedConstraints = {
    ...constraints,
    deviceId: { exact: cameraOptions.value }
  };
  startWebcam(updatedConstraints);
});

let constraints =  {
	audio: false,
	video:
	{
		width: { min: 320, ideal: 640, max: 1024 },
		height: { min: 240, ideal: 480, max: 768 },
	}
}; 

getCameraSelection();

