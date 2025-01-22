// sintaxis:

// function nombreDeLaFuncion(parametro1, parametro2) {
//      Cuerpo de la función
//     Aquí va el código que realiza una tarea específica
//     return resultado; // (opcional) Devuelve un valor
// }


// Leer dos números si el primero es mayor mostrar la 
// Resta de los dos números, por otro lado si el segundo es mayor mostrar la suma de ambos


function calcularOperacion(numero1, numero2) {
    if (numero1 > numero2) {

        return `La resta de los números es: ${numero1 - numero2}`;
    } else if (numero2 > numero1) {

        return `La suma de los números es: ${numero1 + numero2}`;
    } else {

        return "Ambos números son iguales.";
    }
}


let num1 = 8;
let num2 = 20;


let resultado = calcularOperacion(num1, num2);


console.log(resultado);