import { useState } from "react"
import api from "../api/api"
import ImagePreview from "./imagepreview"

export default function Generator() {

  const [prompt, setPrompt] = useState("")
  const [image, setImage] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const generateImage = async () => {

    if (!prompt.trim()) return

    try {

      setLoading(true)
      setError("")

      const res = await api.post("/image/generate", {
        prompt
      })

      setImage(res.data.image)

    } catch {

      setError("Failed to generate image")

    } finally {

      setLoading(false)

    }
  }

  return (
    <div className="w-full max-w-xl mx-auto p-6 rounded-xl bg-[#0F2A5F] shadow-lg">

      <h2 className="text-xl font-semibold text-[#EAF2FF] mb-4 text-center">
        Generate AI Image
      </h2>

      <textarea
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
        placeholder="Enter your prompt..."
        className="w-full p-3 rounded-md bg-[#EAF2FF] text-[#0A1F44] outline-none resize-none h-24"
      />

      <button
        onClick={generateImage}
        disabled={loading}
        className="w-full mt-4 py-2 rounded-lg bg-[#143D85] text-[#EAF2FF] hover:bg-[#1E5BB8] transition disabled:opacity-60"
      >
        {loading ? "Generating..." : "Generate"}
      </button>

      {error && (
        <p className="mt-3 text-center text-[#4DA3FF]">
          {error}
        </p>
      )}

      <ImagePreview image={image} />

    </div>
  )
}
