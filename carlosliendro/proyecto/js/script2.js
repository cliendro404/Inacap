function verificarFechas() {
    var fechaInicio = document.getElementById("fechaInicio").value;
    var fechaCierre = document.getElementById("fechaCierre").value;

    if (fechaInicio == "" || fechaCierre == "") {
        alert("Debe ingresar ambas fechas");
        return;
    }

    var inicio = new Date(fechaInicio);
    var cierre = new Date(fechaCierre);

    if (inicio > cierre) {
        alert("Error: La fecha de inicio no puede ser mayor a la fecha de cierre");
    } else {
        var ventana = window.open("", "resultado", "width=400,height=200");
        ventana.document.write("<h3>Fechas correctas</h3>");
        ventana.document.write("<p>Fecha de inicio: " + fechaInicio + "</p>");
        ventana.document.write("<p>Fecha de cierre: " + fechaCierre + "</p>");
    }
}
