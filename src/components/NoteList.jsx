import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, moveData }) {
  if (notes.length === 0) {
    return <p className="pesan-notfind">catatan tidak ada</p>;
  } else {
    return (
      <section className="notes-main">
        <div className="notes_list">
          {notes.map((note) => (
            <NoteItem
              key={note.id}
              id={note.id}
              onDelete={onDelete}
              moveData={moveData}
              {...note}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default NoteList;
