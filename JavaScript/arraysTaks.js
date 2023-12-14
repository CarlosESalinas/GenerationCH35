/*
*Ejercicios
*Ejercicio de Arrays:
Descripción:
Supongamos que tienes una lista de temperaturas diarias en grados Celsius para una semana. Tienes que convertir estas temperaturas a grados Fahrenheit
y mostrar los resultados.
* Temperaturas diarias en grados Celsius para una semana
const temperaturasCelsius = [22, 25, 19, 30, 27, 21, 18];
*Instrucciones:

Crea una función llamada celsiusToFahrenheit que tome una temperatura en grados Celsius y la convierta a grados Fahrenheit usando la fórmula: F = C * (9/5) + 32.
Utiliza un bucle para recorrer el array temperaturasCelsius, llama a la función celsiusToFahrenheit para cada temperatura y almacena los resultados en un nuevo 
array llamado temperaturasFahrenheit.
Muestra ambos arrays (temperaturasCelsius y temperaturasFahrenheit) en la consola.
*/


const temperaturasCelsius = [22, 25, 19, 30, 27, 21, 18];
function celsiusToFahrenheit(C){
    F =  C * (9/5) + 32;
    return F;

}

let temperaturasFahrenheit = [];
for (let i = 0; i < temperaturasCelsius.length; i++) {
    temperaturasFahrenheit.push(celsiusToFahrenheit(temperaturasCelsius[i]));

}

console.log(temperaturasCelsius);// Mosrtrar en consola los arreglos
console.log(temperaturasFahrenheit);


/*
*Ejercicios de Bucles:
*Descripción:
Escribe un programa que sume los primeros 10 números naturales (1 al 10) e imprima el resultado.

*Instrucciones:

Utiliza un bucle (for o while) para sumar los números del 1 al 10.
Imprime el resultado de la suma en la consola.
Sugerencia:
Puedes usar una variable llamada suma para acumular la suma mientras recorres los números.
*/


function sumaDeGauss(n) {
    for (let i = 1; i <= n; i++) {
       resultado = (n * (n + 1)) / 2
    }
    return console.log(resultado)
}

console.log(sumaDeGauss(10));


/*
*Ejercicio : Números Primos
Escribe un programa que determine si un número ingresado por el usuario es primo o no. 
Un número primo es aquel que solo es divisible por 1 y por sí mismo. 
Puedes utilizar un bucle for para verificar si el número tiene algún divisor además de 1 y él mismo.*/

function esPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false
        }
    }
    return numero !== 1;
}

console.log(esPrimo(7));

/*
*Ejercicio : Secuencia de Fibonacci
Escribe un programa que genere los primeros 10 términos de la secuencia de Fibonacci. 
La secuencia de Fibonacci comienza con 0 y 1, 
y cada término subsiguiente es la suma de los dos anteriores (0, 1, 1, 2, 3, 5, 8, 13, 21, ...).

Estos ejercicios implican un poco más de lógica y son ideales para practicar conceptos más avanzados. ¡Espero que disfrutes resolviéndolos!*/


function fibonacci(n) {
    let fibSequence = [0, 1];
    while (fibSequence.length < n) {
      fibSequence.push(fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2]);
    }
    return fibSequence;
  }
  
  // Imprimir los primeros 10 números de la sucesión de Fibonacci
console.log(fibonacci(10));
  

