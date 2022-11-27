import React, { useEffect, useRef, useState } from "react"
import "../App.css"

export default function Circles() {
  type circle = {
    x: number
    y: number
  }

  const [circles, setCircles] = useState<circle[]>([])
//   const [prevCircles, setPrevCircles] = useState<circle[]>([])
  const [redoCircles, setRedoCircles] = useState<circle[]>([])

  const generateCircle = (e: any) => {
    const xPos = e.clientX
    const yPos = e.clientY

    const newCircle: circle = {
      x: xPos,
      y: yPos,
    }

    setCircles((current) => [...current, newCircle])
    //setPrevCircles([...circles])
    console.log(circles)
  }

  const handleUndo = (e: any) => {
    e.preventDefault()
    setRedoCircles([...circles])
    circles.pop()
    const prevCircles: circle[] = circles
    setCircles([...prevCircles])
  }

  const handleRedo = (e: any) => {
    e.preventDefault()
    setCircles([...redoCircles])
  }

  return (
    <>
      <div className="top-corner-buttons">
        <button onClick={handleUndo}>undo</button>
        <button onClick={handleRedo}>redo</button>
      </div>
      <div className="background" onClick={generateCircle}>
        {circles.map((i) => {
          return (
            <div
              className="circle"
              style={{ left: i.x, top: i.y, position: "absolute" }}
            ></div>
          )
        })}
      </div>
    </>
  )
}
