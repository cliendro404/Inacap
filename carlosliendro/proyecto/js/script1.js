function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var check1 = document.getElementById("check1").checked;
    var check2 = document.getElementById("check2").checked;
    var ciudad = document.getElementById("ciudad").value;

    if (nombre == "" || apellido == "" || !check1 || !check2 || ciudad == "") {
        window.alert("Por favor completa todos los campos del formulario.");
        return;
    }

    document.getElementById("miModal").style.display = "block";
    document.getElementById("modal-texto").innerText = "Formulario enviado correctamente! Hola " + nombre + " " + apellido;
}

function cerrarModal() {
    document.getElementById("miModal").style.display = "none";
}