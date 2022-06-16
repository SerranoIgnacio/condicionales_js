"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

// Ejercicios de práctica numérica
// Comparadores
// Ingrese dos números cualesquiera y realice las sigueintes
// comparaciones entre ellos
const numero1 = parseInt(prompt('Ingrese el primer número:\n'));

const numero2 = parseInt(prompt('Ingrese el segundo número:\n'));

// Compare cual de los dos números es mayor
// Imprima en pantalla según corresponda
if (numero1 > numero2){
    alert("El primer numero " + numero1 + " es mayor que el segundo " + numero2)
}else{
    alert("El segundo numero " + numero2 + " es mayor que el primero " + numero1)
}

// Verifique si el numero1 positivo, negativo o cero
// Imprima el resultado en cada caso
if (numero1 > 0){
    alert("Numero1 es positivo.")
}else{
    if(numero1 < 0){
        alert("Numero1 es negativo.")
    }else{
        alert("Nuemero1 es igual a 0.")
    }
}

// Verifique si el numero1 es mayor a 0 y menor a 100
// Imprima en pantalla si se cumple o no la condición
if ((numero1 > 0) && (numero1 <= 100)) {
    alert("Se cumple la condicion, el valor esta entre 1 y 100")
}else{
    alert("El valor esta fuera de rango.")
}
// Verifique si el numero1 es menor a 10 o el numero2
// es mayor a - 2
// Imprima en pantalla si se cumple o no la condición
if ((numero1 < 10) || (numero2 > -2)) {
    alert("Se cumple la condicion")
}else{
    alert("No se cumple la condicion")
}