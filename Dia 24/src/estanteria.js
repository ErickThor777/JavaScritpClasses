module.exports = class Estanteria {
  codigo;
  libros;
  constructor(codigo) {
    this.codigo = codigo;
    this.libros = [];
  }

  almacenarLibro(libro) {
    this.libros.push(libro);
  }
}