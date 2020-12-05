function lanzarModalAlumno() {
    $("#idModalBuscarAlumnoPorDNI").modal();
}

function GenerarBinarioAutomaticamente(){
    i = Math.floor((Math.random() * 2));
    $("#idInputCadenaEnviada").val(i);
    i = Math.floor((Math.random() * 2));
    $("#idInputCadenaEnviada").val($("#idInputCadenaEnviada").val() + i);
    i = Math.floor((Math.random() * 2));
    $("#idInputCadenaEnviada").val($("#idInputCadenaEnviada").val() + i);
    i = Math.floor((Math.random() * 2));
    $("#idInputCadenaEnviada").val($("#idInputCadenaEnviada").val() + i);
    i = Math.floor((Math.random() * 2));
    $("#idInputCadenaEnviada").val($("#idInputCadenaEnviada").val() + i);
    i = Math.floor((Math.random() * 2));
    $("#idInputCadenaEnviada").val($("#idInputCadenaEnviada").val() + i);
    i = Math.floor((Math.random() * 2));
    $("#idInputCadenaEnviada").val($("#idInputCadenaEnviada").val() + i);
}

var opAccionCodificar = 1;
function AccionCodificar() {
    if ( $("#idInputCadenaEnviada").val() == "") {
        alert("Ingrese una cadena de transmisión para empezar.-");
        return false;
    }
    switch (opAccionCodificar) {
        case 1:
            CompletarDatosTablaCodificacion();
            $("#idTextAreaPaso1Codif").addClass("background-color-textArea");
            break;
        case 2:
            CompletarP0P1P2P3TablaCodificacion();
            $("#idTextAreaPaso2Codif").addClass("background-color-textArea");
            break;
        case 3:
            ReemplazarXPorPariedadP0P1P2P3TablaCodificacion();
            $("#idTextAreaPaso3Codif").addClass("background-color-textArea");
            break;
        case 4:
            ObtenerYMostrarCadenaCodificada();
            $("#idTextAreaPaso4Codif").addClass("background-color-textArea");
            break;
        default:
            //$("#idButtonAvanzar").prop('disabled', true);
            break;
    }
    opAccionCodificar = opAccionCodificar + 1;
}

function CompletarDatosTablaCodificacion() {
    var cadena = $("#idInputCadenaEnviada").val();
    $("#idIndice11").html(cadena.substr(0,1));
    $("#idIndice10").html(cadena.substr(1,1));
    $("#idIndice9").html(cadena.substr(2,1));
    $("#idIndice7").html(cadena.substr(3,1));
    $("#idIndice6").html(cadena.substr(4,1));
    $("#idIndice5").html(cadena.substr(5,1));
    $("#idIndice3").html(cadena.substr(6,1));
}

function CompletarP0P1P2P3TablaCodificacion() {
    $("#P0-0001").html($("#idIndice1").html());
    $("#P0-0011").html($("#idIndice3").html());
    $("#P0-0101").html($("#idIndice5").html());
    $("#P0-0111").html($("#idIndice7").html());
    $("#P0-1001").html($("#idIndice9").html());
    $("#P0-1011").html($("#idIndice11").html());

    $("#P1-0010").html($("#idIndice2").html());
    $("#P1-0011").html($("#idIndice3").html());
    $("#P1-0110").html($("#idIndice6").html());
    $("#P1-0111").html($("#idIndice7").html());
    $("#P1-1010").html($("#idIndice10").html());
    $("#P1-1011").html($("#idIndice11").html());

    $("#P2-0100").html($("#idIndice4").html());
    $("#P2-0101").html($("#idIndice5").html());
    $("#P2-0110").html($("#idIndice6").html());
    $("#P2-0111").html($("#idIndice7").html());

    $("#P3-1000").html($("#idIndice8").html());
    $("#P3-1001").html($("#idIndice9").html());
    $("#P3-1010").html($("#idIndice10").html());
    $("#P3-1011").html($("#idIndice11").html());
}

function ReemplazarXPorPariedadP0P1P2P3TablaCodificacion() {
    var dato = $("#P0-1011").html() + $("#P0-1001").html() + $("#P0-0111").html() + $("#P0-0101").html() + $("#P0-0011").html();
    console.log(dato);
    CalcularPariedad($("#P0-0001"), dato);

    var dato = $("#P1-1011").html() + $("#P1-1010").html() + $("#P1-0111").html() + $("#P1-0110").html() + $("#P1-0011").html();
    CalcularPariedad($("#P1-0010"), dato);

    var dato = $("#P2-0111").html() + $("#P2-0110").html() + $("#P2-0101").html();
    CalcularPariedad($("#P2-0100"), dato);

    var dato = $("#P3-1011").html() + $("#P3-1010").html() + $("#P3-1001").html();
    CalcularPariedad($("#P3-1000"), dato);
}

