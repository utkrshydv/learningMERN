function NoteForm({ header, body, setHeader, setBody, addNote,editingId }) {
  return (
    <form
      className="note-form"
      onSubmit={(e) => {
        e.preventDefault();
        addNote();
      }}
    >
      {/* Title input field */}
      <div className="form-group">
        <label htmlFor="note-title">Note Title</label>
        <input
          id="note-title"
          className="form-input"
          type="text"
          placeholder="Enter your note title"
          value={header}
          onChange={(e) => setHeader(e.target.value)}
        />
      </div>

      {/* Description input field */}
      <div className="form-group">
        <label htmlFor="note-body">Note Description</label>
        <textarea
          id="note-body"
          className="form-textarea"
          placeholder="Enter your note description"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows="4"
        />
      </div>

      {/* Submit button */}
      <button className="btn btn-submit" type="submit">
       { editingId === null ? "Add Note" : "Update Note"}
      </button>
    </form>
  );
}

export default NoteForm;
