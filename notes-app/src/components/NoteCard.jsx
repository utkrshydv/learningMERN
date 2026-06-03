function NoteCard({ note, onDelete }) {
  return (
    <article className="note-card">
      {/* Note title */}
      <h3 className="note-title">{note.header}</h3>

      {/* Note content */}
      <p className="note-body">{note.body}</p>

      {/* Delete button */}
      <button
        className="btn btn-delete"
        onClick={() => {
          onDelete(note.id);
        }}
        aria-label={`Delete note: ${note.header}`}
      >
        Delete
      </button>
    </article>
  );
}

export default NoteCard;
