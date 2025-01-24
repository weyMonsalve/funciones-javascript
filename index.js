// 10. Determinar si un año es bisiesto

// Crea una función llamada esBisiesto que reciba un año como parámetro. Devuelve true si el 
// año es bisiesto y false si no lo es. Un año es bisiesto si:

// Es divisible entre 4 y no divisible entre 100, o
// Es divisible entre 400.


function esBisiesto(anio) {

    if (isNaN(anio) || anio <= 0 || !Number.isInteger(anio)) {
        return "Debes ingresar un año válido (un número entero positivo).";
    }

    if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
        return true;
    } else {
        return false;
    }
}


module.exports = {
    esBisiesto
}