// Promedio de tres números

// Convertir horas y minutos a segundos

// Función que convierte horas y minutos a segundos
function convertirAHorasASegundos(horas, minutos) {

    if (isNaN(horas) || isNaN(minutos)) {
        return "Los datos ingresados deben ser numericos.";
    }

    // Convertimos las horas a segundos (1 hora = 3600 segundos)
    const segundosPorHoras = horas * 3600;

    // Convertimos los minutos a segundos (1 minuto = 60 segundos)
    const segundosPorMinutos = minutos * 60;

    // Devolvemos el total de segundos
    return segundosPorHoras + segundosPorMinutos;
}


module.exports = {
    convertirAHorasASegundos
};