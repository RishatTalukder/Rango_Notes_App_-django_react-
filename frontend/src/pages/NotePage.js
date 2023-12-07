import React from "react";
import { useParams } from "react-router-dom";
import notes from "../assets/data";
import { Link } from "react-router-dom";

const NotePage = () => {
  const { id } = useParams();
  console.log("id", id);

  // Find the note with a matching id
  const note = notes.find((note) => note.id === Number(id));

  // Display a message if the note is not found
  if (!note) {
    return <p>Note not found</p>;
  }

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            {/* arrow left icon */}
            &#8592;
          </Link>
        </h3>
      </div>

      <textarea value={note.body}>
        {/* this is the editable note body but will not work until we add the onChange handler */}
      </textarea>

    </div>
  );
};

export default NotePage;
