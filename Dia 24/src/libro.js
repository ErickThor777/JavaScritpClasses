module.exports = class Libro {
  autor;
  titulo;
  codigoSerial;
  fechaImpresion;
  genero;
  constructor({ autor, titulo, fechaImpresion, genero }) {
      this.autor = autor;
      this.titulo = titulo;
      this.fechaImpresion = fechaImpresion;
      this.genero = genero
  }
}
