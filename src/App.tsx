
import { Route, Routes } from "react-router-dom"
import './App.css'
import WordGame from "./components/WordGame"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={ <WordGame />} />
      </Routes>
    </>
  )
}

export default App