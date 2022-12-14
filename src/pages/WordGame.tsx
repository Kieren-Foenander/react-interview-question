import React, { FormEvent, Key, useState } from "react"
import { Link } from "react-router-dom"
import { fetchWords } from "../api/WordApi"
import "../App.css"

interface synonym {
  word: string
  score: number
}

function WordGame() {
  const [word, setWord] = useState<string>("")
  const [synonyms, setSynonyms] = useState<synonym[]>([])

  const handleWordSubmit = (e: FormEvent) => {
    e.preventDefault
    fetchWords(word).then(setSynonyms)
  }

  const handleEnterClicked = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault
      e.stopPropagation
      fetchWords(word).then(setSynonyms)
    }
  }

  const handleWordClicked = (e: any) => {
    setWord(e.target.innerText)
    fetchWords(e.target.innerText).then(setSynonyms)
    
  }

  return (
    <>
      <div className="container">
        <h2>Type In a Word</h2>
        <label htmlFor="word">Your Word </label>
        <input
          id="word"
          type="text"
          value={word}
          onChange={(e) => {setWord(e.target.value)}}
          onKeyDown={handleEnterClicked}
        ></input>
        <button type="submit" onClick={handleWordSubmit}>
          Submit
        </button>
      </div>
      <div className="container">
        <ul>
          {synonyms.map((words: synonym, i: Key) => {
            return (
              <li key={i} className="list" onClick={handleWordClicked}>
                {words.word}
              </li>
            )
          })}
        </ul>
      </div>

      <Link to="/">Back to Home</Link>
    </>
  )
}

export default WordGame
