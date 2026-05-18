function cambiarTamano() {
    var caja = document.getElementById("cajaPrueba");
    caja.style.fontSize = "28px";
}

function cambiarColor() {
    var caja = document.getElementById("cajaPrueba");
    caja.style.backgroundColor = "#f39c12";
    caja.style.color = "white";
}

function ocultarMostrar() {
    var caja = document.getElementById("cajaPrueba");
    if (caja.style.display == "none") {
        caja.style.display = "block";
    } else {
        caja.style.display = "none";
    }
}

function cambiarBorde() {
    var caja = document.getElementById("cajaPrueba");
    caja.style.border = "4px dashed red";
    caja.style.borderRadius = "20px";
}

function resetear() {
    var caja = document.getElementById("cajaPrueba");
    caja.style.fontSize = "";
    caja.style.backgroundColor = "";
    caja.style.color = "";
    caja.style.display = "block";
    caja.style.border = "";
    caja.style.borderRadius = "";
}
