module.exports = class Persona {
  nombre;
  apellido;

  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  getNombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  }

  changeName(newName) {
    this.nombre = newName;
  }
  
  changeApellido(newLastName) {
    this.apellido = newLastName;
  }
};