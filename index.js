// sintaxis:

// function nombreDeLaFuncion(parametro1, parametro2) {
//      Cuerpo de la función
//     Aquí va el código que realiza una tarea específica
//     return resultado; // (opcional) Devuelve un valor
// }


//  En un almacén se hace un 20% de descuento a los clientes
//  cuya compra supere los $1,000 ¿cuál será la cantidad que pagará
//  una persona por su compra?

function compra(valorCompra) {
    let descuento = 0;
    let precioFinal = 0;

    if (valorCompra > 1000) {
        descuento = valorCompra * 0.2;
        precioFinal = valorCompra - descuento;

    } else {
        precioFinal = valorCompra;
    }

    return "El valor de la compra despues del descuento es: " + precioFinal;

}

let total = compra(5000);
console.log(total);