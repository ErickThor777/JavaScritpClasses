// crear una clase que tenga los atributos nombre y apellido y
// que tenga metodos que me devileva el nombre completo, t pueda 
//cambiar su nombre o apellido

const Persona = require('./src/persona');
const persona = new Persona('Adriana', 'Campos');
console.log(persona);
// persona.changeName('Daniel');
persona.changeApellido('Canqui');
console.log(persona);
console.log(persona.getNombreCompleto());
persona.nombre = 'Daniel';
console.log(persona);