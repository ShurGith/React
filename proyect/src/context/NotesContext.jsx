import React, { createContext, useState } from 'react';
const NotesContext = createContext();

const NotesProviderWrapper = (props) => {
    const noteList = [
        {
            id: 1,
            title: "Note 1",
            content: "This is the first note",
            marked: false,
        },
        {
            id: 2,
            title: "Note 2",
            content: "This is the second note",
            marked: false,
        },
        {
            id: 3,
            title: "Note 3",
            content: "This is the tercera nota",
            marked: false,
        },
        {
            id: 4,
            title: "Note 4",
            content: "This is the fourth note",
            marked: false,
        },
    ];

    const [notes, setNotes] = useState(noteList);

    return (
        <NotesContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NotesContext.Provider>
    )
}
export { NotesContext, NotesProviderWrapper };