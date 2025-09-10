
# Apuntes: Curso de JavaScript Moderno - Fernando Herrera

## Secciones iniciales

---

### 1. JavaScript y su historia

- JavaScript fue creado en 1995 por **Brendan Eich**.
- Nombres previos: *Mocha*, *LiveScript*, y finalmente *JavaScript*.
- No es lo mismo que Java.
- **ES6 (ECMAScript 2015)** trajo mejoras como `let`, `const`, arrow functions, clases.

> *JS se ha convertido en un lenguaje de propósito general.*

---

### 2. Usos de JavaScript

- **Front-end:** interacción con el DOM.
- **Back-end:** usando **Node.js**.
- **Apps móviles:** con **React Native**.
- **Escritorio:** con **Electron**.
- **IoT:** con placas como Raspberry Pi.

> *Uno de los lenguajes más demandados.*

---

### 3. Hola Mundo

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <title>Hola Mundo JS</title>
  </head>
  <body>
    <h1>Hola Mundo</h1>
    <script>
      console.log('Hola Mundo');
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
let nombre = 'Luis';
const PI = 3.1416;
```

- `let`: variable que puede cambiar.
- `const`: valor fijo.

> *Usar `const` por defecto y `let` si cambiará.*

---

### 5. Consola

```js
console.log('Mensaje');
console.warn('Advertencia');
console.error('Error');
console.info('Información');
console.table([1,2,3]);
console.log({nombre: 'Luis'});
```

> *Ideal para depurar y visualizar datos.*

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

> *No usar scripts en el `<head>` sin `defer`.*

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
alert('Hola mundo');
const nombre = prompt('¿Cuál es tu nombre?');
const aceptar = confirm('¿Estás seguro?');
```

> *No se usan en producción, solo para pruebas.*

### Retomando curso...
