// cerar objeto auto que tenga los atributos marca placa color
// que tenga los metodos para cambiar los atributos
// que pueda obtener una descripcion copmpleta del auto
/* class Auto {
    marca;
    placa;
    color;
    constructor(marca, placa, color) {
        this.marca = marca;
        this.placa = placa;
        this.color = color;
    }
    setNewMarca(newMarca) {
        this.marca = newMarca;
    }
    setNewPlaca(newPlaca) {
        this.placa = newPlaca;
    }
    setNewColor(newColor) {
        this.color = newColor;
    }
    getDescriptionComplete() {
        return `El auto es el siguiente ${this.marca} ${this.placa} ${this.color}`
    }
}

const autoNuevo = new Auto('Mercedes', '1234GHD', 'Rojo Negro Turqueza');
console.log(autoNuevo);
autoNuevo.getNewPlaca('2378KGH');
console.log(autoNuevo);
 */
// Averiguar como crear clases con atributos privados aplicar eso en clase persona y auto

class Auto {
    #marca;
    #placa;
    #color;
    constructor(marca, placa, color) {
        this.#marca = marca;
        this.#placa = placa;
        this.#color = color;
    }


    getNewMarca() {
        return this.#marca;
    }
    getNewPlaca() {
        return this.#placa;
    }

    getNewColor() {
        return this.#color;
    }

    getDescriptionComplete() {
        return `El auto es el siguiente ${this.#marca} ${this.#placa} ${this.#color}`
    }
}
 const autoNuevo = new Auto('Susuqui', '4567 dhc', 'rojo');
 console.log(autoNuevo);
 console.log(autoNuevo.getNewPlaca());