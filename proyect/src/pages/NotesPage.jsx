import HeaderComponent from "../components/HeaderComponent";
import { NotesContext } from "../context/NotesContext";
import NoteCard from "./NoteCard";
import { useContext } from "react";

function NotesPage() {
    const { notes } = useContext(NotesContext);
    const Notas = notes.map((note) => {
        return (
            <NoteCard note={note} key={note.id} />
        )
    })

    return (
        <>
            <HeaderComponent />
            <h1>NotesPage</h1>
            {Notas}
        </>

    )
}

export default NotesPage