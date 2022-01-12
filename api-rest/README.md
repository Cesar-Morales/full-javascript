# Creando Api rest

## Primero creo package.json

        npm i

## Modulos extras

        npm i express morgan

- express es un framework de node para escribir codigo de servidor de una manera facil
- morgan modelo que nos permite ver en consola las peticiones que llegan a el server

---

        npm i nodemon -D

- nodemon es un modulo que refresca el server automaticamente
- -D es para que sea solo en ambiente de desarrollo

## Creo servidor con express y con morgan (middleware) le digo que me vaya imprimiendo en cosola las peticiones

- middleware es una funcion que procesa datos antes de que nuestro servidor los reciba
- configuro para que mi servidor sepa como usar formato json
- a "app" le seteo la variable global(? port para que pueda ser conocida para todxs

## Configuro package.json

- agrego "start": "node src/index.js" en el sector script para correr la aplicacion con:

        npm run start

- agrego "dev": "nodemon src/index.js" en el sector script para correr la aplicacion con refresco automatico:

        npm run dev

## Notas sueltas

- una rest api por convencion se la ubica en /api/{nombre que quieras que este}. Tambien es normal verlo como https://www.api.urldelapagina. La primera mencionada es la que usaré aquí.

### TODO

- [x] Documentar
- [ ] Hacer las validaciones con express-validator
- [ ] Agregar base de datos
- [ ] ApiRest terminada