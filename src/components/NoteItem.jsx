import React from "react";
import DeleteButton from "./button/DeleteButton";
import ArsipButton from "./button/ArsipButton";
import { showFormattedDate } from "../utils";

function NoteItem({ title, body, createdAt, id, onDelete, moveData }) {
  return (
    <div className="note_item">
      <h3 className="note-judul">{title}</h3>
      <p className="note-date">{showFormattedDate(createdAt)}</p>
      <p className="note-pesan">{body}</p>
      <div className="icon">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArsipButton id={id} moveData={moveData} />
      </div>
    </div>
  );
}

export default NoteItem;
