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
/*
function AjustarEstala() {
    var nuevaEscala = $("#idSelectEscala").val();
    escala = nuevaEscala;
}
*/
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


function drawPlanCartesiano() {
    // Flecha triângulo ^
    context.beginPath();
    context.moveTo(margin_spaces - 5, margin_spaces);
    context.lineTo(margin_spaces + 5, margin_spaces);
    context.lineTo(margin_spaces, margin_spaces - 5);
    context.fill();

    // cria a linha vertical
    context.moveTo(margin_spaces, margin_spaces);
    context.lineTo(margin_spaces, alto + 100 - margin_spaces / 2);

    // cria a linha horizontal  
    context.moveTo(margin_spaces / 2, alto - margin_spaces);
    context.lineTo(ancho * 3.5 - margin_spaces, alto - margin_spaces);
    context.stroke();

    // cria flecha triangular >
    context.moveTo(ancho * 3.5 - margin_spaces, alto - margin_spaces - 5);
    context.lineTo(ancho * 3.5 - margin_spaces, alto - margin_spaces + 5);
    context.lineTo(ancho * 3.5 - margin_spaces + 6, alto - margin_spaces);
    context.fill();
    context.closePath();

    /*
        //ponto circular no ponto zero
        context.moveTo(margin_spaces,alto-margin_spaces);
        context.beginPath();
        context.arc(margin_spaces,alto-margin_spaces, 2, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
    */

    // Percorre a configuração dos pontos cartesianos mandando para função drawnPoint
    /*
    pontosCartesianos.forEach((point, index) => {
      drawnPoint(point, index);
    });
    */
    var columnas;
    console.log(escala);
    switch (escala) {
        case 15:
            columnas = 15;
            break;
        case 24: // foo es 0, por lo tanto se cumple la condición y se ejecutara el siguiente bloque
            columnas = 23;
            break
        default:
            columnas = 15;
            break;
    }

    for (var i = 1; i <= columnas; i++) {
        drawnPoint([i * 2, -2], 0);
        drawnPoint([i * 2, 2], 0);
    }
     

    /*
    drawnPoint([2, -2], 0);
    drawnPoint([2, 2], 0);

    drawnPoint([4, -2], 0);
    drawnPoint([4, 2], 0);

    drawnPoint([6, -2], 0);
    drawnPoint([6, 2], 0);

    drawnPoint([8, -2], 0);
    drawnPoint([8, 2], 0);

    drawnPoint([10, -2], 0);
    drawnPoint([10, 2], 0);

    drawnPoint([12, -2], 0);
    drawnPoint([12, 2], 0);

    drawnPoint([14, -2], 0);
    drawnPoint([14, 2], 0);

    drawnPoint([16, -2], 0);
    drawnPoint([16, 2], 0);

    drawnPoint([18, -2], 0);
    drawnPoint([18, 2], 0);

    drawnPoint([20, -2], 0);
    drawnPoint([20, 2], 0);

    drawnPoint([22, -2], 0);
    drawnPoint([22, 2], 0);

    drawnPoint([24, -2], 0);
    drawnPoint([24, 2], 0);

    drawnPoint([26, -2], 0);
    drawnPoint([26, 2], 0);

    drawnPoint([28, -2], 0);
    drawnPoint([28, 2], 0);
    */

    // dropa as linhas
    //drawnLines(pontosCartesianos, linesCartesianas);
}


/*
Função que desenha todos os componentes de um ponto no plano cartesiano
*/
function drawnPoint(coordenada, index) {
    // Converte a coordenada do 1º Quadrante para 4º Quadrante (Pixels) 
    let coordenada_normalizada = converte_primeiro_para_quarto(coordenada);

    context.beginPath();
    context.moveTo(coordenada_normalizada[0], coordenada_normalizada[1]);

    // cria o ponto
    //context.arc(coordenada_normalizada[0], coordenada_normalizada[1], 3, 0, Math.PI * 2, true);
    // context.fill();

    // cria o texto
    context.font = 'italic 18px roboto';
    context.fillText(alfabeto[index], coordenada_normalizada[0] - margin_spaces * 1.4, coordenada_normalizada[1] -
        margin_spaces * 0.2);
    context.closePath();

    // cria linha pontilhada horizontal
    context.beginPath();
    context.setLineDash([1, 1]);
    context.moveTo(coordenada_normalizada[0], coordenada_normalizada[1]);
    context.lineTo(margin_spaces, coordenada_normalizada[1]);
    context.stroke();
    context.closePath();

    // cria linha pontilhada vertical
    context.beginPath();
    context.moveTo(coordenada_normalizada[0], coordenada_normalizada[1]);
    context.lineTo(coordenada_normalizada[0], alto - margin_spaces);
    context.stroke();
    context.closePath();

    // cria os textos nas absissas e nas ordenadas
    context.font = '30px arial';
    //context.strokeStyle = '#ff0000';
    context.fillText('', coordenada_normalizada[0] - margin_spaces * 0.3, alto - margin_spaces * 0.3);
    context.fillText('', margin_spaces * 0.3, coordenada_normalizada[1]);

    //

}

