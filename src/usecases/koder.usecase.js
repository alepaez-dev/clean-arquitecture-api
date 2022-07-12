const Koder = require("../models/koder.model")
const createError = require('http-errors')

// Usecases
// Funciones asincronas -> Regresan una promesa
const getAll = () => {
  const koders = Koder.find({})

  // Aqui va la logica
  // Si va mas logica se los va a hacer en una promesa pending, y si se opta por usar async/await
  return koders
}

const getById = async (id) => {
  const koder = await Koder.findById()

  if(!koder) {
    const error = createError(404, "Koder no encontrado")
    throw error
  }

  return koder
}

const create = (koderData) => {
  const koder = Koder.create(koderData)
  return koder
}

module.exports = { getAll, getById, create }


