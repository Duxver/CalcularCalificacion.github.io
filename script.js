function calcularCalificacion() {
    // Obtener los valores de las calificaciones
    var calificacion1 = parseFloat(document.getElementById('calificacion1').value);
    var calificacion2 = parseFloat(document.getElementById('calificacion2').value);
    var calificacion3 = parseFloat(document.getElementById('calificacion3').value);
    var calificacion4 = parseFloat(document.getElementById('calificacion4').value);

    // Aplicar los porcentajes
    var porcentaje1 = 0.10;
    var porcentaje2 = 0.10;
    var porcentaje3 = 0.20;
    var porcentaje4 = 0.60;

    // Calcular la calificación final
    var calificacionFinal = (calificacion1 * porcentaje1) +
                            (calificacion2 * porcentaje2) +
                            (calificacion3 * porcentaje3) +
                            (calificacion4 * porcentaje4);

    // Mostrar la calificación final
    document.getElementById('calificacionFinal').textContent = calificacionFinal.toFixed(2);
}