let espacioLetraInicial = 110;
let espacioEntreLetra = 55;

let espacioLetraInicialChica = 95;
let espacioEntreLetraChica = 30;

let espacioSobreGrafico = 130;
let espacioSobreGraficoChico = 150;

var EscribirTexto = function (caracter, indice) {
    
    console.log(escala);
    if (escala ==15) {
        context.font = '30px arial';
        context.fillText(caracter, espacioLetraInicial + espacioEntreLetra * indice + indice * 4, espacioSobreGrafico);  
    }
    else {
        context.font = '20px arial';
        context.fillText(caracter, espacioLetraInicialChica + espacioEntreLetraChica * indice + indice * 8 - 2, espacioSobreGraficoChico);
    }
};

// Cria as linhas no plano apartr das coordenas cartesianas
function drawnLines(coordenadas, lines, color) {
    context.strokeStyle = color;
    let coordenada_convertidas = coordenadas;

    //percorre as regras das linhas
    lines.forEach(line => {
        /* 
          Para cada coordenada em que a linha referencia, 
          antes de deter a coordenada do quadrante, é somado um valor de direção
          primeira ponto da linha diminui e o segundo um maior
        */
        coordenada_convertidas = coordenada_convertidas.map(
            (coordenada, index) => {
                let direction = 0;
                return converte_primeiro_para_quarto([coordenada[0] + direction, coordenada[1] + direction]);
            });

        context.beginPath();
        context.lineWidth = 5;
        context.setLineDash([0, 0]);

        context.moveTo(coordenada_convertidas[line[0]][0], coordenada_convertidas[line[0]][1]);
        context.lineTo(coordenada_convertidas[line[1]][0], coordenada_convertidas[line[1]][1]);
        context.stroke();
        context.closePath();
    });
}
/*
function angle(cx, cy, ex, ey) {
  var dy = ey - cy;
  var dx = ex - cx;
  var theta = Math.atan2(dy, dx); // range (-PI, PI]
  theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
  //if (theta < 0) theta = 360 + theta; // range [0, 360)
  return theta;
}
*/


/******************/
/******************/
/* CODIFICACIONES */
/******************/
/******************/

var ObtenerCodificacion = function (tipoCodificacion) {

    var cadena = $("#idCadena").val();
    if (cadena == "") {
        //alert();
        lanzarModalMensaje("Error!", "Se debe colocar una cadena binaria en el campo <b>Cadena a Procesar</b>.");
        $("#idCadena").focus();
        return;
    }

    try {
        //nonExistentFunction();

        switch (tipoCodificacion) {
            case 'UniPolarNRZ':
                console.log(converte_primeiro_para_quarto);
                var tipoProceso = $("#idSelectTipoProceso").val();
                LimpiarCanvas();
                pontosCartesianosNRZ = [];
                divisionesNRZ = $("#idCadena").val().split("");
                divisionesNRZ.forEach((point, index) => {
                    if (point == 1) {
                        pontosCartesianosNRZ.push([index * 2, 2, index]);
                        pontosCartesianosNRZ.push([index * 2 + 2, 2, index]);
                    } else {
                        pontosCartesianosNRZ.push([index * 2, 0, index]);
                        pontosCartesianosNRZ.push([index * 2 + 2, 0, index]);
                    }
                });
                color = '#007bff';
                console.log(pontosCartesianosNRZ);
                if (tipoProceso == "todo") {
                    pontosCartesianosNRZ.forEach((point, index) => {
                        ObtenerUniPolarNRZ(index);
                    });
                }
                else {
                    PrepararPasoAPaso(tipoCodificacion);
                }
                
                break;
            case 'PolarNRZ_L':
                ObtenerPolarNRZ_L();
                break;
            case 'PolarNRZ_I':
                ObtenerPolarNRZ_I();
                break;
            case 'PolarRZ':
                ObtenerPolarRZ();
                break;
            case 'Manchester':
                ObtenerManchester();
                break;
            case 'ManchesterDiferencial':
                ObtenerManchesterDiferencial();
                break;
            case 'AMI':
                ObtenerAMI();
                break;
            case 'PseudoTernaria':
                ObtenerPseudoTernaria();
                break;
            case 'B8ZS':
                ObtenerB8ZS();
                break;
            case 'HDB3':
                ObtenerHDB3();
                break;
        }
    } catch (error) {
        var divisiones = $("#idCadena").val().split("");
        divisiones.forEach((point, index) => {
            EscribirTexto(point, index);
        });
    }

};

