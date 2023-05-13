/* Ejercicio 17
Dado 3 números enteros, determinar cual de ellos es el mayor, tenga en cuenta que los números 
pueden ser iguales. */

let num1 = prompt("Ingresar Numero 1: ");  
let num2 = prompt("Ingresar Numero 2: "); 
let num3 = prompt("Ingresar Numero 3: ");

if(num1 === num2 && num1 === num3){

    console.log("Los numeros son iguales y su valor es: " + num1);

}else {
    if( num1 >= num2 && num1 >= num3 ){

        console.log(num1 + " es el Mayor");

    }else if( num2 >= num1 && num2 >= num3 ){

        console.log(num2 + " es el Mayor");

    }else if( num3 >= num1 && num3 >= num2 ){

        console.log(num3 + " es el Mayor");

    }
}