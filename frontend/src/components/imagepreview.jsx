import DownloadButton from "./downloadbutton"

export default function ImagePreview({ image }) {

  if (!image) return null

  return (
    <div className="mt-6 p-4 rounded-xl bg-[#EAF2FF] text-center">

      <img
        src={image}
        alt="Generated"
        className="mx-auto rounded-lg max-w-full shadow-md"
      />

      <DownloadButton image={image} />

    </div>
  )
}
