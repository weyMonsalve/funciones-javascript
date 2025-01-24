// Calcular el área de un rectángulo

// Crea una función llamada calcularAreaRectangulo que reciba dos parámetros:

// La base del rectángulo,
// Y su altura.

// La función debe devolver el área del rectángulo.

function calcularAreaRectangulo(base, altura) {

    if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
        return "Los datos a ingresar deeben ser numericos y que sean positivos.";
    }

    const area = base * altura;

    return "El area del triangulo es. ", area;
}

module.exports = {
    calcularAreaRectangulo
}