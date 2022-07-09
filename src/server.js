const express = require("express")
const app = express();

// Middleware
app.use(express.json())

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