var ObtenerUniPolarNRZ = function (index) {
        console.log(index);
        var saltos = 0;

        linesCartesianas = [
            [index, index + 1]
        ];
        //console.log(pontosCartesianosNRZ[i][2]);
        
        for (let i = index; i < pontosCartesianosNRZ.length; i++) {
            var dato1 = pontosCartesianosNRZ[i][2];
            try {
                var dato2 = pontosCartesianosNRZ[i + 1][2];
            } catch (error) {
                var dato2 = -1;
            }
            
            console.log(dato1, dato2);
            if (dato1 == dato2) {
                linesCartesianas.push(i+1, i+2);
            }
            else {
                i = pontosCartesianosNRZ.length + 1;
            }
        }
        index = index +1;
        console.log(linesCartesianas)

        console.log(pontosCartesianosNRZ[index][2]);

        drawnLines(pontosCartesianosNRZ, linesCartesianas, 'red');
    //context.fillText("R", 536, 276); // 536,276
};

var ObtenerPolarNRZ_L = function () {
    LimpiarCanvas();
    pontosCartesianos = [];
    var divisiones = $("#idCadena").val().split("");
    divisiones.forEach((point, index) => {
        if (point == 1) {
            pontosCartesianos.push([index * 2, -1]);
            pontosCartesianos.push([index * 2 + 2, -1]);
        } else {
            pontosCartesianos.push([index * 2, 1]);
            pontosCartesianos.push([index * 2 + 2, 1]);
        }
    });
    color = '#007bff';
    pontosCartesianos.forEach((point, index) => {
        linesCartesianas = [
            [index, index + 1]
        ];
        drawnLines(pontosCartesianos, linesCartesianas, color);
    });
};

var ObtenerPolarNRZ_I = function () {
    LimpiarCanvas();
    voltaje = $("#idVoltaje").val();
    pontosCartesianos = [];

    if (voltaje == 1) {
        pontosCartesianos.push([0, 1]);
    } else {
        pontosCartesianos.push([0, -1]);
    }

    var divisiones = $("#idCadena").val().split("");

    divisiones.forEach((point, index) => {

        if (voltaje == 1 && point == 1) {
            voltaje = -1;
            pontosCartesianos.push([index * 2, -1]);
            pontosCartesianos.push([index * 2 + 2, -1]);
        } else {
            if (voltaje == -1 && point == 1) {
                voltaje = 1;
                pontosCartesianos.push([index * 2, 1]);
                pontosCartesianos.push([index * 2 + 2, 1]);
            } else {
                //pontosCartesianos.push([index * 2 , 1 * voltaje]);
                pontosCartesianos.push([index * 2 + 2, 1 * voltaje]);
            }
        }
    });
    color = '#007bff';

    pontosCartesianos.forEach((point, index) => {
        linesCartesianas = [
            [index, index + 1]
        ];
        drawnLines(pontosCartesianos, linesCartesianas, color);
    });
};

var ObtenerPolarRZ = function () {
    LimpiarCanvas();
    pontosCartesianos = [];
    var divisiones = $("#idCadena").val().split("");

    divisiones.forEach((point, index) => {
        if (point == 1) {
            pontosCartesianos.push([index * 2, 1]);
            pontosCartesianos.push([index * 2 + 1, 1]);
            pontosCartesianos.push([index * 2 + 1, 0]);
            pontosCartesianos.push([index * 2 + 2, 0]);
        } else {
            pontosCartesianos.push([index * 2, -1]);
            pontosCartesianos.push([index * 2 + 1, -1]);
            pontosCartesianos.push([index * 2 + 1, 0]);
            pontosCartesianos.push([index * 2 + 2, 0]);
        }
    });
    color = '#007bff';
    pontosCartesianos.forEach((point, index) => {
        linesCartesianas = [
            [index, index + 1]
        ];
        drawnLines(pontosCartesianos, linesCartesianas, color);
    });
};

