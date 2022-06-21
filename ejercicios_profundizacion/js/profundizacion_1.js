"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Ejercicios de práctica numérica
// Realice un programa que solicite por propmt 2 números
// Calcule la diferencia entre ellos e informe por pantalla
// si el resultado es positivo, negativo o cero.
let num1 = "";
let num2 = "";
let res = "";
num1 = parseInt(prompt("Entrada de numero 1"));
num2 = parseInt(prompt("Entrada de numero 2"));

if (num1 > num2){
    res = (num1 - num2)
    alert("El resultado positivo de la diferencia es " + res)
}else{
    res = (num2 - num1)
    alert("El resultado de la diferencia es -" + res)
}