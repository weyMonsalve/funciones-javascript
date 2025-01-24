// Promedio de tres números

// Función calcularPromedio
function calcularPromedio(num1, num2, num3) {

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        return "Los valores deben ser numericos."
    }

    let suma = num1 + num2 + num3;

    let promedio = suma / 3;

    return promedio;
}



module.exports = {
    calcularPromedio
};