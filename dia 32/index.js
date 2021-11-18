let pedidos = ['lomito','churasco', 'charque', 'lomito', 'silpancho', 'lomito'];
console.log(pedidos);

// Añadir a cada pedido un precio quetodos cuesten 25

pedidos = pedidos.map(elem => {
  return {
    name: elem,
    precio: 25
  };
});

console.log(pedidos);


// quiero que susmes todos los precios de el arreglo pedidos
// const precioTotal =
// console.log(precioTotal);

// filtrar Churasco de pedidos


// Añadir al un nuevo atributo a pedidos que sea modeda y valor sea un string 'Bs'
// esto los elementos de pedidos

// pedidos = pedidos.map(pedido => {
//   pedido.moneda = 'Bs';
//   return pedido;
// });

pedidos = pedidos.map(pedido => {
  return {
    ...pedido,
    moneda: 'Bs'
  };
  // return {
  //   name: pedido.name,
  //   precio: pedido.precio,
  //   moneda: 'Bs'
  // }
});

console.log(pedidos);
 /// añadir un nuevo atributo ciudad y el precio cambia 34 y la ciudad es cochabamba
 pedidos = pedidos.map(pedido => {
  // return {
  //   ...pedido,
  //   name: pedido.name,
  //   precio: 34,
  //   moneda: pedido.moneda,
  //   ciudad: 'CBBA'
  // };
  return {
    ...pedido,
    precio: 34,
    ciudad: 'CBBA'
  };
 });
console.log(pedidos);

// cambiar el precio de lomito a 25

const lomitos = pedidos.filter(pedido => pedido.name === 'lomito' || pedido.name === 'charque');
console.log(lomitos);
const lmitos1 = lomitos.map(lomito => {
  lomito.precio = 25;
  return lomito;
});

console.log(pedidos);
console.log(lomitos);
console.log(lmitos1);

