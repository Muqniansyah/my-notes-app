import React from "react";
import NoteItem from "./NoteItem";

function NotesActive({ notes, onDelete }) {
  return (
    <section className="notes">
      <h2>Catatan Active</h2>
      <div id="incompleteNote" className="notes_list">
        {notes.map((note) => (
          <NoteItem key={note.id} id={note.id} onDelete={onDelete} {...note} />
        ))}
      </div>
    </section>
  );
}

export default NotesActive;
