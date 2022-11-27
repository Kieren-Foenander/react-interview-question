import { Link } from "react-router-dom"

export default function Home() {
  return (
    <>
      <h1>Select an Option</h1>

      <div className="components">
        <div className="component-container">
          <h3>Word Game</h3>
          <Link to="/word-game">Go To Page</Link>
        </div>
        <div className="component-container">
          <h3>Circles</h3>
          <Link to="/circle-game">Go To Page</Link>
        </div>
      </div>
    </>
  )
}
