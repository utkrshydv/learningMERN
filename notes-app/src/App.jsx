import { useState } from 'react'
import './App.css'

function App() {
  const [nextId, setNextId] = useState(5)
  const [notes, setNotes] = useState([ {
    id: 1,
    header: "Study React",
    body: "Learn useState"
  },
  {
    id: 2,
    header: "Gym",
    body: "Leg Day"
  },
  {
    id: 3,
    header: "DSA",
    body: "Practice Sliding Window"
  },
  {
    id: 4,
    header: "Python",
    body: "Learn FastAPI"
  }])

  const [header, setHeader] = useState("")
  const [body, setBody] = useState("")

  

  return (
    <>
    <input 
    type="text"
    value={header}
    onChange={(event) => {
      setHeader(event.target.value)
    }}
    />
    <p>{header}</p>
    <input
    type="text"
    value={body}
    onChange={(event) => {
      setBody(event.target.value)
    }}
    />
    <p>{body}</p>
    <button
    onClick={() => {
    const newNote = {
    id: nextId,
    header,
    body
  }
  setNextId(nextId+1)
    setNotes([
      ...notes,
      newNote
    ])
    setBody("")
    setHeader("")
    }}
    >
      Add Note
    </button>
    {
      notes.map((note)=>{
        return (
          <div key={note.id}>
            <h2>{note.header}</h2>
            <p>{note.body}</p>
          </div>
        )
      })
    }
    </>
  )
}

export default App
