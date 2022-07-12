const { Koder } = require("../models/koder.model")

// Usecases
// Funciones asincronas -> Regresan una promesa
const getAll = () => {
  console.log("estoy en getALL")
  const koders = Koder.find({})

  // Aqui va la logica
  // Si va mas logica os lo va a hacer en una promesa pending, y si se opta por usar async/await
  return koders
}

const getById = (id) => {
  console.log("estoy en getById")
  const koder = Koder.findById(id)
  return koder
}

module.exports = { getAll, getById }


