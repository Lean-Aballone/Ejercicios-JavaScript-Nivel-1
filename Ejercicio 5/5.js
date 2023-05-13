/* Ejercicio 5
Escribe un programa que le pida al usuario su año de nacimiento e imprima su edad actual en la consola 
con la frase "Tienes X años". */

let año_nacimiento = Number( prompt("Ingresar año de nacimiento: ") );
año_nacimiento = Number(año_nacimiento);

const año_actual = 2023 - 1;
let edad = año_actual-año_nacimiento;
console.log("La edad actual es: " + edad);