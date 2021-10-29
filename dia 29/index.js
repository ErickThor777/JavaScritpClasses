/// tipo de datos
// Cadenas o string
/* var cadena = 'word hello '
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
class Numero {
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
fn2(3, 4);

const sumar3 = function(a, b) {
    return a + b
}

let fn3 = sumar3;
console.log(fn(3, 4));

const invocarOtraFuncion = (fn) => fn();

invocarOtraFuncion(fn3);

let array = [2, 2, 3, 3];

const sumaTotal = function(prev, next) {
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
 */

// Crear un array de objectos donde el objeto pelicula tenga losa atributos de nombre, año, genero y quiero 
// filtrar por año por genero por separado y que me generes apartir del array un array que solo contenga el nombre,


const pelicula = [{
        name: 'Terminator',
        año: 1996,
        genero: 'Accion'
    },
    {
        name: 'Hotel Transilvania',
        año: 2020,
        genero: 'Dibujos animados'
    },
    {
        name: 'Advenger',
        año: 2018,
        genero: 'Accion'
    },
    {
        name: 'Escuadron suicida 2',
        año: 2020,
        genero: 'Accion'
    },
    {
        name: 'el payaso',
        año: 1990,
        genero: 'terror'
    },
    {
        name: 'el duende',
        año: 1998,
        genero: 'terror'
    },
    {
        name: 'el payaso',
        año: 2000,
        genero: 'terror'
    },
    {
        name: 'Como niños',
        año: 2010,
        genero: 'Comedia'
    }
];

/* const filtrarPoraño = pelicula.filter(function(pelicula) { 
    return pelicula.año === 2020;
})

.map(function(pelicula) {
    return pelicula.año;
});

console.log(filtrarPoraño);

const filtrarPorgenero = pelicula.filter(function(pelicula) {
    return pelicula.genero === 'Comedia';
})

.map(function(pelicula) {
    return pelicula.genero;
});

console.log(filtrarPorgenero);

const filtrarPornombre = pelicula.map(function(pelicula) {
    return pelicula.name;
})
console.log(filtrarPornombre); */

/* const filtrarPoraño = pelicula.filter((pelicula) => pelicula.año === 2020)
    .map((pelicula) => pelicula.año);
console.log(filtrarPoraño);
const filtrarPorgenero = pelicula.filter((pelicula) => pelicula.genero === 'Comedia')
    .map((pelicula) => pelicula.genero);
console.log(filtrarPorgenero);
const filtrarPornombre = pelicula.map((pelicula) => pelicula.name)
console.log(filtrarPornombre); */