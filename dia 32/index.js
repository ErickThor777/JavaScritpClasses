let pedidos = ['churasco', 'charque', 'lomito', 'silpancho'];
console.log(pedidos);

// Añadir a cada pedido un precio quetodos cuesten 25

pedidos = pedidos.map(elem => {
  return {
    name: elem,
    precio: 25
  };
});

console.log(pedidos);