var ObtenerManchester = function () {
    LimpiarCanvas();
    pontosCartesianos = [];
    var divisiones = $("#idCadena").val().split("");

    divisiones.forEach((point, index) => {
        if (point == 1) {
            pontosCartesianos.push([index * 2, -2]);
            pontosCartesianos.push([index * 2 + 1, -2]);
            pontosCartesianos.push([index * 2 + 1, 2]);
            pontosCartesianos.push([index * 2 + 2, 2]);
        } else {
            pontosCartesianos.push([index * 2, 2]);
            pontosCartesianos.push([index * 2 + 1, 2]);
            pontosCartesianos.push([index * 2 + 1, -2]);
            pontosCartesianos.push([index * 2 + 2, -2]);
        }
    });
    color = '#17a2b8';
    pontosCartesianos.forEach((point, index) => {
        linesCartesianas = [
            [index, index + 1]
        ];
        drawnLines(pontosCartesianos, linesCartesianas, color);
    });
};


var ObtenerManchesterDiferencial = function () {
    LimpiarCanvas();
    pontosCartesianos = [];

    voltaje = $("#idVoltaje").val();
    if (voltaje == 1)
        pontosCartesianos.push([0, 2]);
    else
        pontosCartesianos.push([0, -2]);

    var divisiones = $("#idCadena").val().split("");

    divisiones.forEach((point, index) => {
        if (point == 1) {

            pontosCartesianos.push([index * 2, 2 * voltaje]);
            pontosCartesianos.push([index * 2 + 1, 2 * voltaje]);
            pontosCartesianos.push([index * 2 + 1, -2 * voltaje]);
            pontosCartesianos.push([index * 2 + 2, -2 * voltaje]);
            voltaje = voltaje * -1;
        } else {
            pontosCartesianos.push([index * 2, -2 * voltaje]);
            pontosCartesianos.push([index * 2 + 1, -2 * voltaje]);
            pontosCartesianos.push([index * 2 + 1, 2 * voltaje]);
            pontosCartesianos.push([index * 2 + 2, 2 * voltaje]);
        }
    });

    color = '#17a2b8';
    pontosCartesianos.forEach((point, index) => {
        linesCartesianas = [
            [index, index + 1]
        ];
        drawnLines(pontosCartesianos, linesCartesianas, color);
    });
};

var ObtenerAMI = function (voltaje) {
    LimpiarCanvas();
    voltaje = $("#idVoltaje").val();
    voltaje = voltaje * (-1);

    pontosCartesianos = [];
    var divisiones = $("#idCadena").val().split("");

    divisiones.forEach((point, index) => {
        if (point == 1) {
            pontosCartesianos.push([index * 2, 0]);
            pontosCartesianos.push([index * 2, 2 * voltaje]);
            pontosCartesianos.push([index * 2 + 2, 2 * voltaje]);
            voltaje = voltaje * (-1);
        } else {
            pontosCartesianos.push([index * 2, 0]);
            pontosCartesianos.push([index * 2 + 2, 0]);
        }
    });
    color = '#ff0000';
    pontosCartesianos.forEach((point, index) => {
        linesCartesianas = [
            [index, index + 1]
        ];
        drawnLines(pontosCartesianos, linesCartesianas, color);
    });
};

var ObtenerPseudoTernaria = function () {
    LimpiarCanvas();

    voltaje = $("#idVoltaje").val();

    pontosCartesianos = [];
    pontosCartesianos.push([0, 0]);

    var divisiones = $("#idCadena").val().split("");

    divisiones.forEach((point, index) => {
        if (point == 1) {
            pontosCartesianos.push([index * 2, 0]);
            pontosCartesianos.push([index * 2 + 2, 0]);
        } else {
            pontosCartesianos.push([index * 2, 2 * voltaje]);
            pontosCartesianos.push([index * 2 + 2, 2 * voltaje]);
            voltaje = voltaje * -1;
        }
    });
    color = '#ff0000';
    pontosCartesianos.forEach((point, index) => {
        linesCartesianas = [
            [index, index + 1]
        ];
        drawnLines(pontosCartesianos, linesCartesianas, color);
    });
};

