const express = require('express')
const app = express()

//seteo de configuracion basica en express
app.set("port", 5000)

//middleware similar a app.all con la diferencia que app.all
//es para todas las rutas con el nombre declarado y el middleware
//se ejecuta primero que cualquier ruta, siempre
//El middlewaare sirve para validaciones de usuarios (por ej.)
app.use(express.json())

/*
// get normal 
app.get('/', (req, res) => {
    res.send('Hello World from GET!')
})
*/

// get con json
app.get('/user', (req, res) => {
    res.json({
        usuario: "Cesar",
        mail: "cesar@morales.com"
    })
})

// post nomral
app.post('/', function (req, res) {
    res.send('Hello World from POST!');
});

// post con recepcion de datos 
// header contentType application/json
// body {usuario.mail} podria ser un foreach para recorrer dic
app.post('/user', (req, res) => {
    console.log(req.body.usuario)
    console.log(req.body.mail)
    res.send("Dato recibido! Guardar base de datos")
})

// post url dinamica (con parametros)
app.post('/user/:id', function (req, res) {
    console.log(req.body)
    console.log(req.params)
    res.send('Hello World from POST!');
});

//Usando motor de plantillas ejs
app.set("view engine", "ejs")
app.get("/personas", (req,res) => {
    const personas = [{"name": "pepe"}, {"name": "pipo"}, {"name": "pupe"}]
    res.render("index.ejs",{dataPersonas: personas})
})

//middleware para archivos html estaticos que pertenece a express
//como no esta declarada / entonces levanta el html de public
app.use(express.static('public'))

// levantando puerto
app.listen(app.get("port"), () => {
    console.log(`Example app listening at http://localhost:${app.get("port")}`)
})