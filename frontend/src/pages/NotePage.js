import React from "react";
import { useParams, useNavigate } from "react-router-dom";
// import notes from "../assets/data";
import { useState, useEffect } from "react";
const NotePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [note, setNote] = useState([]);

  const getNote = async () => {
    if (id === "new") return;

    let response = await fetch(`/api/notes/${id}/`);
    let data = await response.json();
    console.log(data);
    setNote(data);
  };

  const deleteNote = async () => {
    await fetch(`/api/notes/${id}/delete/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/");
  };

  useEffect(() => {
    getNote();
  }, []);

  let createNote = async () => {
    await fetch(`/api/notes/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  let updateNote = async () => {
    await fetch(`/api/notes/${id}/update/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  let handleSubmit = () => {
    if (id !== "new" && note.body === "") {
      deleteNote();
    }
    else if (id !== "new") {
    updateNote();
    }
    else if (id === "new" && note.body !== "") {
      createNote();
    }

    navigate("/"); // redirecting to the home page
  };

  if (!note) {
    return <p>Note not found</p>;
  }

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <div onClick={handleSubmit}>
            {/* arrow left icon */}
            &#8592;
          </div>
        </h3>
        {/* if the id is not equal to new, then show the delete button */}
        {id !== "new" ? (
          <button onClick={deleteNote}>
            {/* trash icon */}
            &#128465;
          </button>
        ) : (
          <button onClick={handleSubmit}>done</button>
        )}
      </div>

      <textarea
        onChange={(e) => setNote({ ...note, body: e.target.value })}
        value={note.body}
      ></textarea>
    </div>
  );
};

export default NotePage;
