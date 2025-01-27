// Crear una arrow function que reciba un número y determine si es positivo, negativo o cero.

const determinarSigno = (numero) => {

    if (numero > 0) {
        return "Positivo";
    } else if (numero < 0) {
        return "Negativo";
    } else {
        return "Cero"
    }

}

module.exports = {
    determinarSigno
}