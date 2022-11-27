import { Route, Routes } from "react-router-dom"
import "./App.css"
import WordGame from "./pages/WordGame"
import Home from "./pages/Home"
import Circles from "./pages/Circles"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/word-game" element={<WordGame />} />
        <Route path="circle-game" element={<Circles />} />
      </Routes>
    </>
  )
}

export default App
