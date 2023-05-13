/* Ejercicio 6
El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de 
grasa de una persona. 
El BMI se calcula con la siguiente formula:
peso / altura^2
Escribe un programa que le pida al usuario su peso y su altura para calcular su BMI e imprima la frase "Tu BMI es X". */


let imc, peso, altura;

peso = prompt("Ingrese su peso (KG): ");
altura = prompt("Ingrese su altura (M): ");

imc = peso / altura**2;

console.log("Tu BMI es: " + imc);