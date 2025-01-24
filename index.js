// calculadora

function calculadora(a, b, operador) {

    // validacion para que los campos sean solo numericos

    if (isNaN(a) || isNaN(b)) {
        return "los valores de a y b deben ser numericos";
    }

    switch (operador) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b === 0) {
                return "Operacion no valida";
            }
            return a / b;
        default:
            return "operacion no valida.";
    }
}


// exportamos las funciones

module.exports = {
    calculadora
}