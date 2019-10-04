/** PROMISES EN JAVASCRIPT
 * FUENTE: https://anexsoft.com/ejemplo-practico-de-promise-con-javascript
 */
function EjecutarJs() {
    LanzarRetardoConPromise()
    alert("mensaje 2");
}

function LanzarRetardo() {
    setTimeout("alert('mensaje 1');", 3000);
}

function EjecutarJsConPromise() {
    LanzarRetardoConPromise().then( r => {
        return r;
    }).then(r => {
        alert("mensaje 2");
    })
}

function LanzarRetardoConPromise() {
    return new Promise(function(resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', 'https://jsonplaceholder.typicode.com/posts');
        req.onload = function() {
            alert("Mensaje 1");
            if (req.status == 200) {
            resolve(JSON.parse(req.response));
            }
            else {
            reject();
            }
        };
        req.send();
    })
}
