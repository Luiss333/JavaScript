
function crearPersona(nombre, apellido) {
    return {
        nombre: nombre,
        apellido: apellido
    };
}

const persona = crearPersona('Luis', 'Martínez');
console.log(persona);