function CalcularPariedad(elemt, dato){
    dato = dato.replace(/0/g, "");
    var resultOfMod = dato.length % 2
    if ( resultOfMod == 0) { // par
        elemt.html("0");
    }
    else {
        elemt.html("1");
    }
}

function ObtenerYMostrarCadenaCodificada() {
    $("#idCeldaCodif-1011").html($("#P3-1011").html());
    $("#idCeldaCodif-1010").html($("#P3-1010").html());
    $("#idCeldaCodif-1001").html($("#P3-1001").html());
    $("#idCeldaCodif-1000").html($("#P3-1000").html());
    $("#idCeldaCodif-0111").html($("#P2-0111").html());
    $("#idCeldaCodif-0110").html($("#P2-0110").html());
    $("#idCeldaCodif-0101").html($("#P2-0101").html());
    $("#idCeldaCodif-0100").html($("#P2-0100").html());
    $("#idCeldaCodif-0011").html($("#P1-0011").html());
    $("#idCeldaCodif-0010").html($("#P1-0010").html());
    $("#idCeldaCodif-0001").html($("#P0-0001").html());

    $("#idInputCadenaRecibida").val($("#idCeldaCodif-1011").html() + $("#idCeldaCodif-1010").html() + $("#idCeldaCodif-1001").html() + $("#idCeldaCodif-1000").html() + $("#idCeldaCodif-0111").html() + $("#idCeldaCodif-0110").html() + $("#idCeldaCodif-0101").html() + $("#idCeldaCodif-0100").html() + $("#idCeldaCodif-0011").html() + $("#idCeldaCodif-0010").html() + $("#idCeldaCodif-0001").html());
}


/*------------------------------------------------------------*/

var opAccionDecodificar = 1;

function AccionDecodificar() {
    if ( $("#idInputCadenaRecibida").val() == "") {
        alert("Ingrese una cadena de recibir para empezar.-");
        return false;
    }
    switch (opAccionDecodificar) {
        case 1:
            CompletarDatosTablaDecodificacion();
            $("#idTextAreaPaso1Decodif").addClass("background-color-textArea");
            break;
        case 2:
            CompletarP0P1P2P3TablaDecodificacion();
            $("#idTextAreaPaso2Decodif").addClass("background-color-textArea");
            break;
        case 3:
            ObtenerPariedadPorFilaP0P1P2P3();
            $("#idTextAreaPaso3Decodif").addClass("background-color-textArea");
            break;
        case 4:
            $("#idTextAreaPaso4Decodif").addClass("background-color-textArea");
            var cond = DetectarError();
            if (cond == true) {
                opAccionDecodificar = opAccionDecodificar + 1;
            }
            break;
        case 5:
            $("#idTextAreaPaso5Decodif").addClass("background-color-textArea");
            CorregirErrorCadenaRecibida();
            break;
        case 6:
            MostrarCadenaDecodificada();
            $("#idTextAreaPaso6Decodif").addClass("background-color-textArea");
            break;
        default:
            //$("#idButtonAvanzarDecodificar").prop('disabled', true);
            break;
    }
    opAccionDecodificar = opAccionDecodificar + 1;
}

function CompletarDatosTablaDecodificacion() {
    var cadena = $("#idInputCadenaRecibida").val();
    $("#idTDIndice11").html(cadena.substr(0,1));
    $("#idTDIndice10").html(cadena.substr(1,1));
    $("#idTDIndice9").html(cadena.substr(2,1));
    $("#idTDIndice8").html(cadena.substr(3,1));
    $("#idTDIndice7").html(cadena.substr(4,1));
    $("#idTDIndice6").html(cadena.substr(5,1));
    $("#idTDIndice5").html(cadena.substr(6,1));
    $("#idTDIndice4").html(cadena.substr(7,1));
    $("#idTDIndice3").html(cadena.substr(8,1));
    $("#idTDIndice2").html(cadena.substr(9,1));
    $("#idTDIndice1").html(cadena.substr(10,1));
}

