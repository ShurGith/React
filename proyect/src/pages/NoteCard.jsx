

function NoteCard({ note }) {
    return (
        <article className="note-card">
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <input type="checkbox" checked={note.marked} readOnly />
            <button onClick={() => note.marked = !note.marked}>
                {note.marked ? "Unmark" : "Mark"}
            </button>
        </article>
    )
}

export default NoteCard