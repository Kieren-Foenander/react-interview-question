import { Route, Routes } from "react-router-dom"
import "./App.css"
import WordGame from "./components/WordGame"
import Home from "./pages/Home"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/word-game" element={<WordGame />} />
      </Routes>
    </>
  )
}

export default App
