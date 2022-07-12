const { Koder } = require("../models/koder.model")

// Usecases
const getAll = async () => {
  console.log("estoy en getALL")
  const koders = await Koder.find({})

  // Aqui va la logica
  return koders
}

const getById = async () => {
  console.log("estoy en getById")
  const koder = await Koder.findById()
  return koder
}

module.exports = { getAll, getById }


