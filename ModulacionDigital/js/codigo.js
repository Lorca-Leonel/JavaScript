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
  var cadenaAleatoria = "";
  for (var i = 0; i < 27; i++) {
    r = Math.floor((Math.random() * 2));
    cadenaAleatoria = cadenaAleatoria + r;
  }
  $("#idCadena").val(cadenaAleatoria);

  LimpiarCanvas();
}

function drawCoords(amplitude, frequence, a) {
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


  var a = 0;

  ctx.moveTo(110, 20);
  ctx.lineTo(110, 240);

  ctx.moveTo(200, 20);
  ctx.lineTo(200, 240);

  ctx.moveTo(290, 20);
  ctx.lineTo(290, 240);

  ctx.moveTo(380, 20);
  ctx.lineTo(380, 240);

  ctx.moveTo(470, 20);
  ctx.lineTo(470, 240);

  ctx.moveTo(560, 20);
  ctx.lineTo(560, 240);

  ctx.moveTo(650, 20);
  ctx.lineTo(650, 240);

  ctx.moveTo(740, 20);
  ctx.lineTo(740, 240);

  ctx.moveTo(830, 20);
  ctx.lineTo(830, 240);

  ctx.stroke();
  
}

function drawCoordsPortadora(amplitude, frequence, a) {
  // COORDS
  ctxPortadora.strokeStyle = "#555";
  // vertical
  ctxPortadora.beginPath();
  ctxPortadora.moveTo(coordsOffset, coordsOffset);
  ctxPortadora.lineTo(coordsOffset, ch - coordsOffset);
  ctxPortadora.stroke();
  // horizontal
  ctxPortadora.beginPath();
  ctxPortadora.moveTo(coordsOffset, ch / 2);
  ctxPortadora.lineTo(cw - coordsOffset, ch / 2);
  ctxPortadora.stroke();

  var a = 0;

  ctxPortadora.moveTo(110, 20);
  ctxPortadora.lineTo(110, 240);

  ctxPortadora.moveTo(200, 20);
  ctxPortadora.lineTo(200, 240);

  ctxPortadora.moveTo(290, 20);
  ctxPortadora.lineTo(290, 240);

  ctxPortadora.moveTo(380, 20);
  ctxPortadora.lineTo(380, 240);

  ctxPortadora.moveTo(470, 20);
  ctxPortadora.lineTo(470, 240);

  ctxPortadora.moveTo(560, 20);
  ctxPortadora.lineTo(560, 240);

  ctxPortadora.moveTo(650, 20);
  ctxPortadora.lineTo(650, 240);

  ctxPortadora.moveTo(740, 20);
  ctxPortadora.lineTo(740, 240);

  ctxPortadora.moveTo(830, 20);
  ctxPortadora.lineTo(830, 240);

  ctxPortadora.stroke();

}

/************************************************************************/
/*******************       CODIFICACIONES       *************************/
/************************************************************************/

var LimpiarCanvas = function () {
  $("#idBDiagramaResultado").html("-");
  $("#idImageConstelacion").attr("src","images/white.png");
  $("#idImageEspectroFrecuencia").attr("src","images/white.png");
  
  
  c.width = c.width;
  c = document.getElementById("c");
  ctx = c.getContext("2d");

  cw = c.width = 850,
    cx = cw / 2;
  ch = c.height = 260,
    cy = ch / 2;
  rad = Math.PI / 180;

  coordsOffset = 20;
  amplitude = 100;
  frequence = Math.PI / 180 * 0.034;
  phi = Math.PI / 180 * 0.00 * rad;

  ctx.textAlign = "center";
  ctx.font = "18px Verdana black";
  ctx.fillStyle = "black";
  amplitude = 100;
  phi = 0;
  ctx.clearRect(0, 0, cw, ch);
  drawCoords(amplitude, frequence, 0, phi);

  // limpieza señal portadora
  cPortadora.width = cPortadora.width;
  cPortadora = document.getElementById("cPortadora");
  ctxPortadora = cPortadora.getContext("2d");

  ctxPortadora.textAlign = "center";
  ctxPortadora.font = "16px Verdana";
  ctxPortadora.fillStyle = "red";
  amplitude = 100;
  phi = 0;
  ctxPortadora.clearRect(0, 0, cw, ch);
  drawCoordsPortadora(amplitude, frequence, 0, phi);
}

