// sintaxis:

// function nombreDeLaFuncion(parametro1, parametro2) {
//      Cuerpo de la función
//     Aquí va el código que realiza una tarea específica
//     return resultado; // (opcional) Devuelve un valor
// }


// Crear una función que convierta temperaturas de Celsius a Fahrenheit.

function convertirCelsiusAFahrenheit(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit
}

let resultado = convertirCelsiusAFahrenheit(25);
console.log("25 grados Celsius equivalen a " + resultado + " grados Fahrenheit.");