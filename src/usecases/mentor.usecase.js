const Mentor = require("../models/mentor.model")
const createError = require('http-errors')
const { findByIdAndUpdate } = require("../models/mentor.model")

// Usecases
const getAll = () => {
  return Mentor.find({})
}

const create = (data) => {
  return Mentor.create(data)
}

/**
 * Voy a hacer un endpoint donde yo pueda agregar una generacion.
 * Paso 1- Encontrar el mentor al que se le hare el cambio
 * Paso 2 -Todas las generaciones que no sea la que le este mandando, tienen que pasar a isActive = false
 * Paso 3 - Que la estemos mandando(frontend/insonmia) sea la activa
 * Paso 4 - Actualizar
 * Agrego en mis generacions, la nueva con isActive = true, name, module
 * 
 * Name,
 * module
 * 
 * {
 *  "name": "20Js",
 *  "module": "Enmaquetado"
 * }
 */
const changeGeneration = async (id, dataGeneration) => {
  // Paso 1
  const mentorFound = await Mentor.findOne({ id }) // Encontramos el mentor

  // Validar si lo encuentra
  if(!mentorFound) throw createError(404, "Mentor not found")

  // Paso 2
  // Si lo encontre, ya manipulamos
  const newGenerations = mentorFound.generations.map((generation) => {
    // Hacer TODAS las generaciones viejitas, isActive == false
    generation.isActive = false
    return generation
  })

  // Paso 3
  newGenerations.push({
    name: dataGeneration.name,
    module: dataGeneration.module,
    isActive: true
  })

  // Paso 4 
  mentorFound.generations = newGenerations

  // Actualizar en la base de datos
  const updatedMentor = await Mentor.findByIdAndUpdate(id, mentorFound, { returnDocument: "after" })

  // Se repite
  // Mandar a llamar el usecase de crear generacion aqui
  // 1 - Crear schema de generations { name, module }
  // 2 - Modle de generations
  // 3 - Use case de crear una generacion

  // mandar a llamar usecase generation.usecase.js
  // NO VAN A HACER RUTA DE CREATE GENERATION
  return updatedMentor
}

module.exports = { getAll, create, changeGeneration }
