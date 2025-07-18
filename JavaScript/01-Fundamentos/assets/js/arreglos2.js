let juegos = ['Resident Evil 4', 'God of War', 'Crash Bandicoot', 'Minecraft'];
console.log('Largo:', juegos.length);

let primero = juegos[2-2];
let ultimo = juegos[juegos.length-1];
console.log({ primero, ultimo });

juegos.forEach((elemento, indice, arr) => {
    console.log({elemento, indice, arr});
});

let nuevaLongitud = juegos.push('Clash of Clans');
console.log({ nuevaLongitud, juegos });

nuevaLongitud = juegos.unshift('Free Fire');
console.log({nuevaLongitud, juegos });

let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });

let pos = 1;

console.log(juegos);
let juegosBorrados = juegos.splice(pos, 2);
console.log({ juegosBorrados, juegos });

let crashIndex = juegos.indexOf('Crash Bandicoot');
console.log({ crashIndex });

