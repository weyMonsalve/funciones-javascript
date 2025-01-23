// sintaxis:

// function nombreDeLaFuncion(parametro1, parametro2) {
//      Cuerpo de la función
//     Aquí va el código que realiza una tarea específica
//     return resultado; // (opcional) Devuelve un valor
// }


// Crear un programa que realice las operaciones 
// matemáticas de suma, resta, multiplicación, división,
//  al digitar dos números.


function calculador(num1, num2) {
    return function(operador) {
        if (operador === 'suma') {
            return num1 + num2;
        }
        if (operador === 'resta') {
            return num1 - num2;
        }
        if (operador === 'multiplicacion') {
            return num1 * num2;
        }
        if (operador === 'division') {
            if (num2 === 0) {
                return 'Error: No se puede dividir entre 0';
            }
            return num1 / num2;
        }
        return 'Error: Operador no válido';
    };
}


var calculo = calculador(75, 50);
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