//   Convertir un número a un formato de moneda

// Crea una función llamada formatearMoneda que reciba dos parámetros:

// Un número (por ejemplo, 1000),
// Y un símbolo de moneda (por ejemplo, "$" o "€").

// La función debe devolver el número formateado como moneda (por ejemplo, "$1,000.00").

function formatearMoneda(numero, simbolo) {

    const moneda = numero.toLocaleString('es-ES', {
        style: 'currency',
        currency: simbolo === "$" ? "USD" : "EUR",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    return moneda;
}

module.exports = {
    formatearMoneda
}