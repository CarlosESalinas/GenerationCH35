/*for (let boleto = 1; boleto <= 10; boleto++) {
    console.log(`Boleto número ${boleto}`)
}

// Ciclo para vender bolos con una variable global
let bolo = 1

for (bolo; bolo <= 10; bolo++) {
    console.log(`Bolo número ${bolo}`)
}

// Cuenta regresiva para el despegue del cohete
for (let i = 10; i >= 0; i--) {
    console.log(when = i === 0 ? 'Despegue' : i) 
}


// Programa que incrementa de 2 en 2
for (let i = 0; i <= 10; i += 2) {
    console.log(i)
}


let lista =['Juana', 'Pedro', 'Margarito', 'Laura', 'Luis','Lupe']
for (let alumno = 0; alumno < lista.length; alumno++) {
    console.log(lista[alumno])
}

// Ciclo 'for of' para recorrer un arreglo
let fruits = ['Apple', 'Banana', 'Orange', 'Strawberry']
for (let frut of fruits) {
    console.log(frut)
}
*/

// let suma = 0;
// for (let i = 1; i <= 10; i++) {
//     console.log(suma += i)
// }

function sumaDeGauss(n) {
    for (let i = 1; i <= n; i++) {
       resultado = (n * (n + 1)) / 2
    }
    return console.log(resultado)
}

// sumaDeGauss(5);

//  Tabla de multiplicar
const table = 5;
for (let i = 1; 1<10; i++){
    let resultado = table * i;
    console.log(`${table} x ${i} = ${resultado}`)
}

// Ciclos While 
let min = 1;
let max = 10;    

while (min <= max) {
    console.log(min++)
}

//  Operador ternario: el operador ternario es una forma de escribir un if/else en una sola línea
// La estructura es la siguiente: condición ? true : false
// Es decir, si la condición se cumple, se ejecuta lo que está después del signo de interrogación, si no se cumple, se ejecuta lo que está después de los dos puntos 

// Ejemplo:
// Cuenta regresiva para el despegue del cohete
for (let i = 10; i >= 0; i--) {
    console.log(when = i === 0 ? 'Despegue' : i) // Operador ternario
}

