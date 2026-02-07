const express = require("express")
const axios = require("axios")

const router = express.Router()

const COLAB_URL = process.env.COLAB_URL

router.get("/health", async (req, res) => {

  try {

    await axios.get(`${COLAB_URL}/health`)

    res.json({ status: "online" })

  } catch {

    res.status(503).json({ status: "offline" })

  }

})

module.exports = router
