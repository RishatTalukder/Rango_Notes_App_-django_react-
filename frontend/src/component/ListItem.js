import React from 'react'

function ListItem({note}) {
  return (
    <div>{note.body}</div>
  );
}

export default ListItem