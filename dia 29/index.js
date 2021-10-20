/// tipo de datos
// Cadenas o string
var cadena = 'word hello '
var cadena1 = "Juan" 
var interpolacion = `Inrtermpolado`;

// Tipos de concatenacion o concatenar
let concatenado = cadena + cadena1;
let interpolacion1 = `Palabras: ${cadena1} es ${interpolacion}`;

console.log(interpolacion1);

// Enteros 
let nuemro = 121

// flotantes son aquelos con decimales
let decimales = 12.3434;

// Objectos

// Objeto literal
let obj = {
  name: 'pedro'
}

// clase que es el molde para crear objetos
class  Numero {
  constructor(numero) {
    this.numero = numero;
  }
}

let obj2 = new Numero(45);

//el molde Objeto funcion
function Numero2(name) {
   return {
     name: name
   };
}

let obj3 = new Numero2('pedro');
let obj4 = Numero2('pedro');

//Function de tipo funcion
 function sumar(a, b) {
   return a + b;
 }
sumar(12, 3);
let fn = sumar;

const sumar2 = (a, b) => a + b;

let fn2 = sumar2;
fn2(3,4);

const sumar3 = function (a, b) {
  return a + b
}

let fn3 = sumar3;
console.log(fn(3, 4));

const invocarOtraFuncion = (fn) => fn();

invocarOtraFuncion(fn3);

let array = [2,2,3,3];

const sumaTotal = function (prev, next) {
  return prev + next;
}

const sumaTotal1 = (prev, next) => prev + next;


const a = array.reduce(sumaTotal1);
console.log(a);


// crear un array de numeros y concatenarlos todos los elemntos del array como cadena

const numeros = [234, 5, 6, 56, 78];
const newfn = (prev, next) => `${prev}${next}`;
const concatenado1 = numeros.reduce(newfn);
console.log(concatenado1);
const concat = numeros.join('');
console.log(concat);


// Crear un array de objectos donde el objeto pelicula tenga losa atributos de nombre, año, genero y quiero 
// filtrar por año por genero por separado y que me generes apartir del array un array que solo contenga el nombre,