function initNew(indice, amplitude, frequence, a, phim, color = $("#idSelectColor").val()) {
  drawSinNew(indice, amplitude, frequence, a, phim, color);
}

function drawSinNew(indice, amplitude, frequence, a, phi, color) {
  ctx.lineWidth = 3;
  ctx.beginPath();
  var inicio = 90 * indice + 20;
  var fin = inicio + 91;
  for (var x = inicio; x < fin; x++) { // 20 - 111 // 110 - 201 /// 200 - 291 /// 290 - 381 // 380 - 471 // 
    var y = Math.sin(a + phi) * amplitude + ch / 2;
    a += frequence;
    ctx.lineTo(x, y);
  }
  ctx.strokeStyle = color;
  ctx.stroke();
}


function drawSinPortadora(indice, amplitude, frequence, a, phi) {
  ctxPortadora.lineWidth = 3;
  ctxPortadora.beginPath();

  var inicio = 90 * indice + 20;
  var fin = inicio + 91;
  for (var x = inicio; x < fin; x++) { // 20 - 111 // 110 - 201 /// 200 - 291 /// 290 - 381 // 380 - 471 // 
    var y = Math.sin(a + phi) * amplitude + ch / 2;
    a += frequence;
    ctxPortadora.lineTo(x, y);
  }

  ctxPortadora.strokeStyle = $("#idSelectColor").val();
  ctxPortadora.stroke();
}

let cadena;

let indiceArrayDivisiones = 0;
let divisiones = [];
let tipoPasoAPaso = "";
let pulsoActual = 3.14;
let colorCambioPSK = "green";

