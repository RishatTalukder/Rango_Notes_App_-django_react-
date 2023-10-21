import React from "react";
import { useParams } from "react-router-dom";

const NotePage = () => {
  // to access the id from the URl, we use the useParams hook
  const noteId = useParams().id;
  return <div>SIngle Note {noteId}</div>;
};

export default NotePage;
