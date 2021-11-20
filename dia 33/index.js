// ordenar el array
let personas = ['daniel', 'canqui', 'erick', 'quinteros', 'abi', 'sergio'];
personas.sort();
console.log(personas);


// añadir con una sola linea un nuevo nombre al array 'ramiro'
personas.push('ramiro');
console.log(personas);

// covertir los elementos del array en un objeto con atributo name y edad igual 10
personas = personas.map(name => {
  return {
    name: name,
    edad: 10
  };
})
console.log(personas);
// obener la suma de caracteres de todos los nombres del array
const totalCaracteres = personas.reduce((prev, next) => prev + next.name.length, 0);
console.log(totalCaracteres);

