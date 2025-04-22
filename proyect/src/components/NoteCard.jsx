import { useContext } from "react";
import { NotesContext } from "../context/note.context"

function NoteCard({ note }) {
    const { updateNote, deleteNote } = useContext(NotesContext);

    const handleInput = (e) => {
        const updatedNote = { ...note, content: e.target.value };
        updateNote(updatedNote);
    }
    const handleCheckbox = () => {
        const updatedNote = { ...note, marked: !note.marked };
        updateNote(updatedNote);
    }

    return (
        <article className="note-card">
            <input type="text" value={note.content} onChange={handleInput} />
            <input type="checkbox" checked={note.marked} onChange={handleCheckbox} />
            <button onClick={() => deleteNote(note.id)}>Del</button>
        </article>
    )
}

export default NoteCard