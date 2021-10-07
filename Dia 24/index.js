// import { Biblioteca } from './src/biblioteca';
const Biblioteca = require('./src/biblioteca');
const Libro = require('./src/libro');
const Estanteria = require('./src/estanteria');

const biblioteca = new Biblioteca();

const libro1 = new Libro({
    autor: 'Pedro',
    titulo: 'Codigo limpio',
    fechaImpresion: '12/12/1990',
    genero: 'Antiguo'
})
const libro2 = new Libro({
    autor: 'Pedro juan',
    titulo: 'Codigo Raiz',
    fechaImpresion: '14/12/1990',
    genero: 'Antiguo',
})

const estatnteria = new Estanteria('Art1');

biblioteca.registrarEstanteria(estatnteria);

biblioteca.registrarLibros(libro1, 'Art1');

biblioteca.registrarLibros(libro2, 'art3');

// console.log(biblioteca.estanterias[0]);
