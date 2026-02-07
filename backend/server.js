const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const path = require("path")

const imageRoutes = require("./routes/imageroutes")
const colabRoutes = require("./routes/colab")

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"))
)

app.use("/api/image", imageRoutes)
app.use("/api/colab", colabRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
