let precios = [23, 235, 454, 4545, 4545];

console.log(precios[2]);

precios = precios.map(precio => precio * 2);
console.log(precios);

precios.forEach((precio, index) => precios[index] = precio * 2);
console.log(precios);

const productos = [
  {
    name: 'leche',
    precio: 23
  },
  {
    name: 'chocolate',
    precio: 5
  },
  {
    name: 'Caramelo',
    precio: 1
  },
  {
    name: 'soda',
    precio: 34
  },
  {
    name: 'revista',
    precio: 29
  }
];

let total = 0;
productos.forEach(producto => total = total + producto.precio);

console.log(productos);
console.log(total);

const precioTotal = productos.reduce((prev, next) => prev + next.precio, 0);

console.log(productos.reverse().pop());

// obtener nuevo arrary que contengan precios bajos menor a 10;
const nuevoArray = productos.filter(producto => producto.precio < 10);

console.log(nuevoArray);

// encontrar revista en el arreglo de productos.
const producto = productos.find(producto => producto.name === 'revista');
console.log('producto encontrado:', producto);


// Encontra el index del producto libro en el arreglo productos.
const index = productos.findIndex(producto => producto.name === 'libro');
console.log(index);
// agregar un nuevo producto llamado libro en una sola linea.

if (index < 0) {
  console.log('No encontrado')
} else {
  console.log(`El producto esta en la posicion ${index}`);
}