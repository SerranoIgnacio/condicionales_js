"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Investigación y desarrollo.
// Busque en la red qué es y cómo utilizar el método .length 
// Realice un programa que solicite por consola 3 palabras cualesquiera
// Luego el programa debe imprimir la cantidad de caracteres de cada palabra
// ingresada utilizando .length 
let pal1 = prompt("Ingrese palabra 1");
let pal2 = prompt("Ingrese palabra 2");
let pal3 = prompt("Ingrese palabra 3");
let res1 = 0;
let res2 = 0;
let res3 = 0;

res1 = pal1.length;
res2 = pal2.length;
res3 = pal3.length;
console.log(res1, res2, res3)
alert("El resultado del largo de la palabra 1 es " + res1 + "\nEl resultado del largo de la palabra 2 es " + res2 + 
    "\nEl resultado del largo de la palabra 3 es " + res3)