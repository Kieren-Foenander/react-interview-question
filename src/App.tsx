import { ChangeEvent, FormEvent, Key, useState } from "react"

interface synonym {
  word: string
  score: number
}

function App() {
  const [word, setWord] = useState()
  const [synonyms, setSynonyms] = useState<synonym[]>([])

  const handleWordChange = (e: any) => setWord(e.target.value)

  const handleWordSubmit = (e: FormEvent) => {
    e.preventDefault
    fetch(`https://api.datamuse.com/words?rel_syn=${word}`)
      .then((Response) => Response.json())
      .then((data) => {
        setSynonyms(data)
      })
  }

  return (
    <>
      <div className="container">
        <h2>Type In a Word</h2>
        <input type="text" onChange={handleWordChange}></input>
        <button type="submit" onClick={handleWordSubmit}>
          Submit
        </button>
      </div>
      <div>
        {synonyms.map((words: synonym, i: Key) => {
          return (
            <li key={i} className="list">
              {words.word}
            </li>
          )
        })}
      </div>
    </>
  )
}

export default App

//{word: 'hello', score: 2628}
