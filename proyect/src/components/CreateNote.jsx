import { useState, useContext } from "react";
import { NotesContext } from "../context/note.context"
import '../pages/notespage.css'

function CreateNote() {
    const { addNote } = useContext(NotesContext);

    const [noteContent, setNoteContent] = useState("");
    const createId = () => {
        return Date.now().toString(36) + Math.random().toString(36).slice(2);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newNote = {
            id: createId(),
            title: "New Note",
            content: noteContent,
            marked: false,
        }
        if (noteContent.trim() === "") return alert("El texto de la nota no puede estar vacío");
        addNote(newNote);
        setNoteContent("");
    }
    return (
        <form className="note-card" onSubmit={handleSubmit}>
            <input type="text"
                placeholder="Write a note..."
                value={noteContent}
                onChange={(e) => setNoteContent(e.target.value)} />
            <button type="submit">+</button>
        </form>
    )
}

export default CreateNote