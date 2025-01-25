//   Calcular la edad en años, meses y días

// Crea una función llamada calcularEdad que reciba tres parámetros:

// El año de nacimiento,
// El mes de nacimiento,
// Y el día de nacimiento.

// La función debe devolver la edad actual en años, meses y días.


// index.js
function calcularEdad(anioNacimiento, mesNacimiento, diaNacimiento) {
    const fechaActual = new Date();
    const anioActual = fechaActual.getFullYear();
    const mesActual = fechaActual.getMonth() + 1; // Los meses comienzan en 0
    const diaActual = fechaActual.getDate();

    let anios = anioActual - anioNacimiento;
    let meses = mesActual - mesNacimiento;
    let dias = diaActual - diaNacimiento;

    if (meses < 0) {
        anios -= 1;
        meses += 12;
    }

    if (dias < 0) {
        meses -= 1;
        const diasEnMesAnterior = new Date(anioActual, mesActual - 1, 0).getDate();
        dias += diasEnMesAnterior;
    }

    return { anios, meses, dias };
}

// Exporta la función
module.exports = {
    calcularEdad
};