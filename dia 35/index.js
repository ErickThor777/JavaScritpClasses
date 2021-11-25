// let numeros = [4, 3, 2, 4, 2];
// console.log(numeros);

// numeros = numeros.map(numero => `${numero}`).reduce((prev, next) => prev + next, 0);
// let total = numeros
//   .map(numero => {
//     if (numero === 4) {
//       return numero + 2;
//     }
//     return numero;
//   })
//   .reduce((prev, next) => prev + next, 0);


// console.log(numeros);
// console.log(total);

// filtrar los numeros igual a 4 y luego sumarlos +2  a cada uno
let numeros = [4, 3, 2, 4, 2];
/* let filtrar = numeros.filter((valor) => valor === 4).map((valor) => valor + 2);
console.log(filtrar); 
 */
let filtrar = numeros.filter((valor) => {
    return valor === 4;
}).map((valor) => {
    return valor + 2;
}).reduce((prev, nex) => {
    return prev * nex;
}, 1);
console.log(filtrar);