const { getAll, create, changeGeneration } = require("../usecases/mentor.usecase")
const express = require("express")

const router = express.Router()

// Rutas
router.get("/", async (request, response) => {
  try {
    const mentors = await getAll()
    response.json({
      mentors
    })
  }catch(error) {
    response.status(error.status || 500)
    response.json({
      success: true,
      message: error.message
    })
  }
})

router.post("/", async (request, response) => {
  try {
    const { body } = request
    const mentor = await create(body)
    response.status(201)
    response.json({
      success: true,
      data: {
        mentor
      }
    })
  }catch(error) {
    response.status(error.status || 500)
    response.json({
      success: false,
      message: error.message
    })
  }

})

router.patch("/:id", async(request, response) => {
  const { id } = request.params
  const { body } = request
  try {
    const mentor = await changeGeneration(id, body)

    response.json({
      success: true,
      mentorActualizado: mentor
    })
  }catch(error) {
    response.status(error.status || 500)
    response.json({
      success:false,
      message: error.message
    })
  }
})

module.exports = router