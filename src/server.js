/**
/**
 * EJERCICIO
 * En el mismo endpoint donde actualizo la generacion.
 * Esa generacion crearla en una coleccion nueva.
 * 
 * {
 *  name:
 *  module:
 * }
 * 
 * 
 */
const express = require("express")
const routerKoders = require("./routes/koder.route")
const routerUsers = require("./routes/user.route")
const routerMentors = require("./routes/mentor.route")
const routerAuth = require("./routes/auth.route")
const middlewareImprimir = require("./middlewares/generico.middleware")

const app = express();

// Middleware
app.use(express.json())
app.use(middlewareImprimir)

// Middleware de ruta
app.use("/koders", routerKoders)
app.use("/mentors", routerMentors)
app.use("/users", routerUsers)
app.use("/login", routerAuth)

/**
 * 
 * Aqui van todos los middlewares
 */

// Endpoint de Home
app.get("/", (request, response) => {
  response.json({
    message: "Endpoint de Home, Bienvenido a nuestra API de clean arquitecture"
  })
})


// Exportar
// module.exports -> nada mas puedes exportar una cosa por archivo
// pero esa cosa puede ser -> objeto, arreglo, funcion, app
module.exports = app