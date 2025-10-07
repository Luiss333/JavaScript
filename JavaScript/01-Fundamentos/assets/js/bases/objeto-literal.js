let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iron Man',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War',
};

console.log(personaje);
console.log('Nombre:', personaje.nombre);
console.log('Nombre:', personaje['nombre']);
console.log('Edad:', personaje.edad);

console.log('Coors:', personaje.coords);
console.log('Lat:', personaje.coords.lat);

console.log(('No. Trajes', personaje.trajes.length));
console.log('ultimo traje', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo:', personaje[x]);

console.log('Ultima pelicula', personaje['ultima-pelicula']);

//Mas detalles

delete personaje.edad;
console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

//personaje = true; // No se puede reasignar un objeto literal, pero si se pueden agregar propiedades
console.log(personaje);

Object.freeze(personaje); // Congela el objeto, no se pueden agregar ni eliminar propiedades

personaje.dinero = 1000000; 
personaje.casado = false; // No se puede modificar una propiedad congelada
personaje.direccion.ubicacion = 'Costa Rica'; // Se puede modificar una propiedad anidada
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({ propiedades, valores });