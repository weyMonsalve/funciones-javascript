// sintaxis:

// function nombreDeLaFuncion(parametro1, parametro2) {
//      Cuerpo de la función
//     Aquí va el código que realiza una tarea específica
//     return resultado; // (opcional) Devuelve un valor
// }


//   Leer tres calificaciones de un alumno y determinar su promedio

function promedioNotas(cal1, cal2, cal3) {
    let calificacionPromedio = ((cal1 + cal2 + cal3) / 3).toFixed(2);
    return "El promedio de las notas es: " + calificacionPromedio;
}

let promedio = promedioNotas(4, 5, 4, 2, 5, 0);
console.log(promedio);