let precios = [23, 235, 454, 4545, 4545];

console.log(precios[2]);

precios = precios.map(precio => precio * 2);
console.log(precios);

precios.forEach((precio, index) => precios[index] = precio * 2);
console.log(precios);

