import React from "react";
import DeleteButton from "./button/DeleteButton";

function NoteItem({ title, body, id, onDelete }) {
  return (
    <div className="note_item">
      <h3 className="note-judul">{title}</h3>
      <p className="note-pesan">{body}</p>
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

export default NoteItem;
