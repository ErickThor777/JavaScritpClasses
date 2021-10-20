// Crear un arreglo libros donde el elmento es un objeto que tiene precio y nombre debe tener 5 objetos minimos
const libros = [{
        name: 'Cenicienta',
        precio: 50
    },
    {
        name: 'La bella durmiente',
        precio: 30
    },
    {
        name: 'Robin hood',
        precio: 40
    },
    {
        name: 'Blaca Nieves',
        precio: 70
    },
    {
        name: 'Pinocho',
        precio: 100
    }
];


// ordernar el arreglo de libros por nombre
const names = libros.sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
});
console.log('Libro Orenado por nombre:', names);

// ordernar el arreglo de libros por precio

const libroOrd = libros.sort((a, b) => {
    if (a.precio < b.precio) {
        return 1;
    }
    if (a.precio > b.precio) {
        return -1;
    }
    return 0;
});
console.log('Libro Orenado por precio:', libroOrd);