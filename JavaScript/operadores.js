/*
Ejercicio 1 
Escribe un programas que solicite al usuario dos 
números y en consola nos va a decir si esos números 
son iguales o ay alguno que sea mayor que otro.
*/

function compararNumeros(num1, num2){
    num1 = parseFloat(prompt("Ingresa el primer número: "));
    num2 = parseFloat(prompt("Ingresa el segundo número: "));

    if (num1 !== num2){
        console.log("Los números no son iguales");
        if (num1 > num2){
            console.log("El primer número es mayor que el segundo");
        } else {
            console.log("El segundo número es mayor que el primero");
        } 
    } else {
        console.log("Los números son iguales");
    }
}

console.log(compararNumeros());


/*
Ejercicio 2
Escribe un programa que pida al usuarios dos palabras
y determine si son iguales o no.
*/

function compararPalabras(palabra1, palabra2){
    palabra1 = prompt("Ingresa la primera palabra: ");
    palabra1 = prompt("Ingresa la segunda palabra: ");

    if (palabra1 !== palabra2){
        console.log("Las palabras no son iguales");
    } else {
        console.log("Las palabras son iguales");
    }
}

// console.log(compararPalabras());

/*
Ejericio 3
Escribe un programa para realizar hotcakes,
el programa debe preguntar al usuario si tiene
los ingredientes necesarios para realizar los hotcakes.
*/

function hacerHotcakes(){
    let leche = prompt("¿Tienes leche? (si/no)");
    let huevos = prompt("¿Tienes huevos? (si/no)");
    let harina = prompt("¿Tienes harina? (si/no)");
    let mantequilla = prompt("¿Tienes mantequilla? (si/no)");
    let azucar = prompt("¿Tienes azúcar? (si/no)");

    if (leche === "si" && huevos === "si" && harina === "si" && mantequilla === "si" && azucar === "si"){
        console.log("Puedes hacer hotcakes");
    } else {
        console.log("No puedes hacer hotcakes");
    }
}