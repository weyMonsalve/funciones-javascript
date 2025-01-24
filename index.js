//  Comparar dos números y devolver el mayor

// Crea una función llamada mayorDeDosNumeros que reciba dos números y devuelva el mayor de ellos. 
// Si ambos números son iguales, devuelve un mensaje que diga "Los números son iguales".


function mayorDeDosNumeros(numero1, numero2) {

    if (isNaN(num1) || isNaN(num2)) {
        return "Ambos valores deben ser números.";
    }

    if (numero1 > numero2) {
        return ("El numero mayor es el numero: ", numero1);
    } else if (numero2 > numero1) {
        return ("El numero mayor es el numero: ", numero2);
    } else {
        return "Ambos numeros son iguales";
    }
}

module.exports = {
    mayorDeDosNumeros
}