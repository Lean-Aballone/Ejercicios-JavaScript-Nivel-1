/* Ejercicio 14
Crear un programa que al ingresar una nota de un alumno, muestre con un alert() si el alumno esta 
“aprobado” (se aprueba con una nota mayor a 7) y “reprobado” en caso contrario
 */

let nota = prompt("Ingrese nota de alumno: ");
const NOTA_MINIMA = 7;

//Operador ternario
nota >= NOTA_MINIMA ? alert("El alumno está aprobado") : alert("El alumno está reprobado");


/* Alternativa IF - ELSE

if (nota >= NOTA_MINIMA){
    alert("El alumno está aprobado");
} else {
    alert("El alumno está reprobado");
}

 */