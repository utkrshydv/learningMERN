import { useState, useEffect } from "react";
import "./App.css";

import NoteCard from "./components/NoteCard";
import NoteForm from "./components/NoteForm";

function App() {
  const [nextId, setNextId] = useState(5);
  const [editingId, setEditingId] = useState(null)
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes")

    if(savedNotes){
      return JSON.parse(savedNotes)
    }
    return [
      {
        id: 1,
        header: "Study React",
        body: "Learn useState"
      }
    ]
  });

  const [header, setHeader] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  function addNote() {
    if (header.trim() === "" || body.trim() === "") {
      return;
    }

    if(editingId !== null){
      setNotes(
        notes.map((note) => {
          if(note.id === editingId){
            return {
              ...note,
              header,
              body
            }
          }
          return note
        })
      )
      setEditingId(null)
    } else {
      const newNote = {
      id: nextId,
      header,
      body,
    };
    setNextId(nextId + 1);
    setNotes([...notes, newNote]);
  }
    setBody("");
    setHeader("");
  }

  function deleteNote(id) {
    setNotes(notes.filter((n) => n.id !== id));
  }

  function startEdit(note){
    setEditingId(note.id)
    setHeader(note.header)
    setBody(note.body)
  }

  return (
    <div className="app">
      {/* Header section at the top of the page */}
      <header className="app-header">
        <h1>My Notes App</h1>
        <p>Create and manage your notes</p>
      </header>

      {/* Main container that holds the form and notes */}
      <div className="app-content">
        {/* Form section for creating new notes */}
        <section className="form-section">
          <h2>Create a New Note</h2>
          <NoteForm
            header={header}
            body={body}
            setHeader={setHeader}
            setBody={setBody}
            addNote={addNote}
            editingId={editingId}
          />
        </section>

        {/* Notes list section */}
        <section className="notes-section">
          <h2>Your Notes ({notes.length})</h2>
          {notes.length === 0 ? (
            <p className="no-notes">
              No notes yet. Create your first note above!
            </p>
          ) : (
            <div className="notes-list">
              {notes.map((note) => {
                return (
                  <NoteCard 
                  key={note.id} 
                  note={note} 
                  onDelete={deleteNote}
                  onEdit={startEdit}
                  />
                );
              })}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default App;
