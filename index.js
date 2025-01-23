// sintaxis:

// function nombreDeLaFuncion(parametro1, parametro2) {
//      Cuerpo de la función
//     Aquí va el código que realiza una tarea específica
//     return resultado; // (opcional) Devuelve un valor
// }


// Crear un programa que realice las operaciones 
// matemáticas de suma, resta, multiplicación, división,
//  al digitar dos números.


function calculador2(num1, num2) {
    return function(operator) {
        switch (operator) {
            case 'suma':
                return num1 + num2;
            case 'resta':
                return num1 - num2;
            case 'multiplicacion':
                return num1 * num2;
            case 'division':
                return num1 / num2;
        }
    };
}


var calculo = calculador2(75, 50);
var sum = calculo('suma');
var rest = calculo('resta');
var mult = calculo('multiplicacion');
var div = calculo('division');
var invalid = calculo('mod');

console.log(sum);
console.log(rest);
console.log(mult);
console.log(div);
//console.log(invalid);