// sintaxis:

// function nombreDeLaFuncion(parametro1, parametro2) {
//      Cuerpo de la función
//     Aquí va el código que realiza una tarea específica
//     return resultado; // (opcional) Devuelve un valor
// }


//  Crear una función que determine si un número es par o impar.

function esPar(numero) {
    if (numero % 2 === 0) {
        return "Es par";
    } else {
        return "Es impar";
    }
}
let resultado = esPar(7);
console.log("El número 7 " + resultado);