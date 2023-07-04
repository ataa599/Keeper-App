import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"

function createNote(note){
    return(
    <Note 
        key={note.key}
        name={note.title}
        content={note.content}
    />);
}

function App(){
    return(
        <div>
            <Header />
            {/* <Note name="hello" content="xhejf" />
            <Note name="hello" content="xhejf" /> */}
            {/* <Note name={notes[0].title} content={notes[0].content} /> */}
            {notes.map(createNote)}
            <Footer />
        </div>
    );
}
export default App;