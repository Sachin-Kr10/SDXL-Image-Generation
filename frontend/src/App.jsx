import { Routes, Route } from "react-router"
import Home from "./pages/home"

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