function CompletarP0P1P2P3TablaDecodificacion() {
    $("#TDP0-0001").html($("#idTDIndice1").html());
    $("#TDP0-0011").html($("#idTDIndice3").html());
    $("#TDP0-0101").html($("#idTDIndice5").html());
    $("#TDP0-0111").html($("#idTDIndice7").html());
    $("#TDP0-1001").html($("#idTDIndice9").html());
    $("#TDP0-1011").html($("#idTDIndice11").html());

    $("#TDP1-0010").html($("#idTDIndice2").html());
    $("#TDP1-0011").html($("#idTDIndice3").html());
    $("#TDP1-0110").html($("#idTDIndice6").html());
    $("#TDP1-0111").html($("#idTDIndice7").html());
    $("#TDP1-1010").html($("#idTDIndice10").html());
    $("#TDP1-1011").html($("#idTDIndice11").html());

    $("#TDP2-0100").html($("#idTDIndice4").html());
    $("#TDP2-0101").html($("#idTDIndice5").html());
    $("#TDP2-0110").html($("#idTDIndice6").html());
    $("#TDP2-0111").html($("#idTDIndice7").html());

    $("#TDP3-1000").html($("#idTDIndice8").html());
    $("#TDP3-1001").html($("#idTDIndice9").html());
    $("#TDP3-1010").html($("#idTDIndice10").html());
    $("#TDP3-1011").html($("#idTDIndice11").html());
}

function ObtenerPariedadPorFilaP0P1P2P3() {
    var dato = $("#TDP0-1011").html() + $("#TDP0-1001").html() + $("#TDP0-0111").html() + $("#TDP0-0101").html() + $("#TDP0-0011").html() + $("#TDP0-0001").html();
    CalcularPariedad($("#TRresultadoP0"), dato);
    
    var dato = $("#TDP1-1011").html() + $("#TDP1-1010").html() + $("#TDP1-0111").html() + $("#TDP1-0110").html() + $("#TDP1-0011").html() + $("#TDP1-0010").html();
    CalcularPariedad($("#TRresultadoP1"), dato);

    var dato = $("#TDP2-0111").html() + $("#TDP2-0110").html() + $("#TDP2-0101").html() + $("#TDP2-0100").html();
    CalcularPariedad($("#TRresultadoP2"), dato);

    var dato = $("#TDP3-1011").html() + $("#TDP3-1010").html() + $("#TDP3-1001").html() + $("#TDP3-1000").html();
    CalcularPariedad($("#TRresultadoP3"), dato);
}

var indiceErroneoGeneral = 0;
function DetectarError() {
    var dato = $("#TRresultadoP3").html() + $("#TRresultadoP2").html() + $("#TRresultadoP1").html() + $("#TRresultadoP0").html();
    let indiceErroneo = parseInt(dato, 2);
    if (indiceErroneo == 0) {
        alert("La Cadena Recibida es correcta");
        var cadena = $("#idInputCadenaRecibida").val();
        $("#TDidCeldaCodif11").html(cadena.substr(0,1));
        $("#TDidCeldaCodif10").html(cadena.substr(1,1));
        $("#TDidCeldaCodif9").html(cadena.substr(2,1));
        $("#TDidCeldaCodif8").html(cadena.substr(3,1));
        $("#TDidCeldaCodif7").html(cadena.substr(4,1));
        $("#TDidCeldaCodif6").html(cadena.substr(5,1));
        $("#TDidCeldaCodif5").html(cadena.substr(6,1));
        $("#TDidCeldaCodif4").html(cadena.substr(7,1));
        $("#TDidCeldaCodif3").html(cadena.substr(8,1));
        $("#TDidCeldaCodif2").html(cadena.substr(9,1));
        $("#TDidCeldaCodif1").html(cadena.substr(10,1));
        return true;
    }
    else {
        alert("La Cadena Recibida presenta un error en la posición decimal: " + indiceErroneo);
        $("#idTDIndice" + indiceErroneo).addClass("bg-celda-crimson");
        indiceErroneoGeneral = indiceErroneo;
        return false;
    }
}

