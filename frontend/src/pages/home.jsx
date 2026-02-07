import Generator from "../components/generator"

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0A1F44] px-4">

      <h1 className="text-3xl font-bold text-[#4DA3FF] mb-6">
        AI Image Generator
      </h1>

      <Generator />

    </div>
  )
}
