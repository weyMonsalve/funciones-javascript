// sintaxis:

// function nombreDeLaFuncion(parametro1, parametro2) {
//      Cuerpo de la función
//     Aquí va el código que realiza una tarea específica
//     return resultado; // (opcional) Devuelve un valor
// }


// Crear una función que calcule el área de un cuadrado.

function calcularAreaCuadrado(lado) {
    let area = lado * lado
    return area;
}

let resultado = calcularAreaCuadrado(5);
console.log("el area del cuadrado  con lado 5 es: " + resultado);