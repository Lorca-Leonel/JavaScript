function lanzarModalAlumno() {
  $("#idModalBuscarAlumnoPorDNI").modal();
}

function lanzarModalAjustes() {
  $("#idModalAjustes").modal();
}

function lanzarModalMensaje(titulo, detalle) {
  $("#idModalMensaje_Titulo").html(titulo);
  $("#idModalMensaje_Detalle").html(detalle);
  $("#idModalMensajes").modal();
}

function AjustarColor() {
  LimpiarCanvas();
}

function GenerarBinarioAutomaticamente() {
  i = Math.floor((Math.random() * 2));
  $("#idCadena").val(i);
  i = Math.floor((Math.random() * 2));
  $("#idCadena").val($("#idCadena").val() + i);
  i = Math.floor((Math.random() * 2));
  $("#idCadena").val($("#idCadena").val() + i);
  i = Math.floor((Math.random() * 2));
  $("#idCadena").val($("#idCadena").val() + i);
  i = Math.floor((Math.random() * 2));
  $("#idCadena").val($("#idCadena").val() + i);
  i = Math.floor((Math.random() * 2));
  $("#idCadena").val($("#idCadena").val() + i);
  i = Math.floor((Math.random() * 2));
  $("#idCadena").val($("#idCadena").val() + i);
  i = Math.floor((Math.random() * 2));
  $("#idCadena").val($("#idCadena").val() + i);
  i = Math.floor((Math.random() * 2));
  $("#idCadena").val($("#idCadena").val() + i);
  i = Math.floor((Math.random() * 2));
  $("#idCadena").val($("#idCadena").val() + i);
  i = Math.floor((Math.random() * 2));
  $("#idCadena").val($("#idCadena").val() + i);
  i = Math.floor((Math.random() * 2));
  $("#idCadena").val($("#idCadena").val() + i);
  i = Math.floor((Math.random() * 2));
  $("#idCadena").val($("#idCadena").val() + i);
  i = Math.floor((Math.random() * 2));
  $("#idCadena").val($("#idCadena").val() + i);
  i = Math.floor((Math.random() * 2));
  $("#idCadena").val($("#idCadena").val() + i);
}

function drawCoords(amplitude, frequence, a) {
  console.log("hola ");
  // COORDS
  ctx.strokeStyle = "#555";
  // vertical
  ctx.beginPath();
  ctx.moveTo(coordsOffset, coordsOffset);
  ctx.lineTo(coordsOffset, ch - coordsOffset);
  ctx.stroke();
  // horizontal
  ctx.beginPath();
  ctx.moveTo(coordsOffset, ch / 2);
  ctx.lineTo(cw - coordsOffset, ch / 2);
  ctx.stroke();

  console.log("cw: " + cw);
  console.log("coordsOffset: " + coordsOffset);
  var a = 0;

  ctx.moveTo(20, 30);
  ctx.lineTo(20, 230);
  ctx.stroke();
  /*
  ctx.moveTo(110, 120);
  ctx.lineTo(110, 120);
  
  ctx.moveTo(200, 120);
  ctx.lineTo(200, 120);
  
  ctx.moveTo(290, 120);
  ctx.lineTo(290, 120);
  
  ctx.moveTo(380, 120);
  ctx.lineTo(380, 120);
  
  ctx.moveTo(470, 120);
  ctx.lineTo(470, 120);
  
  ctx.moveTo(560, 120);
  ctx.lineTo(560, 120);
  
  ctx.moveTo(650, 120);
  ctx.lineTo(650, 120);
  
  ctx.moveTo(740, 120);
  ctx.lineTo(740, 120);

  ctx.moveTo(830, 120);
  ctx.lineTo(830, 120);
  */
  
  for (var x = 0; x < cw - 2 * coordsOffset; x++) {
    console.log("kiko");
    if (x % 90 == 0) {

      console.log(x + coordsOffset, (ch / 2) - 100);
      console.log(x + coordsOffset, (ch / 2) + 100);
      
      ctx.moveTo(x + coordsOffset, (ch / 2) - 100);
      ctx.lineTo(x + coordsOffset, (ch / 2) + 100);
      ctx.stroke();
      ctx.fillText((~~(a * 100)) / 100, x + coordsOffset, ch / 2 - 90);
    }
    a += frequence;
  }
  
}
/*
function drawSin(amplitude, frequence, a, phi) {
  //phi = 3.14;
  console.log("ampli:" + amplitude + " - frecue:" + frequence + " - a:" + a + " - phi:" + phi);
  console.log("coordsOffset:" + coordsOffset + " - cw:" + cw);
  // SIN					
  a = 0;
  ctx.beginPath();
  ctx.moveTo(coordsOffset, ch / 2);
  for (var x = coordsOffset; x < cw - coordsOffset; x++) {
    var y = Math.sin(a + phi) * amplitude + ch / 2;
    a += frequence;
    ctx.lineTo(x, y);
  }
  ctx.strokeStyle = "red";
  ctx.stroke();
}

function drawCoss(amplitude, frequence, a, phi) {
  // COS
  ctx.beginPath();
  ctx.moveTo(coordsOffset, ch / 2 + amplitude);
  for (var x = coordsOffset; x < cw - coordsOffset; x++) {
    var y = Math.cos(a + phi) * amplitude + ch / 2;
    a += frequence;
    ctx.lineTo(x, y);
  }
  ctx.strokeStyle = "yellow";
  ctx.stroke();
}
*/
/*
function init(amplitude, frequence, a, phi) {
  console.log("borrados: " + cw + "-" + ch);
  ctx.clearRect(0, 0, cw, ch);
  drawCoords(amplitude, frequence, a, phi);

  //drawSin(amplitude, frequence, a, phi);
  //drawCos(amplitude, frequence, a, phi);

  document.querySelector(".amplitude.output").innerHTML = amplitude;
  document.querySelector(".frequence.output").innerHTML = parseInt(frequence * 1000) / 1000;
  document.querySelector(".faseInicial.output").innerHTML = phi.toFixed(2);
}
*/
/************************************************************************/
/*******************       CODIFICACIONES       *************************/
/************************************************************************/

