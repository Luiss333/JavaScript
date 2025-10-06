# Curso de JavaScript Moderno — Apuntes

**Instructor:** Fernando Herrera

## 1. Introducción a JavaScript

### Historia

JavaScript fue creado en **1995** por **Brendan Eich**, bajo el nombre original de _Mocha_. Posteriormente fue renombrado a _LiveScript_ y, finalmente, a **JavaScript**.  
A pesar de su nombre, **JavaScript no está relacionado con Java**.

En **ES6 (ECMAScript 2015)** se introdujeron mejoras significativas como:

- `let` y `const`
- Arrow functions (`=>`)
- Clases
- Módulos

> _Hoy en día, JavaScript es un lenguaje de propósito general, presente tanto en el navegador como en el servidor._

---

## 2. Principales Usos de JavaScript

- **Front-end:** Manipulación del DOM e interacción con el usuario.
- **Back-end:** Mediante **Node.js**.
- **Aplicaciones móviles:** Con **React Native**.
- **Aplicaciones de escritorio:** Con **Electron**.
- **Internet de las cosas (IoT):** Compatible con dispositivos como **Raspberry Pi**.

> _JavaScript es uno de los lenguajes más demandados en la industria tecnológica._

---

## 3. Ejemplo Básico: “Hola Mundo”

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

- `console.log()` imprime mensajes en la consola del navegador.
- El código JavaScript puede incluirse en una etiqueta `<script>` o en un archivo externo `.js`.

---

## 4. Variables y Comentarios

### Comentarios

```js
// Comentario de una línea
/* Comentario de varias líneas */
```

### Variables

```js
let nombre = "Luis";
const PI = 3.1416;
```

- `let`: Permite reasignar valores.
- `const`: Define valores constantes.

> _Se recomienda usar `const` por defecto, y `let` solo si el valor cambiará._

---

## 5. Consola y Depuración

```js
console.log("Mensaje");
console.warn("Advertencia");
console.error("Error");
console.info("Información");
console.table([1, 2, 3]);
console.log({ nombre: "Luis" });
```

> _La consola es una herramienta esencial para depuración y visualización de datos._

### Uso de Breakpoints

- En el navegador, presiona **F12 → pestaña “Sources”**.
- También se puede pausar el código con `debugger;`.

```js
let x = 10;
debugger;
x += 5;
```

---

## 6. Importación de Scripts

### Forma estándar:

```html
<script src="app.js"></script>
```

### Recomendado:

```html
<script src="app.js" defer></script>
```

> _Evita colocar scripts en el `<head>` sin el atributo `defer`, para no bloquear la carga de la página._

---

## 7. Problemas con `var`

```js
if (true) {
  var x = 10;
}
console.log(x); // 10
```

- `var` no respeta el alcance de bloque y presenta **hoisting**.
  > ✅ Utiliza `let` o `const` en lugar de `var`.

---

## 8. Ventanas Emergentes (Alert, Prompt, Confirm)

```js
alert("Hola mundo");
const nombre = prompt("¿Cuál es tu nombre?");
const aceptar = confirm("¿Estás seguro?");
```

> _Estas funciones son útiles solo para pruebas, no se recomiendan en entornos de producción._

---

## 9. Manipulación del DOM

### Selección de elementos

```js
document.querySelector("selector");
document.querySelectorAll("selector");
document.getElementById("id");
document.getElementsByClassName("clase");
```

Ejemplo de modificación:

```js
document.querySelector("h1").innerText = "Nuevo título";
document.querySelector("#miDiv").innerHTML = "<p>Contenido dinámico</p>";
```

> Si se usará constantemente un mismo elemento, se recomienda guardarlo en una variable:

```js
const elemento = document.querySelector("#miDiv");
elemento.innerText = "Texto actualizado";
```

---

## 10. Creación Dinámica de Elementos

Ejemplo:

```js
const divBotones = document.querySelector("#divBotones");
const botonNuevo = document.createElement("button");

botonNuevo.innerText = "Botón Nuevo";
botonNuevo.classList.add("btn", "btn-success");

divBotones.append(botonNuevo);
```

Otro ejemplo con un campo de texto:

```js
const input = document.createElement("input");
document.body.append(input);

input.classList.add("form-control");
input.placeholder = "Hola Mundo";
```

---

## 11. Funciones Anónimas y Autoejecutables (IIFE)

Permiten ejecutar código de manera aislada sin contaminar el ámbito global:

```js
(() => {
  console.log("Función autoejecutable");
})();
```

También pueden devolver valores controlados:

```js
const modulo = (() => {
  const privado = "Secreto";

  return {
    publico: "Accesible",
  };
})();
```

---

## 12. Minificación de Código

Para optimizar y proteger el código, se recomienda **minificarlo** mediante herramientas como:

🔗 [https://javascript-minifier.com/](https://javascript-minifier.com/)

---