var ObtenerCodificacion = function (tipo) {
  LimpiarCanvas();
  indiceArrayDivisiones = 0;

  amplitude = $("#idSelectAmplitud").val();
  divisiones = [];
  cadena = $("#idCadena").val();
  $("#idTipoModulacion").html("EN " + tipo);

  if (cadena == "") {
    lanzarModalMensaje("Error!", "Se debe colocar una cadena binaria en el campo <b>Cadena a Procesar</b>.");
    $("#idCadena").focus();
    return;
  }
  var tipoProceso = $("#idSelectTipoProceso").val();
  GraficarEspectroFrecuencia();
  switch (tipo) {
    case 'ASK':
      $("#idBDiagramaResultado").html("SEÑAL RESULTANTE");
      $("#idImageConstelacion").attr("src","images/SenalResultante/ask.png");
      var longitud = cadena.length;
      if (longitud > 9)
      {
        cadena = cadena.substring(0, 9);
        $("#idCadena").val(cadena);
      }

      divisiones = $("#idCadena").val().split("");
      ColocarCadenaEnGrafica(divisiones);

      divisiones.forEach((point, index) => {
        GraficarPortadora(index, amplitude, 0.13955, 0, 3.14);
      });

      if (tipoProceso == "Todo") {
        divisiones.forEach((point, index) => {
          ObtenerASK(point, index);
        });
      } else {
        PrepararPasoAPaso(tipo);
      }
      break;

    case '2ASK':
      $("#idBDiagramaResultado").html("SEÑAL RESULTANTE");
      $("#idImageConstelacion").attr("src","images/SenalResultante/ask.png");
      var longitud = cadena.length;
      if (longitud > 9)
      {
        cadena = cadena.substring(0, 9);
        $("#idCadena").val(cadena);
      }

      divisiones = $("#idCadena").val().split("");
      ColocarCadenaEnGrafica(divisiones);

      divisiones.forEach((point, index) => {
        GraficarPortadora(index, amplitude, 0.279, 0, 3.14);
      });

      if (tipoProceso == "Todo") {
        divisiones.forEach((point, index) => {
          Obtener2ASK(point, index);
        });
      } else {
        PrepararPasoAPaso(tipo);
      }
      break;

    case 'FSK':
      $("#idBDiagramaResultado").html("SEÑAL RESULTANTE");
      $("#idImageConstelacion").attr("src","images/SenalResultante/fsk.png");
      var longitud = cadena.length;
      if (longitud > 9)
      {
        cadena = cadena.substring(0, 9);
        $("#idCadena").val(cadena);
      }

      divisiones = $("#idCadena").val().split("");
      ColocarCadenaEnGrafica(divisiones);

      divisiones.forEach((point, index) => {
        GraficarPortadora(index, amplitude, 0.13955, 0, 3.14);
      });

      if (tipoProceso == "Todo") {
        divisiones.forEach((point, index) => {
          ObtenerFSK(point, index);
        });
      } else {
        PrepararPasoAPaso(tipo);
      }
      break;

    case 'PSK':
      $("#idBDiagramaResultado").html("SEÑAL RESULTANTE");
      $("#idImageConstelacion").attr("src","images/SenalResultante/psk.png");
      var longitud = cadena.length;
      if (longitud > 9)
      {
        cadena = cadena.substring(0, 9);
        $("#idCadena").val(cadena);
      }

      divisiones = $("#idCadena").val().split("");
      ColocarCadenaEnGrafica(divisiones);

      divisiones.forEach((point, index) => {
        GraficarPortadora(index, amplitude, 0.13955, 0, 3.14);
      });

      if (tipoProceso == "Todo") {
        divisiones.forEach((point, index) => {
          ObtenerPSK(point, index);
        });
      } else {
        PrepararPasoAPaso(tipo);
      }
      break;

    case '4PSK':
      $("#idBDiagramaResultado").html("DIAGRAMA DE CONSTELACIÓN");
      var longitud = cadena.length;
      if (longitud > 18)
      {
        cadena = cadena.substring(0, 18);
        $("#idCadena").val(cadena);
      }

      if (cadena.length % 2 != 0) {
        lanzarModalMensaje("Error!", "La cadena ingresada <b>debe ser PAR</b> para poder procesarla");
        return false;
      }

      for (var i = 0; i < longitud; i += 2) {
        divisiones.push(cadena.substr(i, 2));
      }
      ColocarCadenaEnGrafica(divisiones);

      divisiones.forEach((point, index) => {
        GraficarPortadora(index, amplitude, 0.2795, 0, 3.14);
      });

      if (tipoProceso == "Todo") {
        divisiones.forEach((point, index) => {
          Obtener4PSK(point, index);
        });
        $("#idImageConstelacion").attr("src","images/Constalaciones/4PSK/all.png");
      } else {
        PrepararPasoAPaso(tipo);
      }
      break;

    case 'QPSK':
      $("#idBDiagramaResultado").html("DIAGRAMA DE CONSTELACIÓN");
      var longitud = cadena.length;  
      if (longitud > 18)
      {
        cadena = cadena.substring(0, 18);
        $("#idCadena").val(cadena);
      }
      
      if (cadena.length % 2 != 0) {
        lanzarModalMensaje("Error!", "La cadena ingresada <b>debe ser PAR</b> para poder procesarla");
        return false;
      }

      for (var i = 0; i < longitud; i += 2) {
        divisiones.push(cadena.substr(i, 2));
      }
      ColocarCadenaEnGrafica(divisiones);

      divisiones.forEach((point, index) => {
        GraficarPortadora(index, amplitude, 0.06981317007977318, 0, 3.141592653589793);
      });

      if (tipoProceso == "Todo") {
        divisiones.forEach((point, index) => {
          ObtenerQPSK(point, index);
        });
        $("#idImageConstelacion").attr("src","images/Constalaciones/QPSK/all.png");
      } else {
        PrepararPasoAPaso(tipo);
      }
      break;

    case '8QAM':
      GraficarEspectroFrecuencia("menor");
      $("#idBDiagramaResultado").html("DIAGRAMA DE CONSTELACIÓN");
      var longitud = cadena.length;
      if (longitud % 3 != 0) {
        lanzarModalMensaje("Error!", "La candena ingresada <b>debe ser MULTIPLO DE 3</b> para poder procesarla");
        return false;
      }

      for (var i = 0; i < longitud; i += 3) {
        divisiones.push(cadena.substr(i, 3));
      }
      ColocarCadenaEnGrafica(divisiones);

      divisiones.forEach((point, index) => {
        GraficarPortadora(index, amplitude / 2, 0.13955, 0, 3.14);
      });

      if (tipoProceso == "Todo") {
        divisiones.forEach((point, index) => {
          Obtener8QAM(point, index);
        });
        $("#idImageConstelacion").attr("src","images/Constalaciones/8QAM/all.png");
      } else {
        PrepararPasoAPaso(tipo);
      }


      break;
    default:
      console.log('Seleccion no valida');
  }
};