var LimpiarCanvas = function () {
  c.width = c.width;
  c = document.getElementById("c");
  ctx = c.getContext("2d");

  cw = c.width = 900,
    cx = cw / 2;
  ch = c.height = 260,
    cy = ch / 2;
  rad = Math.PI / 180;

  coordsOffset = 20;
  amplitude = 100;
  frequence = Math.PI / 180 * 0.034;
  phi = Math.PI / 180 * 0.00 * rad;


  // text
  ctx.textAlign = "center";
  ctx.font = "16px Verdana";
  ctx.fillStyle = "red";
  amplitude = 100;
  phi = 0;
  ctx.clearRect(0, 0, cw, ch);
  drawCoords(amplitude, frequence, 0, phi);
}

function initNew(indice, amplitude, frequence, a, phi) {
  //LimpiarCanvas();
  //c.width = c.width;
  //ctx.clearRect(0, 0, cw, ch);
  //drawCoords(100, 0.017453292519943295, 0);
  //ctx.clearRect(0, 0, cw, ch);
  //drawCoords(amplitude, frequence, a, phi);
  drawSinNew(indice, amplitude, frequence, a, phi);
}

function drawSinNew(indice, amplitude, frequence, a, phi) {
  //console.log("ampli:" + amplitude + " - frecue:" + frequence + " - a:" + a + " - phi:" + phi);
  //console.log("coordsOffset:" + coordsOffset + " - cw:" + cw);
  ctx.lineWidth = 3;
  ctx.beginPath();
  //ctx.moveTo(coordsOffset, ch / 2);
  var inicio = 90 * indice + 20;
  var fin = inicio + 91;
  for (var x = inicio; x < fin; x++) { // 20 - 111 // 110 - 201 /// 200 - 291 /// 290 - 381 // 380 - 471 // 
    var y = Math.sin(a + phi) * amplitude + ch / 2;
    a += frequence;
    ctx.lineTo(x, y);
  }

  ctx.strokeStyle = $("#idSelectColor").val();
  ctx.stroke();
  //alert("tramo 1");  
}

