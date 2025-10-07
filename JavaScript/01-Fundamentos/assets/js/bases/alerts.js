alert('Hola, Mundo!');

let nombre = prompt('¿Cómo te llamas?', 'Escribe tu nombre aquí');
console.log(nombre);
console.log('***' + nombre + '***');

const seleccion =confirm('¿Estás seguro de que quieres borrar esto?');
console.log(seleccion);

console.log(global); // Solo funcion en Node.js, no en el navegador