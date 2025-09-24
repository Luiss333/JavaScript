# Apuntes: Curso de JavaScript Moderno - Fernando Herrera

## Secciones iniciales

---

### 1. JavaScript y su historia

- JavaScript fue creado en 1995 por **Brendan Eich**.
- Nombres previos: _Mocha_, _LiveScript_, y finalmente _JavaScript_.
- No es lo mismo que Java.
- **ES6 (ECMAScript 2015)** trajo mejoras como `let`, `const`, arrow functions, clases.

> _JS se ha convertido en un lenguaje de propósito general._

---

### 2. Usos de JavaScript

- **Front-end:** interacción con el DOM.
- **Back-end:** usando **Node.js**.
- **Apps móviles:** con **React Native**.
- **Escritorio:** con **Electron**.
- **IoT:** con placas como Raspberry Pi.

> _Uno de los lenguajes más demandados._

---

### 3. Hola Mundo

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Hola Mundo JS</title>
  </head>
  <body>
    <h1>Hola Mundo</h1>
    <script>
      console.log("Hola Mundo");
    </script>
  </body>
</html>
```

- `console.log()` imprime en la consola.
- Código JS puede ir en `<script>` o archivo externo `.js`.

---

### 4. Variables y Comentarios

#### Comentarios

```js
// Comentario de una línea
/* Comentario de varias líneas */
```

#### Variables

```js
let nombre = "Luis";
const PI = 3.1416;
```

- `let`: variable que puede cambiar.
- `const`: valor fijo.

> _Usar `const` por defecto y `let` si cambiará._

---

### 5. Consola

```js
console.log("Mensaje");
console.warn("Advertencia");
console.error("Error");
console.info("Información");
console.table([1, 2, 3]);
console.log({ nombre: "Luis" });
```

> _Ideal para depurar y visualizar datos._

---

### 6. Depuración y breakpoints

- Usa F12 en el navegador, pestaña "Sources".
- Usa `debugger;` para pausar ejecución.

```js
let x = 10;
debugger;
x += 5;
```

---

### 7. Importaciones

```html
<body>
  ...
  <script src="app.js"></script>
</body>
```

- Alternativa con `defer`:

```html
<script src="app.js" defer></script>
```

> _No usar scripts en el `<head>` sin `defer`._

---

### 8. Problemas con `var`

```js
if (true) {
  var x = 10;
}
console.log(x); // 10
```

- `var` tiene hoisting y no respeta bloques.

> ✅ Usa `let` o `const`.

---

### 9. Prompt, Confirm y Alert

```js
alert("Hola mundo");
const nombre = prompt("¿Cuál es tu nombre?");
const aceptar = confirm("¿Estás seguro?");
```

> _No se usan en producción, solo para pruebas._

### Retomando curso...

Manipulacion del DOM

document.querySelector('')

document.querySelectorAll('')

document.querySelector('').innerText = ''

document.querySelector('').innerHTML = ''

document.getElementByID('')

document.querySelector('#')

document.getElementByClassName('')

document.querySelector('.')

\*Si se usará constantemente se recomienda asignarlo a una variable'

const manipulacion = document.querySelector('')

manipulacion.innerText = ''

Creacion de elementos

Ejemplo:

Como queremos referirnos a una seccion (div) en especifico asignamos este div con un id "divBotones"

como estaremos manipulandolo creamos una constante haciendo referencia a este

const divBotones = document.querySelector('#divBotones');

nos pocisionamos en este div:

la manera de crear un elemento es la siguiente:

document.createElement('');

crearemos un nuevo elemento, pero lo asignaremos a una constante para manipularlo despues haciendo referencia a este:

const botonNuevo = document.createElement('button');

Agregamos este nuevo elemento:

divBotones.append(botonNuevo);

Una vez insertado podemos manipularlo

cambiamos el texto de este
botonNuevo.innerText = 'Boton Nuevo'

añadiendo clases
botonNuevo.classList.add('btn');
botonNuevo.classList.add('btn-success')

ejemplo 2:
const input = document.createElement('input');

document.body.append(input);

input.classList.add('formcontrol');

input.placeholder = 'Hola Mundo'
