# Product API

Este proyecto es una API sencilla que permite gestionar productos utilizando datos generados de forma aleatoria con `@faker-js/faker`. La información de los productos se guarda temporalmente en memoria y se puede consultar, crear, actualizar y eliminar productos a través de endpoints REST. Además, se utiliza `@hapi/boom` para el manejo adecuado de códigos de estado HTTP y `cors` para permitir el acceso desde cualquier dominio.

## Características

- **Generación automática de productos**: Utiliza `@faker-js/faker` para generar datos ficticios de productos.
- **Almacenamiento en memoria**: Los productos se guardan temporalmente en memoria.
- **API REST**: Permite realizar operaciones CRUD sobre los productos.
- **Manejo de errores**: Utiliza `@hapi/boom` para manejar errores y devolver respuestas HTTP adecuadas.
- **CORS habilitado**: La API está disponible para ser consumida públicamente desde cualquier origen.

## Tecnologías utilizadas

- Node.js
- Express.js
- @faker-js/faker
- @hapi/boom
- CORS