var ObtenerASK = function (point, index) {
  if (point != undefined)
  {
    if (point == 1) {
      initNew(index, amplitude, 0.13955, 0, 3.14, 'red');
    } else {
      initNew(index, 0, 0.139, 0, 3.14, 'black');
    }
  }
  
};

var Obtener2ASK = function (point, index) {
  if (point != undefined)
  {
    if (point == 1) {
      initNew(index, amplitude, 0.279, 0, 3.14, 'red');
    } else {
      initNew(index, 0, 0.279, 0, 3.14, 'black');
    }
  }
  
};

var ObtenerFSK = function (point, index) {
  if (point != undefined) {
    if (point == 1) {
      initNew(index, amplitude, 0.27955, 0, 3.14, 'blue');
    } else {
      initNew(index, amplitude, 0.13955, 0, 3.14, 'red');
    }
  }
  
};

var ObtenerPSK = function (point, index) {
  if (point != undefined) {
    if (index == 0) {
      initNew(index, amplitude, 0.13955, 0, pulsoActual, colorCambioPSK);
    } else {
      if (divisiones[index - 1] != point) {
        if (pulsoActual == 3.14) {
          pulsoActual = 0;
        } else {
          pulsoActual = 3.14;
        }
        if (colorCambioPSK == "green") {
          colorCambioPSK = "blue";
        }
        else {
          colorCambioPSK = "green";
        }
  
      } else {
      }
      initNew(index, amplitude, 0.13955, 0, pulsoActual, colorCambioPSK);
    } 
  }
};

var Obtener4PSK = function (point, index) {
  switch (point) {
    case '00':
      $("#idImageConstelacion").attr("src","images/Constalaciones/4PSK/00.png");
      initNew(index, amplitude, 0.2795, 0, 3.14, 'green');
      break;
    case '01':
      $("#idImageConstelacion").attr("src","images/Constalaciones/4PSK/01.png");
      initNew(index, amplitude, 0.2795, 1.55, 3.14, 'blue');
      break;
    case '10':
      $("#idImageConstelacion").attr("src","images/Constalaciones/4PSK/10.png");
      initNew(index, amplitude, 0.2795, 0, 0, 'red');
      break;
    case '11':
      $("#idImageConstelacion").attr("src","images/Constalaciones/4PSK/11.png");
      initNew(index, amplitude, 0.2795, 0, 1.57, 'brown');
      break;
  }
};

var ObtenerQPSK = function (point, index) {
  switch (point) {
    case '00':
      $("#idImageConstelacion").attr("src","images/Constalaciones/QPSK/00.png");
      initNew(index, amplitude, 0.0698, 3.9269908169872414, 0, 'green');
      break;
    case '01':
      $("#idImageConstelacion").attr("src","images/Constalaciones/QPSK/01.png");
      initNew(index, amplitude, 0.0698, 0, 0.785, 'blue');
      break;
    case '10':
      $("#idImageConstelacion").attr("src","images/Constalaciones/QPSK/10.png");
      initNew(index, amplitude, 0.0698, 0, 5.495, 'red');
      break;
    case '11':
      $("#idImageConstelacion").attr("src","images/Constalaciones/QPSK/11.png");
      initNew(index, amplitude, 0.0698, 0, 2.356194490192345, 'brown');
      break;
  }
};

