
const Colegio = require('./src/colegio');
const Curso = require('./src/curso');

const colegio = new Colegio('La Salle');
const curso = new Curso('5A');

colegio.addCurso(curso);

console.log(Colegio);
console.log(colegio.nombre);
// console.log(colegio.alumnos);
console.log(colegio.cursos);