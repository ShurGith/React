import './notespage.css';
import HeaderComponent from "../components/HeaderComponent";
import { NotesContext } from "../context/note.context";
import NoteCard from "../components/NoteCard";
import { useEffect, useContext } from "react";
import CreateNote from "../components/CreateNote";

function NotesPage() {
    const { notes, getNotes, hasError, errorMessage } = useContext(NotesContext);
    //let menError=  "";
    useEffect(() => {
        getNotes();
    }, []);
    const salida = () => {
        if (hasError) {
            return (<>
                <div className="error-container">
                    <h1>Error</h1>
                    <p className="error-message">{errorMessage}</p>
                </div>
            </>
            )
        }

        const Notas = notes.map((note) => {
            return (
                <NoteCard note={note} key={note.id} />
            )
        })
        return (
            <>
                <CreateNote />
                {Notas}
            </>
        )
    }



    return (
        <>
            <HeaderComponent />
            <div className="notes-container">
                <h1>NotesPage</h1>
                <div className='notes-wrapper'>
                    {salida()}
                </div>
            </div>
        </>

    )
}

export default NotesPage