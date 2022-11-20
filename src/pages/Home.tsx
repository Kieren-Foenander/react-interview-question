import React, { useState } from "react"
import { Link } from "react-router-dom"

const goToPage = (e: React.FormEvent) => {
  e.preventDefault
}

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
          <h3>Word Game</h3>
          <Link to="/word-game">Go To Page</Link>
        </div>
      </div>
    </>
  )
}
