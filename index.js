// calculadora

function calculadora(a, b, operador) {

    if (operador === "+") {
        return a + b;
    } else if (operador === "-") {
        return a - b;
    } else if (operador === "*") {
        return a * b;
    } else if (operador === "/") {
        if (b === 0) {
            return "Error: No se puede dividir entre 0";
        }
        return a / b;
    } else {
        return "Error: Operación no válida";
    }
}



// exportamos las funciones

module.exports = {
    calculadora
}