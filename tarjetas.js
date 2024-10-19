
export function america(numero) {
    let exp = /^3 [4-7]\d{13}$/;
    
return exp.test(numero);
}

export function diners(numero) {
    let exp = /^3(?:0[0-5]|[6-8]\d)\d{11}$/;
return exp.test(numero);
}

// //  digitos 14 = 300 305 36 38

export function discover(numero){
    let exp = /^6011\d{12}$ /;
    return exp.test(numero);
}
// // 16 digitos y 6011

 export function mastercard(numeros){
    let exp = /^5|[1-5]\d{14}$ /;
    return exp.test(numero);

}

// tiene 16 digitos y empieza por 51 o 55

// visa tiene 16 digitos y empieza por 4

export function visa (numeros){
    let exp = /^4\d{15}/;
    return exp.test(numero);
}

export function banco(numeros){
    let exp = /^\d{1,16}$/;
    return exp.test(numeros);
}


while (true) {
    let numero = prompt("Ingrese el numero de su tarjeta");
try{
    if (isNaN(numero)) {
        throw new Error("Caracter no permitido");
    }
    if (numero.length > 16) {
        throw new Error("No se permiten numeros negativos");
        
    }
    alert("saliendo");

break;

}catch (error) {
    alert(error.mesagge)
}
}

// el programa debe permitir el ingreso de enteros positivos maximos 16 caracteres que sean numeros si se ingresa un caracter diferente debe salir un error

// ingresar por teclado y que retorne si es primo o no es primo





// function esPrimo(num) {
//     if (num <= 1) return false; 
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false; 
//     }
//     return true; 
// }

// const entrada = prompt("Ingrese un número entero positivo:");
// const numero = parseInt(entrada);

// if (!isNaN(numero) && numero > 0) {
//     if (esPrimo(numero)) {
//         console.log(`${numero} es primo.`);
//     } else {
//         console.log(`${numero} no es primo.`);
//     }
// } else {
//     console.error("Error: Debe ingresar un número entero positivo.");
// }


