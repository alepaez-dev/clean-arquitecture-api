const express = require("express")
const { login } = require("../usecases/user.usecase")

const router = express.Router()


router.post("/", async(request, response) => {
  const { email, password } = request.body
  try {
    const user = await login(email, password)
    response.json({
      success: true,
      data: "Haz iniciado sesion!!!"
    })
  }catch(error) {
    response.status(error.status || 500)
    response.json({
      success: false,
      message: error.message
    })
  } 

})

module.exports = router 