function CorregirErrorCadenaRecibida() {
    var cadena = $("#idInputCadenaRecibida").val();
    $("#TDidCeldaCodif11").html(cadena.substr(0,1));
    $("#TDidCeldaCodif10").html(cadena.substr(1,1));
    $("#TDidCeldaCodif9").html(cadena.substr(2,1));
    $("#TDidCeldaCodif8").html(cadena.substr(3,1));
    $("#TDidCeldaCodif7").html(cadena.substr(4,1));
    $("#TDidCeldaCodif6").html(cadena.substr(5,1));
    $("#TDidCeldaCodif5").html(cadena.substr(6,1));
    $("#TDidCeldaCodif4").html(cadena.substr(7,1));
    $("#TDidCeldaCodif3").html(cadena.substr(8,1));
    $("#TDidCeldaCodif2").html(cadena.substr(9,1));
    $("#TDidCeldaCodif1").html(cadena.substr(10,1));
    //$("#idButtonAvanzarDecodificar").prop('disabled', true);

    $("#TDidCeldaCodif" + indiceErroneoGeneral).addClass("bg-celda-darkgreen");
    var valor = $("#idTDIndice" + indiceErroneoGeneral).html();
    if (valor == 1) {
        valor = 0;
    }
    else {
        valor = 1;
    }
    $("#TDidCeldaCodif" + indiceErroneoGeneral).html(valor);
}

function MostrarCadenaDecodificada() {
    $("#TRCadenaDeco7").html($("#TDidCeldaCodif11").html());
    $("#TRCadenaDeco6").html($("#TDidCeldaCodif10").html());    
    $("#TRCadenaDeco5").html($("#TDidCeldaCodif9").html());
    $("#TRCadenaDeco4").html($("#TDidCeldaCodif7").html());
    $("#TRCadenaDeco3").html($("#TDidCeldaCodif6").html());
    $("#TRCadenaDeco2").html($("#TDidCeldaCodif5").html());
    $("#TRCadenaDeco1").html($("#TDidCeldaCodif3").html());
}

function RestablecerDecodificar() {
    opAccionDecodificar = 1;
    $("#idTextAreaPaso1Decodif").removeClass("background-color-textArea");
    $("#idTextAreaPaso2Decodif").removeClass("background-color-textArea");
    $("#idTextAreaPaso3Decodif").removeClass("background-color-textArea");
    $("#idTextAreaPaso4Decodif").removeClass("background-color-textArea");
    $("#idTextAreaPaso5Decodif").removeClass("background-color-textArea");
    $("#idTextAreaPaso6Decodif").removeClass("background-color-textArea");
    $("#idTDIndice" + indiceErroneoGeneral).removeClass("bg-celda-crimson");
    $("#TDidCeldaCodif" + indiceErroneoGeneral).removeClass("bg-celda-darkgreen");
    $("#TDidCeldaCodif11").html("");
    $("#TDidCeldaCodif10").html("");
    $("#TDidCeldaCodif9").html("");
    $("#TDidCeldaCodif8").html("");
    $("#TDidCeldaCodif7").html("");
    $("#TDidCeldaCodif6").html("");
    $("#TDidCeldaCodif5").html("");
    $("#TDidCeldaCodif4").html("");
    $("#TDidCeldaCodif3").html("");
    $("#TDidCeldaCodif2").html("");
    $("#TDidCeldaCodif1").html("");

    $("#idTDIndice11").html("");
    $("#idTDIndice10").html("");
    $("#idTDIndice9").html("");
    $("#idTDIndice8").html("");
    $("#idTDIndice7").html("");
    $("#idTDIndice6").html("");
    $("#idTDIndice5").html("");
    $("#idTDIndice4").html("");
    $("#idTDIndice3").html("");
    $("#idTDIndice2").html("");
    $("#idTDIndice1").html("");

    $("#TDP0-1011").html("-");
    $("#TDP0-1001").html("-");
    $("#TDP0-0111").html("-");
    $("#TDP0-0101").html("-");
    $("#TDP0-0011").html("-");
    $("#TDP0-0001").html("-");

    $("#TDP1-1011").html("-");
    $("#TDP1-1010").html("-");
    $("#TDP1-0111").html("-");
    $("#TDP1-0110").html("-");
    $("#TDP1-0011").html("-");
    $("#TDP1-0010").html("-");

    $("#TDP2-0111").html("-");
    $("#TDP2-0110").html("-");
    $("#TDP2-0101").html("-");
    $("#TDP2-0100").html("-");

    $("#TDP3-1011").html("-");
    $("#TDP3-1010").html("-");
    $("#TDP3-1001").html("-");
    $("#TDP3-1000").html("-");

    $("#TRresultadoP3").html("-");
    $("#TRresultadoP2").html("-");
    $("#TRresultadoP1").html("-");
    $("#TRresultadoP0").html("-");
    
    $("#TRCadenaDeco7").html("-");
    $("#TRCadenaDeco6").html("-");
    $("#TRCadenaDeco5").html("-");
    $("#TRCadenaDeco4").html("-");
    $("#TRCadenaDeco3").html("-");
    $("#TRCadenaDeco2").html("-");
    $("#TRCadenaDeco1").html("-");

}