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
  /*
  for (var x = 0; x < cw - 2 * coordsOffset; x++) {
    if (x % 90 == 0) {

      //console.log(x + coordsOffset, (ch / 2) - 100);
      //console.log(x + coordsOffset, (ch / 2) + 100);
      
      ctx.moveTo(x + coordsOffset, (ch / 2) - 100);
      ctx.lineTo(x + coordsOffset, (ch / 2) + 100);
      ctx.stroke();
      ctx.fillText((~~(a * 100)) / 100, x + coordsOffset + 50, ch / 2 - 115);
      
      console.log((~~(a * 100)) / 100,",", x + coordsOffset ,",",ch / 2 - 115)
    }
    a += frequence;
    //console.log(a);
  }
  */
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
  /*
  for (var x = 0; x < cw - 2 * coordsOffset; x++) {
    console.log("kiko");
    if (x % 90 == 0) {

      console.log(x + coordsOffset, (ch / 2) - 100);
      console.log(x + coordsOffset, (ch / 2) + 100);
      
      ctx.moveTo(x + coordsOffset, (ch / 2) - 100);
      ctx.lineTo(x + coordsOffset, (ch / 2) + 100);
      ctx.stroke();
      ctx.fillText((~~(a * 100)) / 100, x + coordsOffset + 50, ch / 2 - 115);

      console.log("ubicacion: " , (~~(a * 100)) / 100, x + coordsOffset, ch / 2 - 115)
    }
    a += frequence;
  }
  */
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
  // limpieza señal modulada
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


function drawSinPortadora(indice, amplitude, frequence, a, phi) {
  //console.log("ampli:" + amplitude + " - frecue:" + frequence + " - a:" + a + " - phi:" + phi);
  //console.log("coordsOffset:" + coordsOffset + " - cw:" + cw);
  ctxPortadora.lineWidth = 3;
  ctxPortadora.beginPath();
  //ctx.moveTo(coordsOffset, ch / 2);
  var inicio = 90 * indice + 20;
  var fin = inicio + 91;
  for (var x = inicio; x < fin; x++) { // 20 - 111 // 110 - 201 /// 200 - 291 /// 290 - 381 // 380 - 471 // 
    var y = Math.sin(a + phi) * amplitude + ch / 2;
    a += frequence;
    ctxPortadora.lineTo(x, y);
  }

  ctxPortadora.strokeStyle = $("#idSelectColor").val();
  ctxPortadora.stroke();
  //alert("tramo 1");  
}

let cadena;

let indiceArrayDivisiones = 0;
let divisiones = [];
let tipoPasoAPaso = "";
let pulsoActual = 3.14;

