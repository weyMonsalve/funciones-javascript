// sintaxis:

// function nombreDeLaFuncion(parametro1, parametro2) {
//      Cuerpo de la función
//     Aquí va el código que realiza una tarea específica
//     return resultado; // (opcional) Devuelve un valor
// }


// Crear una función que convierta una cantidad de minutos en segundos.

function convertirMinutosASegundos(minutos) {
    let segundos = minutos * 60
    return segundos;
}

let resultado = convertirMinutosASegundos(10);
console.log("10 minutos equivalen a: " + resultado + " segundos ");