var Obtener8QAM = function (point, index) {
  switch (point) {
    case '000':
      $("#idImageConstelacion").attr("src","images/Constalaciones/8QAM/000.png");
      initNew(index, amplitude / 2, 0.13955, 0, 3.14, 'green');
      break;
    case '001':
      $("#idImageConstelacion").attr("src","images/Constalaciones/8QAM/001.png");
      initNew(index, amplitude, 0.13955, 0, 3.14, 'blue');
      break;
    case '010':
      $("#idImageConstelacion").attr("src","images/Constalaciones/8QAM/010.png");
      initNew(index, amplitude / 2, 0.13955, 1.55, 3.14, 'red');
      break;
    case '011':
      $("#idImageConstelacion").attr("src","images/Constalaciones/8QAM/011.png");
      initNew(index, amplitude, 0.13955, 1.55, 3.14, 'brown');
      break;
    case '100':
      $("#idImageConstelacion").attr("src","images/Constalaciones/8QAM/100.png");
      initNew(index, amplitude / 2, 0.13955, 0, 0, 'gray');
      break;
    case '101':
      $("#idImageConstelacion").attr("src","images/Constalaciones/8QAM/101.png");
      initNew(index, amplitude, 0.13955, 0, 0, 'orange');
      break;
    case '110':
      $("#idImageConstelacion").attr("src","images/Constalaciones/8QAM/110.png");
      initNew(index, amplitude / 2, 0.13955, 0, 1.57, 'black');
      break;
    case '111':
      $("#idImageConstelacion").attr("src","images/Constalaciones/8QAM/111.png");
      initNew(index, amplitude, 0.13955, 0, 1.57, 'purple');
      break;
  }
};

var ColocarCadenaEnGrafica = function (arrayDivisiones) {
  for (var x = 0; x < arrayDivisiones.length && x < 9; x++) {
    coordenadas = arrayUbicacionTexto[x];
    ejes = coordenadas.split(",");
    ctx.fillText(arrayDivisiones[x], ejes[0], ejes[1]);
  }
}

var GraficarPortadora = function (indice, amplitude, frequence, a, phi) {
  drawSinPortadora(indice, amplitude, frequence, a, phi);
}

var GraficarEspectroFrecuencia = function (tamano = "mayor") {
  $("#idImageEspectroFrecuencia").attr("src", "images/Espectros/" + tamano + ".png");
}

var PrepararPasoAPaso = function (tipo) {
  tipoPasoAPaso = tipo;
  indiceArrayDivisiones = 0;
  pulsoActual = 3.14;
  $('#idRowResultados').html("");
}

var ObtenerCodificacionPasoAPaso = function () {

  switch (tipoPasoAPaso) {
    case 'ASK':
      ObtenerASK(divisiones[indiceArrayDivisiones], indiceArrayDivisiones);
      break;

    case '2ASK':
      Obtener2ASK(divisiones[indiceArrayDivisiones], indiceArrayDivisiones);
      break;

    case 'FSK':
      ObtenerFSK(divisiones[indiceArrayDivisiones], indiceArrayDivisiones);
      break;

    case 'PSK':
      ObtenerPSK(divisiones[indiceArrayDivisiones], indiceArrayDivisiones);
      break;

    case '4PSK':
      Obtener4PSK(divisiones[indiceArrayDivisiones], indiceArrayDivisiones);
      break;

    case 'QPSK':
      ObtenerQPSK(divisiones[indiceArrayDivisiones], indiceArrayDivisiones);
      break;

    case '8QAM':
      Obtener8QAM(divisiones[indiceArrayDivisiones], indiceArrayDivisiones);
      break;

    default:
      console.log('Seleccion no valida');
  }
  indiceArrayDivisiones = indiceArrayDivisiones + 1;
}

var RestablecerPasoAPaso = function () {
  ObtenerCodificacion(tipoPasoAPaso);
}

var HabilitarBotonesYLimpiar = function () {
  $('#idRowResultados').html("");
  var tipo = $("#idSelectTipoProceso").val();
  if (tipo == "PasoAPaso") {
    $('#idPanelPasoAPaso').collapse('show');
  } else {
    $('#idPanelPasoAPaso').collapse('hide');
  }

  LimpiarCanvas();
}

/************************************************************************/
/*******************       FIN CODIFICACIONES       *********************/
/************************************************************************/