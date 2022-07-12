const { Koder } = require("../models/koder.model")

// Usecases
// Funciones asincronas -> Regresan una promesa
const getAll = () => {
  const koders = Koder.find({})

  // Aqui va la logica
  // Si va mas logica se los va a hacer en una promesa pending, y si se opta por usar async/await
  return koders
}

const getById = (id) => {
  const koder = Koder.findById()
  return koder
}

module.exports = { getAll, getById }