let divisiones = [];
let cadena;
var ObtenerCodificacion = function (tipo) {

  LimpiarCanvas();
  amplitude = $("#idSelectAmplitud").val();
  divisiones = [];
  cadena = $("#idCadena").val();

  if (cadena == "") {
    lanzarModalMensaje("Error!", "Se debe colocar una cadena binaria en el campo <b>Cadena a Procesar</b>.");
    $("#idCadena").focus();
    return;
  }

  divisiones = $("#idCadena").val().split("");

  switch (tipo) {
    case 'ASK':
      console.log(divisiones);
      ObtenerASK();
      break;
    case '2ASK':
      Obtener2ASK();
      break;
    case 'FSK':
      ObtenerFSK();
      break;
    case 'PSK':
      ObtenerPSK();
      break;
    case '4PSK':
      Obtener4PSK();
      break;
    case '8QAM':
      Obtener8QAM();
      break;
    default:
      console.log('Seleccion no valida');
  }
};

var ObtenerASK = function () {
  divisiones = $("#idCadena").val().split("");
  divisiones.forEach((point, index) => {
    if (point == 1) {
      //indice, amplitude, frequence, a, phi
      initNew(index, amplitude, 0.139, 0, 3.14);
    } else {
      initNew(index, 0, 0.139, 0, 3.14);
    }
  });
};

var Obtener2ASK = function () {
  divisiones.forEach((point, index) => {
    if (point == 1) {
      //indice, amplitude, frequence, a, phi
      initNew(index, amplitude, 0.279, 0, 3.14);
    } else {
      initNew(index, 0, 0.279, 0, 3.14);
    }
  });
};

var ObtenerFSK = function () {
  divisiones.forEach((point, index) => {
    if (point == 1) {
      //indice, amplitude, frequence, a, phi
      initNew(index, amplitude, 0.279, 0, 3.14);
    } else {
      initNew(index, amplitude, 0.139, 0, 3.14);
    }

  });
};

var ObtenerPSK = function () {
  var pulsoActual = 3.14;

  divisiones.forEach((point, index) => {
    if (index == 0) {
      initNew(index, amplitude, 0.139, 0, pulsoActual);
    } else {
      if (divisiones[index - 1] != point) {
        if (pulsoActual == 3.14) {
          pulsoActual = 0;
        } else {
          pulsoActual = 3.14;
        }
      }
      initNew(index, amplitude, 0.139, 0, pulsoActual);
    }
  });
};

var Obtener4PSK = function () {
  divisiones = [];
  var longitud = cadena.length;

  if (longitud % 2 != 0) {
    lanzarModalMensaje("Error!", "La cadena ingresada <b>debe ser PAR</b> para poder procesarla");
    return false;
  }

  for (var i = 0; i < longitud; i += 2) {
    divisiones.push(cadena.substr(i, 2));
  }
  console.log(divisiones);
  var pulsoActual = 3.14;
  divisiones.forEach((point, index) => {
    switch (point) {
      case '00':
        initNew(index, amplitude, 0.279, 0, 3.14);
        break;
      case '01':
        initNew(index, amplitude, 0.279, 1.55, 3.14);
        break;
      case '10':
        initNew(index, amplitude, 0.279, 0, 0);
        break;
      case '11':
        initNew(index, amplitude, 0.279, 0, 1.57);
        break;
    }
  });
};

var Obtener8QAM = function () {
  divisiones = [];
  var longitud = cadena.length;

  if (longitud % 3 != 0) {
    lanzarModalMensaje("Error!", "La candena ingresada <b>debe ser MULTIPLO DE 3</b> para poder procesarla");
    return false;
  }

  for (var i = 0; i < longitud; i += 3) {
    divisiones.push(cadena.substr(i, 3));
  }

  var pulsoActual = 3.14;
  divisiones.forEach((point, index) => {
    switch (point) {
      case '000':
        initNew(index, amplitude / 2, 0.139, 0, 3.14);
        break;
      case '001':
        initNew(index, amplitude, 0.139, 0, 3.14);
        break;
      case '010':
        initNew(index, amplitude / 2, 0.139, 1.55, 3.14);
        break;
      case '011':
        initNew(index, amplitude, 0.139, 1.55, 3.14);
        break;
      case '100':
        initNew(index, amplitude / 2, 0.139, 0, 0);
        break;
      case '101':
        initNew(index, amplitude, 0.139, 0, 0);
        break;
      case '110':
        initNew(index, amplitude / 2, 0.139, 0, 1.57);
        break;
      case '111':
        initNew(index, amplitude, 0.139, 0, 1.57);
        break;
    }
  });
};

/************************************************************************/
/*******************       FIN CODIFICACIONES       *********************/
/************************************************************************/