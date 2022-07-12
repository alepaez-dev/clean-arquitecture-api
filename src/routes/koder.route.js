const express = require("express")
const { getAll, getById } = require("../usecases/koder.usecase")

const router = express.Router()

// /koders
router.get("/", async (request, response) => {
  try {
    const koders = await getAll(); // useCase

    response.json({
      success: true,
      data: {
        koders
      }
    })
  }catch(err) {
    response.status(400)
    response.json({
      success: false,
      message: err.message
    })
  }
})

// GetByID
// koders/:id
router.get("/:id", async (request, response) => {
  const { id } = request.params
  try {
    const koder = await getById(id)
    if(!koder) {
      // Si koder buscado, no existe ....
      // throw -> lanzar, hacerlo, ejecutarlo
      const error = new Error("No fue encontrado el Koder") // esto es como un return

      // A ese error le agrege una propiedad nueva que se llama status, y le puse el status que yo quise.
      error["status"] = 404 // error de cliiente
      throw error
    }
    response.json({
      success: true,
      data: {
        koder
      }
    })
  } catch(error) {
    // No se encontro
    response.status(error.status) // Not found
    response.json({
      success:false,
      message: error.message
    })
  }
})

// 5 Endpoints
module.exports = router