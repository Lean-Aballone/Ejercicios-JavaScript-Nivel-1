/* Ejercicios 11
Crear un programa que dado la base y la altura de un triangulo calcule la superficie y el perímetro. */



let base, altura, superficie, perimetro;
base = Number(prompt("Ingrese la base del triangulo: "));
altura = Number(prompt("Ingrese la altura del triangulo: "));
superficie = (base*altura)/2;
console.log("La superficie del triangulo es: " + superficie);


/* Suponiendo que es un triangulo rectangulo */

let hipotenusa = Math.sqrt(base**2 + altura**2);
perimetro = base + altura + hipotenusa;
console.log("El perimetro del triangulo es: " + perimetro);

