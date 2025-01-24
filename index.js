// Crear un saludo personalizado

// Crea una función llamada crearSaludo que reciba dos parámetros:

// El nombre de una persona,
// Y su idioma (puede ser "es" para español, "en" para inglés, o "fr" para francés).

// La función debe devolver un saludo en el idioma correspondiente.
// Por ejemplo:

// Para "es" y "Juan", devuelve "¡Hola, Juan!".
// Para "en" y "John", devuelve "Hello, John!".





function crearSaludo(nombre, idioma) {

    if (typeof nombre !== "string" || nombre.trim() === "") {
        return "El nombre debe ser un texto válido.";
    }

    switch (idioma) {
        case "es":
            return ("¡Hola " + nombre + "!");
        case "en":
            return ("¡hello " + nombre + "!");
        case "fr":
            return ("¡bon jour " + nombre + "!");
        default:
            return "Idioma no reconocido";
    }

}

module.exports = {
    crearSaludo
};