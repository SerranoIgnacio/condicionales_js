"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

// Ejemplos variables de texto
// Comparadores
// Ingrese dos palabras cualesquiera y realice las sigueintes
// comparaciones entre ellas
const texto1 = prompt('Ingrese la primera palabra:');

const texto2 = prompt('Ingrese la segunda palabra:');

//  Compare cual de las dos palabras es mayor (alfabéticamente)
//  Imprima en pantalla según corresponda

if (texto1 > texto2){
    alert("La primera palabra es mayor que la segunda.")
    console.log("true")
}else{
    alert("La segunda palabra es mayor que la primera.")
    console.log("false")
}
const copiaTexto1 = texto1  // Copia de la variable texto1
// Verifique que copiaTexto1 es igual a texto1
// Imprima en pantalla según corresponda
if (texto1 == copiaTexto1){
    alert("Texto1 y su copia son iguales.")
}else{
    alert("Texto1 y su copia NO son iguales.")
    
}
// Verifique que copiaTexto1 es distinta a texto2
// Imprima en pantalla según corresponda
if (texto2 != copiaTexto1){
    alert("Texto2 es diferente de copiatexto1.")
}else{
    alert("Texto2 y copiatexto1 son iguales.")
    
}