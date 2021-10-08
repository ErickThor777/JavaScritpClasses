module.exports = class Colegio {
  nombre;
  cursos;
  profesores;
  alumnos;
  constructor(nombre) {
    this.nombre = nombre
    this.cursos = [];
    this.alumnos = [];
    this.profesores = [];
  }

  asignarAlumnoCurso(alumno) {
    // TODO
  }

  contratarProfesor(profesor) {
    // TODO
    this.profesores.push(profesor);
  }

  inscribirAlumno(alumno) {
    // TODO
    this.alumnos.push(alumno);
  }

  asignarProfesorCurso(profesor) {
    // TODO
    this.cursos[0].profesores.push(profesor);
  }

  addCurso(curso) {
    // TODO
    this.cursos.push(curso);
  }
}