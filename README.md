# Misión 2 - Programación web

Crea una aplicación (con Vite) que consuma una API pública real (PokeAPI, TheMealDB, OpenLibrary…) usando fetch + async/await, módulos ES y métodos de array. Renderiza los datos en el DOM con estados de carga y error.

Aplicación web hecha con **Vite** que consume la API pública de [TheMealDB](https://www.themealdb.com/api.php) para sugerir recetas a partir de los ingredientes que tienes en la nevera.

El usuario escribe varios ingredientes separados por comas y la app muestra las recetas que los contienen, ordenadas de más a menos coincidencias.

## Uso de IA

Dos prompts reales que me ayudaron a entender el funcionamiento de algunas funciones.

- "para la funcion de mostrar estado habria que hacer un forEach para poner el hidden = false dependiendo del estado que se pase. Pero como se haria para saber que estado viene"
- "asi queda la primera parte del logic.js pero creo que la variable input va en donde se construyen las tarjetas no?"

## Autopsia

Tenía dos ideas en mente: usar la API de la NASA, que habría dado una aplicación más visual pero con menos lógica de datos, o hacer un buscador de recetas. Elegí la segunda porque obliga a combinar muchas de las cosas vistas en clase (`map`, `filter`, `reduce`, `Promise.all`, módulos y manejo de errores).

La decisión de diseño más importante fue qué hacer con varios ingredientes. TheMealDB solo permite filtrar por uno en cada petición, así que combiné los resultados de varias llamadas y ordené las recetas por número de coincidencias, en lugar de mostrar solo las que contienen todos los ingredientes.
