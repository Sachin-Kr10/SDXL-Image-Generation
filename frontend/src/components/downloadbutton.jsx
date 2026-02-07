export default function DownloadButton({ image }) {

  const downloadImage = () => {

    const link = document.createElement("a")

    link.href = image
    link.download = "ai-image.png"

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <button
      onClick={downloadImage}
      className="mt-4 px-5 py-2 rounded-lg bg-[#143D85] text-[#EAF2FF] hover:bg-[#1E5BB8] transition"
    >
      Download Image
    </button>
  )
}
