"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Ejercicios de práctica numérica
// En este ejercicio les pediremos que investiguen por su cuentan
// algunas propiedades de javascript para manipular números
// usando la librería "Math":
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math

// Realice un programa que solicite ingresar tres valores de temperatura
// De las temperaturas ingresadas por consola determinar:
// 1 - ¿Cuáles de ellas es la máxima temperatura ingresada?
// Para este caso haga uso de la herramienta "Math.max",
// investigue y busque como utilizarla.
// 2 - ¿Cuáles de ellas es la mínima temperatura ingresada?
// Para este caso haga uso de la herramienta "Math.min",
// investigue y busque como utilizarla.

// En cada caso imprimir en pantalla el resultado
let num1 = parseInt(prompt("Ingrese temperatura 1"));
let num2 = parseInt(prompt("Ingrese temperatura 2"));
let num3 = parseInt(prompt("Ingrese temperatura 3"));
let max = 0;
let min = 0;

max = Math.max(num1, num2, num3);
    alert("La temperatura maxima es de " + max);
min = Math.min(num1, num2, num3);
    alert("La temperatura minima es de " + min);