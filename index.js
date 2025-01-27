//  Escribir una arrow function que reciba un array de palabras y devuelva un nuevo array con la longitud de cada palabra.

const longitudesPalabras = (palabras) => {

    return palabras.map(palabra => palabra.length);
}

module.exports = {
    longitudesPalabras
}