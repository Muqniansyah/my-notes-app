import React from "react";
// import NoteList from "./NoteList";

function NotesResult({ notes, arsip, moveData, onDelete }) {
  return (
    <div className="result">
      <h2>Catatan Aktif</h2>
      <NoteList
        notes={notes}
        moveData={moveData}
        onDelete={onDelete}
        text="arsip"
      />

      <h2>Arsip Catatan</h2>
      <NoteList
        notes={arsip}
        moveData={moveData}
        onDelete={onDelete}
        text="active"
      />
    </div>
  );
}

export default NotesResult;
