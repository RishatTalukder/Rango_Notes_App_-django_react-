import React from "react";
import notes from "../assets/data";
import ListItem from "../components/ListItem";
import { useState, useEffect } from "react";
import AddNote from "../components/AddNote";

const NotesListPage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    let response = await fetch("/api/notes/");
    let data = await response.json();
    console.log(data);
    setNotes(data);
  };

  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9782; Notes</h2>
        <p className="notes-count">{notes.length}</p>
      </div>
      <div className="notes-list">
        {notes.map((note) => {
          return (
            <div key={note.id}>
              <ListItem note={note} />
            </div>
          );
        })}
      </div>
      <AddNote />
    </div>
  );
};

export default NotesListPage;
