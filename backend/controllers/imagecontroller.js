const axios = require("axios")
const fs = require("fs")
const path = require("path")

const { COLAB_URL, COLAB_SECRET } = require("../config/colab")

exports.generateImage = async (req, res) => {

  try {

    const { prompt } = req.body

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" })
    }

    const response = await axios.post(
      `${COLAB_URL}/generate`,
      {
        prompt,
        key: COLAB_SECRET
      },
      {
        timeout: 300000
      }
    )

    const base64Image = response.data.image

    if (!base64Image) {
      return res.status(500).json({ error: "No image returned" })
    }

    const buffer = Buffer.from(base64Image, "base64")

    const fileName = `img_${Date.now()}.png`

    const uploadPath = path.join(
      __dirname,
      "..",
      "uploads",
      "generated",
      fileName
    )

    fs.writeFileSync(uploadPath, buffer)

    res.json({
      image: `http://localhost:5000/uploads/generated/${fileName}`
    })

  } catch (error) {

    console.error(error)

    res.status(500).json({
      error: "Image generation failed"
    })
  }
}
