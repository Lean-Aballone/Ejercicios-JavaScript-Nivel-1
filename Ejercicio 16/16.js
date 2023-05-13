/* Ejercicio 16
Crear un programa tal que dado como datos la matrícula y 5 calificaciones de un alumno; imprima la 
matricula, el promedio y la palabra “aprobado” si el alumno tiene un promedio mayor o igual que 7, y 
la palabra “no aprobado” en caso contrario
 */

let matricula = prompt("Ingresar Matricula del alumno: ");
let notas = [];
const CANT_CALIFICACIONES = 3;

for(let i = 0; i < CANT_CALIFICACIONES; i++ ){

    notas[i]= Number(prompt("Ingresar Nota " + Number(i+1) + " del alumno"))

}

let promedio = 0;

for(let i = CANT_CALIFICACIONES; i > 0; i--){

    promedio += notas[i-1];

}

promedio /= CANT_CALIFICACIONES;

if( promedio >= 7){
    console.log(
        "Matricula: " + matricula 
        + "\nPromedio: " + promedio
        + "\nAprobado");
} else {
    console.log(
        "Matricula: " + matricula 
        + "\nPromedio: " + promedio
        + "\nNo aprobado");
}
