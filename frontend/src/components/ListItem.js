import React from "react";
import { Link } from "react-router-dom";

const ListItem = (note) => {
  const { id, title, body, created, updated } = note.note;
  console.log(id, title, body, created, updated);
  return (
    <div>
      <Link to={`note/${id}`}>
        <div className="notes-list-item">
          {body}
        </div>
      </Link>
    </div>
  );
};

export default ListItem;
