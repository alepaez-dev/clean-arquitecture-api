require('dotenv').config()
const mongoose = require("mongoose")
const server = require("./src/server")

// Confirmando que funciona
console.log("confirm process env", process.env)

// process
// .env
// Variables de entorno
// Variables que podemos utilizar en node

// Destructuracion
const { 
  DB_USER,
  DB_PASSWORD, 
  DB_HOST, 
  DB_NAME
} = process.env

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`)
.then(() => {
  console.log("Connected to DB");

  server.listen(8080, (request, response) => {
    console.log("Nuestro servidor esta encendido")
  })

})
.catch((err) => {
  console.log("Hubo un error", err)
})