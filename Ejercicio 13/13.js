/* Ejercicio 13
Crear un programa que al ingresar el sueldo de un trabajador, aplique el 15% de aumento y lo muestre 
en la consola. */

let sueldo = Number(prompt("Ingresar Sueldo: "));
const RECARGO = 1.15;
sueldo *= RECARGO;
// sueldo *= RECARGO; es equivalente a escribir sueldo = sueldo * RECARGO;
console.log("El sueldo con el recargo es: " + sueldo);