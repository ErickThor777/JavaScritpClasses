// cerar objeto auto que tenga los atributos marca placa color
// que tenga los metodos para cambiar los atributos
// que pueda obtener una descripcion copmpleta del auto
class Auto {
    marca;
    placa;
    color;
    constructor(marca, placa, color) {
        this.marca = marca;
        this.placa = placa;
        this.color = color;
    }
    getNewMarca(newMarca) {
        this.marca = newMarca;
    }
    getNewPlaca(newPlaca) {
        this.placa = newPlaca;
    }
    getNewColor(newColor) {
        this.color = newColor;
    }
    descripcionCompleta() {
        return `El auto es el siguiente ${this.marca} ${this.placa} ${this.color}`
    }
}

const autoNuevo = new Auto('Mercedes', '1234GHD', 'Rojo Negro Turqueza');
console.log(autoNuevo);
autoNuevo.getNewPlaca('2378KGH');
console.log(autoNuevo);