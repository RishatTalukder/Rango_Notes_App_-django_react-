import React from 'react'

import notes from '../assets/data'

const NotesListPage = () => {
  return (
    <div>
        {notes.map((note)=>{
            return(
                <div key={note.id}>
                    <h2>{note.body}</h2>
                    <p>{note.updated}</p>
                </div>
            )
        })}
    </div>
  )
}

export default NotesListPage