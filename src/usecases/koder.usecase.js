const { Koder } = require("../models/koder.model")

// Usecases
// Funciones asincronas -> Regresan una promesa
const getAll = () => {
  const koders = Koder.find({})

  // Aqui va la logica
  // Si va mas logica se los va a hacer en una promesa pending, y si se opta por usar async/await
  return koders
}

const getById = async (id) => {
  const koder = await Koder.findById(id)

  if(!koder) {
    const error = new Error("No se encontro un koder")
    error["status"] = 404
    throw error
  }

  return koder
}

const create = (koderData) => {
  const koder = Koder.create(koderData)
  return koder
}

module.exports = { getAll, getById, create }


