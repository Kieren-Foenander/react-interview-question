import React, { useEffect, useRef, useState } from "react"
import "../App.css"

type circle = {
  x: number
  y: number
}

export default function Circles() {
  const [circles, setCircles] = useState<circle[]>([])
  const [redoCircles, setRedoCircles] = useState<circle[]>([])

  const generateCircle = (e: any) => {
    const xPos = e.clientX
    const yPos = e.clientY

    const newCircle: circle = {
      x: xPos,
      y: yPos,
    }

    setCircles((current) => [...current, newCircle])
  }

  const handleUndo = (e: any) => {
    e.preventDefault()
    const lastPopped = circles.pop()
    if (!lastPopped) return
    setRedoCircles([...redoCircles, lastPopped])
    setCircles([...circles])
  }

  const handleRedo = (e: any) => {
    e.preventDefault()
    const redo = redoCircles.pop()
    if (!redo) return
    setCircles([...circles, redo])
  }

  return (
    <>
      <div className="top-corner-buttons">
        <button onClick={handleUndo}>undo</button>
        <button onClick={handleRedo}>redo</button>
      </div>
      <div className="background" onClick={generateCircle}>
        {circles.map((i, index) => {
          return (
            <div
              className="circle"
              key={index}
              style={{ left: i.x, top: i.y, position: "absolute" }}
            ></div>
          )
        })}
      </div>
    </>
  )
}
