// Promedio de tres números

// Determinar si una persona puede votar  Determinar si una persona puede votar

// Crea una función llamada puedeVotar que reciba dos parámetros:

// La edad de la persona,
// Y el país donde vive.

// La función debe devolver true si la persona puede votar en ese país (por ejemplo, 
//     en muchos países se puede votar a partir de los 18 años).



function puedeVotar(edad, pais) {
    const paises = {
        "Argentina": 18,
        "España": 18,
        "Estados Unidos": 18,
        "Brasil": 16,
        "Suiza": 18,
        "Colombia": 18
    };


    if (paises[pais] !== undefined) {
        if (edad >= paises[pais]) {
            return `Puedes votar en ${pais}.`;
        } else {
            return `No puedes votar en ${pais}. Necesitas ${paises[pais] - edad} años más.`;
        }
    } else {
        return `No tenemos información sobre la edad mínima para votar en ${pais}.`;
    }
}


module.exports = {
    puedeVotar
};