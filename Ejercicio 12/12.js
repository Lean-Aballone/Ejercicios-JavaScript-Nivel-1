/* Ejercicio 12
Crear un programa que, al pasar los datos del peso de una persona en libras, haga la conversión a 
kilogramos
 */

const FACTOR_DE_CONVERSION = 0.45359237;

let libras = Number(prompt("Ingresar peso en libras: "));
let kilogramos = libras * FACTOR_DE_CONVERSION;
console.log("El peso en Kilogramos es: " + kilogramos);