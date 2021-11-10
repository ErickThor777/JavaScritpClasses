const palabras = ['hola', 'no', 'reto', 'salida normal', 'victoria secreta'];

// filtrar la pabra no


const palabra = palabras.filter((recorrer) => recorrer !== 'no');

console.log(palabra);

const numeros = [2, 6, 1, 8, 4];

const nuevo = numeros.filter((valor) => valor !== 6);

console.log(nuevo);

// quiero que unas todas las palabras separado por espacio y que al inicio Este tu nombre usadndo reduce

const unired = palabras.reduce((valorini, valornext) => valorini + ' ' + valornext, 'Erick ')
console.log(unired);


// quiero que este array se covierta en un array de numeros basado en el tamaño de cada palabra
const tama = palabras.map((valor) => valor.length);
console.log(tama);