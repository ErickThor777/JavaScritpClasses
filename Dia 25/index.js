/* const Colegio = require('./src/colegio');
const Curso = require('./src/curso');
const Profesor = require('./src/profesor');
const Materia = require('./src/materia');

const colegio = new Colegio('La Salle');
const curso = new Curso('5A');
const curso1 = new Curso('5b');
curso.profesores = [];
colegio.addCurso(curso);
colegio.addCurso(curso1);
colegio.contratarProfesor(new Profesor());

colegio.profesores[0].nombre = 'Pedro';
colegio.profesores[0].ci = 78987894;
colegio.profesores[0].materia = new Materia('Biologia');

colegio.contratarProfesor(new Profesor());

colegio.profesores[1].nombre = 'Juan';
colegio.profesores[1].ci = 7987894;
colegio.profesores[1].materia = new Materia('Matematicas');

colegio.asignarProfesorCurso(colegio.profesores[0]);
colegio.asignarProfesorCurso(colegio.profesores[1]);

console.log(colegio);
console.log(colegio.nombre);
// console.log(colegio.alumnos);
console.log(colegio.cursos);
console.log(colegio.profesores[0]);

console.log(colegio.cursos[0]); */