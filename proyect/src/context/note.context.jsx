import { createContext, useState } from 'react';
const NotesContext = createContext();

const url = 'https://ca0521c5d7f7c2046cc2.free.beeceptor.com/api/notes';
//const url = 'http://localhost:3000/api/notes/';

const NotesProviderWrapper = (props) => {
    const [notes, setNotes] = useState([]);
    const [hasError, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const getNotes = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            //console.log(data);
            setNotes(data.reverse());
            setError(false);
        } catch (error) {
            console.log(error);
            setError(true);
            setErrorMessage(error.message);
            console.log(error.message);
        }
    };



    const addNote = async (newNote) => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newNote)
            });
            const data = await response.json();
            //console.log(data);
            setNotes([data, ...notes]);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteNote = async (id) => {
        try {
            const response = await fetch(`${url}/${id}`, {
                method: 'DELETE'
            });
            if (!response.ok) throw new Error('Error al eliminar el elemento');
            setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
        } catch (error) {
            setError(true);
            setErrorMessage(error.message);
            console.log(error);
        }
    };

    const handleUpdate = async (id, updatedNote) => {
        try {
            const response = await fetch(`${url}/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedNote)
            });
            if (!response.ok) throw new Error('Error al actualizar el elemento');
            setNotes(prevNotes => prevNotes.map(note => note.id === id ? updatedNote : note));
        } catch (error) {
            setError(true);
            setErrorMessage(error.message);
            console.log(error);
        }
    }

    const updateNote = (upadtadNote) => {
        const updatedNotes = notes.map((note) => {
            if (note.id !== upadtadNote.id) return note;

            return upadtadNote;
        });
        setNotes(updatedNotes);
    };

    return (
        <NotesContext.Provider value={{ notes, setNotes, updateNote, addNote, getNotes, hasError, errorMessage, deleteNote, handleUpdate }}>
            {props.children}
        </NotesContext.Provider>
    )
}
export { NotesContext, NotesProviderWrapper };