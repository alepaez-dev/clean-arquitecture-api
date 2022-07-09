const mongoose = require("mongoose")

// Schemas
const koderSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 20,
    required: true
  },
  edad: {
    type: Number,
    min: 18,
    max: 150
  },
  gen: {
    type: String,
    required: true
  },
  modulo: {
    type: String
  },
  hobbies: {
    type: [String]
  },
  sexo: {
    type: String,
    enum: ["f", "m", "o"]
  }
})

// Models
const Koder = mongoose.model("koders", koderSchema)
const Koder2 = mongoose.model("koders", koderSchema)


// Koder -> modelo -> 1cosa
// Arreglo -> 1cosa que tiene muchas cosas
// Objeto -> 1cosa con muchas cosas
// Exportar
module.exports = { Koder, Koder2 }