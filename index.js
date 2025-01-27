//   Crear una arrow function que reciba un array de números y devuelva la suma de todos los elementos.


// index.js


const sumarArray = (numeros) => {
    let suma = 0;


    numeros.forEach((numero) => {
        suma += numero;
    });

    return suma;
};


module.exports = {
    sumarArray
};