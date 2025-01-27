//    Ordenar tres números de mayor a menor

// Crea una función llamada ordenarNumeros que reciba tres números como parámetros.
// La función debe devolverlos en un arreglo ordenado de mayor a menor


function ordenarNumeros(num1, num2, num3) {

    const numeros = [num1, num2, num3];

    numeros.sort((x, y) => y - x);

    return numeros;
}

module.exports = {
    ordenarNumeros
}