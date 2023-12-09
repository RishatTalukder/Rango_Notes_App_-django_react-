import React from "react";
import { Link } from "react-router-dom";

const AddNote = () => {
  return (
    <div>
      <Link to="/note/new" className="floating-button">
        <div>
          <div>
            {/* plus icon */}
            <strong>
                &#43;
            </strong>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AddNote;
