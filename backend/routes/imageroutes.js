const express = require("express")
const { generateImage } = require("../controllers/imagecontroller")

const router = express.Router()

router.post("/generate", generateImage)

module.exports = router