var ObtenerB8ZS = function () {
    LimpiarCanvas();

    voltaje = $("#idVoltaje").val();
    voltaje = voltaje * (-1);
    pontosCartesianos = [];
    pontosCartesianos.push([0, 0]);

    var miCadena = $("#idCadena").val();
    var divisiones = miCadena.split("");

    var longitudCadena = miCadena.length;
    var index = 0;

    //divisiones.forEach((point, index) => {
    while (index < longitudCadena) {
        var cadenaParcial = miCadena.substr(index, 8);

        if (cadenaParcial == "00000000") {
            //if (voltaje == 1) {
            pontosCartesianos.push([index * 2, 0]);
            pontosCartesianos.push([index * 2 + 6, 0]);
            pontosCartesianos.push([index * 2 + 6, 2 * voltaje * -1]);
            pontosCartesianos.push([index * 2 + 8, 2 * voltaje * -1]);
            pontosCartesianos.push([index * 2 + 8, -2 * voltaje * -1]);
            pontosCartesianos.push([index * 2 + 10, -2 * voltaje * -1]);
            pontosCartesianos.push([index * 2 + 10, 0 * voltaje * -1]);
            pontosCartesianos.push([index * 2 + 12, 0 * voltaje * -1]);
            pontosCartesianos.push([index * 2 + 12, -2 * voltaje * -1]);
            pontosCartesianos.push([index * 2 + 14, -2 * voltaje * -1]);
            pontosCartesianos.push([index * 2 + 14, 2 * voltaje * -1]);
            pontosCartesianos.push([index * 2 + 16, 2 * voltaje * -1]);
            pontosCartesianos.push([index * 2 + 16, 0 * voltaje * -1]);
            //}
            index = index + 8;
        } else {
            if (miCadena[index] == 1) {
                pontosCartesianos.push([index * 2, 2 * voltaje]);
                pontosCartesianos.push([index * 2 + 2, 2 * voltaje]);
                voltaje = voltaje * (-1);
            } else {
                pontosCartesianos.push([index * 2, 0]);
                pontosCartesianos.push([index * 2 + 2, 0]);
            }
            index = index + 1;
        }
    }

    color = '#ff0000';
    pontosCartesianos.forEach((point, index) => {
        linesCartesianas = [
            [index, index + 1]
        ];
        drawnLines(pontosCartesianos, linesCartesianas, color);
    });
};

var ObtenerHDB3 = function () {
    LimpiarCanvas();

    voltaje = $("#idVoltaje").val();
    voltaje = voltaje * (-1);
    
    pontosCartesianos = [];
    pontosCartesianos.push([0, 0]);

    var miCadena = $("#idCadena").val();
    var divisiones = miCadena.split("");

    var longitudCadena = miCadena.length;
    var index = 0;
    var cantidadUnos = 0;
    while (index < longitudCadena) {
        var cadenaParcial = miCadena.substr(index, 4);
        if (cadenaParcial == "0000") {
            if (cantidadUnos % 2 == 0) {
                voltaje = voltaje * -1;
                pontosCartesianos.push([index * 2, 0]);
                pontosCartesianos.push([index * 2, 2 * voltaje * -1]);
                pontosCartesianos.push([index * 2 + 2, 2 * voltaje * -1]);
                pontosCartesianos.push([index * 2 + 2, 0]);
                pontosCartesianos.push([index * 2 + 6, 0]);
                pontosCartesianos.push([index * 2 + 6, 2 * voltaje * -1]);
                pontosCartesianos.push([index * 2 + 8, 2 * voltaje * -1]);
                pontosCartesianos.push([index * 2 + 8, 0]);
            } else {
                pontosCartesianos.push([index * 2, 0]);
                pontosCartesianos.push([index * 2 + 6, 0]);
                pontosCartesianos.push([index * 2 + 6, 2 * voltaje * -1]);
                pontosCartesianos.push([index * 2 + 8, 2 * voltaje * -1]);
                pontosCartesianos.push([index * 2 + 8, 0]);
            }
            index = index + 4;
            cantidadUnos = 0;
        } else {
            if (miCadena[index] == 1) {
                cantidadUnos = cantidadUnos + 1;
                pontosCartesianos.push([index * 2, 2 * voltaje]);
                pontosCartesianos.push([index * 2 + 2, 2 * voltaje]);
                voltaje = voltaje * (-1);
            } else {
                pontosCartesianos.push([index * 2, 0]);
                pontosCartesianos.push([index * 2 + 2, 0]);
            }
            index = index + 1;
        }
    }

    color = '#ff0000';
    pontosCartesianos.forEach((point, index) => {
        linesCartesianas = [
            [index, index + 1]
        ];
        drawnLines(pontosCartesianos, linesCartesianas, color);
    });
};

var LimpiarCanvas = function () {
    canvas.width = canvas.width;
    //$("#Cartesiano").html("");
    drawPlanCartesiano();
}

var LanzarToast = function () {
    $('.toast').toast('show')
}

var PrepararPasoAPaso = function (tipo) {
    tipoPasoAPaso = tipo;
    indiceArrayDivisiones = 0;
    pulsoActual = 3.14;
    $('#idRowResultados').html("");
  }

  var ObtenerCodificacionPasoAPaso = function () {

    switch (tipoPasoAPaso) {
      case 'UniPolarNRZ':
        punteroNRZ = punteroNRZ + 1;
        ObtenerUniPolarNRZ(punteroNRZ);
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
//ObtenerPseudoTernaria