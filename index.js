// sintaxis:

// function nombreDeLaFuncion(parametro1, parametro2) {
//      Cuerpo de la función
//     Aquí va el código que realiza una tarea específica
//     return resultado; // (opcional) Devuelve un valor
// }


//   Crear una función que calcule el perímetro de un triángulo.

function calcularPerimetroTriangulo(lado1, lado2, lado3) {
    let perimetro = lado1 + lado2 + lado3;
    return perimetro;
}

let resultado = calcularPerimetroTriangulo(3, 4, 5);
console.log("el perimetro es: " + resultado);