var ObtenerCodificacion = function (tipo) {

  LimpiarCanvas();
  indiceArrayDivisiones = 0;
  //ColocarCadenaEnGrafica();
  amplitude = $("#idSelectAmplitud").val();
  divisiones = [];
  cadena = $("#idCadena").val();
  $("#idTipoModulacion").html("EN " + tipo);

  $("#idDivImagen4PSK").removeClass("d-block");
  $("#idDivImagen4PSK").addClass("d-none");
  $("#idDivImagen8QAM").removeClass("d-block");
  $("#idDivImagen8QAM").addClass("d-none");
  $("#idDivImagenQPSK").removeClass("d-block");
  $("#idDivImagenQPSK").addClass("d-none");
  

  if (cadena == "") {
    lanzarModalMensaje("Error!", "Se debe colocar una cadena binaria en el campo <b>Cadena a Procesar</b>.");
    $("#idCadena").focus();
    return;
  }
  var tipoProceso = $("#idSelectTipoProceso").val();
  switch (tipo) {
    case 'ASK':
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
      //initNew(index, amplitude, 0.279, 0, 3.14)
      var longitud = cadena.length;
      if (longitud % 2 != 0) {
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

      $("#idDivImagen4PSK").removeClass("d-none");
      $("#idDivImagen4PSK").addClass("d-block");

      if (tipoProceso == "Todo") {
        divisiones.forEach((point, index) => {
          Obtener4PSK(point, index);
        });
      } else {
        PrepararPasoAPaso(tipo);
      }
      break;

    case 'QPSK':
      var longitud = cadena.length;
      if (longitud % 2 != 0) {
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

      $("#idDivImagenQPSK").removeClass("d-none");
      $("#idDivImagenQPSK").addClass("d-block");

      if (tipoProceso == "Todo") {
        divisiones.forEach((point, index) => {
          ObtenerQPSK(point, index);
        });
      } else {
        PrepararPasoAPaso(tipo);
      }
      break;

    case '8QAM':
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

      $("#idDivImagen8QAM").removeClass("d-none");
      $("#idDivImagen8QAM").addClass("d-block");

      if (tipoProceso == "Todo") {
        divisiones.forEach((point, index) => {
          Obtener8QAM(point, index);
        });
      } else {
        PrepararPasoAPaso(tipo);
      }


      break;
    default:
      console.log('Seleccion no valida');
  }
};

var ObtenerASK = function (point, index) {
  if (point == 1) {
    initNew(index, amplitude, 0.13955, 0, 3.14);
    ArmarMensajeParaPanel("Digito = 1; Se conserva la misma amplitud que la portadora");
  } else {
    initNew(index, 0, 0.139, 0, 3.14);
    ArmarMensajeParaPanel("Digito = 0; La Amplitud de la señal modulada en este segmento es cero");
  }
};

var Obtener2ASK = function (point, index) {
  if (point == 1) {
    initNew(index, amplitude, 0.279, 0, 3.14);
    ArmarMensajeParaPanel("Digito = 1; Se conserva la misma amplitud que la portadora");
  } else {
    initNew(index, 0, 0.279, 0, 3.14);
    ArmarMensajeParaPanel("Digito = 0; La Amplitud de la señal modulada en este segmento es cero");
  }
};

var ObtenerFSK = function (point, index) {
  if (point == 1) {
    initNew(index, amplitude, 0.27955, 0, 3.14);
    ArmarMensajeParaPanel("Digito = 1; Aumenta la frecuencia con respecto a la portadora en este segmento");
  } else {
    initNew(index, amplitude, 0.13955, 0, 3.14);
    ArmarMensajeParaPanel("Digito = 0; Se conserva la misma frecuencia que en la portadora");
  }
};

var ObtenerPSK = function (point, index) {
  if (index == 0) {
    initNew(index, amplitude, 0.13955, 0, pulsoActual);
    ArmarMensajeParaPanel("Al ser el primer digito conserva la misma fase de la sinusoide de la portadora");
  } else {
    if (divisiones[index - 1] != point) {
      ArmarMensajeParaPanel("El digito actual (" + point + ") es distinto al anterior(" + divisiones[index - 1] + "). Se cambia de Fase Sinusoide.");
      if (pulsoActual == 3.14) {
        pulsoActual = 0;
      } else {
        pulsoActual = 3.14;
      }
    } else {
      ArmarMensajeParaPanel("El digito actual es igual al anterior. Se conserva la Fase Sinusoide.");
    }
    initNew(index, amplitude, 0.13955, 0, pulsoActual);
  }
};

var Obtener4PSK = function (point, index) {
  //  var pulsoActual = 3.14;

  switch (point) {
    case '00':
      initNew(index, amplitude, 0.2795, 0, 3.14);
      break;
    case '01':
      initNew(index, amplitude, 0.2795, 1.55, 3.14);
      break;
    case '10':
      initNew(index, amplitude, 0.2795, 0, 0);
      break;
    case '11':
      initNew(index, amplitude, 0.2795, 0, 1.57);
      break;
  }
};

var ObtenerQPSK = function (point, index) {
  switch (point) {
    case '00':
      initNew(index, amplitude, 0.0698, 0, 0.785);
      break;
    case '01':
      initNew(index, amplitude, 0.0698, 0, 2.356194490192345);
      break;
    case '10':
      initNew(index, amplitude, 0.0698, 0, 5.495);
      break;
    case '11':
      initNew(index, amplitude, 0.0698, 3.9269908169872414, 0);
      break;
  }
};

var Obtener8QAM = function (point, index) {

  switch (point) {
    case '000':
      initNew(index, amplitude / 2, 0.13955, 0, 3.14);
      break;
    case '001':
      initNew(index, amplitude, 0.13955, 0, 3.14);
      break;
    case '010':
      initNew(index, amplitude / 2, 0.13955, 1.55, 3.14);
      break;
    case '011':
      initNew(index, amplitude, 0.13955, 1.55, 3.14);
      break;
    case '100':
      initNew(index, amplitude / 2, 0.13955, 0, 0);
      break;
    case '101':
      initNew(index, amplitude, 0.13955, 0, 0);
      break;
    case '110':
      initNew(index, amplitude / 2, 0.13955, 0, 1.57);
      break;
    case '111':
      initNew(index, amplitude, 0.13955, 0, 1.57);
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

var PrepararPasoAPaso = function (tipo) {
  tipoPasoAPaso = tipo;
  indiceArrayDivisiones = 0;
  pulsoActual = 3.14;
  $('#idRowResultados').html("");
  //let indiceArrayDivisiones = 0;
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

var ArmarMensajeParaPanel = function (texto) {
  var mensajeEnHtml = '<div class="col-12"><div class="alert alert-primary" role="alert">' + texto + '</div></div>';
  $('#idRowResultados').html(mensajeEnHtml + $('#idRowResultados').html());
}
/************************************************************************/
/*******************       FIN CODIFICACIONES       *********************/
/************************************************************************/