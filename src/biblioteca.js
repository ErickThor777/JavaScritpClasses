module.exports = class Biblioteca {
  estanterias;
  constructor() {
    this.estanterias = [];
  }

  registrarEstanteria(estanteria) {
    this.estanterias.push(estanteria);
  }

  registrarLibros(libro, codigo) {
    //libro.codigoSerial = this.generarCodigoSerial(libro);
    const index = this.estanterias.findIndex(estanteria => estanteria.codigo === codigo);
    if (index > -1) {
      this.estanterias[index].almacenarLibro(libro);
    } else {
      console.log(`NO existe la estanteria con el codigo ${codigo}.`);
    }
  }

  // generarCodigoSerial(libro) {
  //   const codigo = libro.titulo[0] + (Math.floor(Math.random() * 1000) * 1000);
  //   if (this.validarCodigo(codigo)) {
  //       return codigo;
  //   }
  //   return this.generarCodigoSerial();
  // }

  // validarCodigo(codigo) {
  //   return this.libros.findIndex(libro => libro.codigoSerial === codigo) === -1
  // }
}

