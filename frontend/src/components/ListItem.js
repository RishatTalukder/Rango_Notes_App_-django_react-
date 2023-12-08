import React from "react";
import { Link } from "react-router-dom";

const ListItem = (note) => {
  const { id, body, updated } = note.note;

  let title = body.split("\n")[0];

  if (title.length > 45){
    title = title.slice(0, 45);
  }

  let getTime = () => {
    let time = new Date(updated);
    return time.toLocaleDateString() + " " + time.toLocaleTimeString();
  }

  return (
    <div>
      <Link to={`note/${id}`}>
        <div className="notes-list-item">
          <h3>{title}</h3>
          <p>
            <span>{getTime()}</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ListItem;
