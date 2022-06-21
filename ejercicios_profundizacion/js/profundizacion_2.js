"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Práctica numérica
// Realice un programa que solicite el ingreso de tres números
// enteros, y luego en cada caso informe si el número es par
// o impar.
// Para cada caso imprimir el resultado en pantalla.

let num1 = parseInt(prompt("Entrada de numero 1"));
let num2 = parseInt(prompt("Entrada de numero 2"));
let num3 = parseInt(prompt("Entrada de numero 3"));
let n1 = 0;
let n2 = 0;
let n3 = 0;
n1 = (num1 % 2)
console.log(n1)
if (n1 == 0){
    alert(num1 + " es un numero par.")
}else{
    alert(num1 + " es un numero impar.")
}
n2 = (num2 % 2)
console.log(n2)
if (n2 == 0){
    alert(num2 + " es un numero par.")
}else{
    alert(num2 + " es un numero impar.")
}
n3 = (num3 % 2)
console.log(n3)
if (n3 == 0){
    alert(num3 + " es un numero par.")
}else{
    alert(num3 + " es un numero impar.")
}