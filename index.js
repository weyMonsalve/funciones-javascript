// sintaxis:

// function nombreDeLaFuncion(parametro1, parametro2) {
//      Cuerpo de la función
//     Aquí va el código que realiza una tarea específica
//     return resultado; // (opcional) Devuelve un valor
// }


//   Leer tres números y decir cuál de ellos es el que tiene el valor intermedio

function numeroIntermedio(num1, num2, num3) {
    if ((num1 < num2 && num1 > num3) || (num1 > num2 && num1 < num3)) {
        return "El numero intermedio es el: " + num1;
    } else if ((num2 > num1 && num2 < num3) || (num2 < num1 && num2 > num3)) {
        return "El numero intermedio es el: " + num2;
    } else {
        return "El numero intermedio es el: " + num3;
    }
}

let intermedio = numeroIntermedio(1, 5, 3);
console.log(intermedio);