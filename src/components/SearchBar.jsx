import React from "react";
import NotesInput from "./NotesInput";

function SearchBar({}) {
  return (
    <section className="search_section">
      <h2>Cari Catatan</h2>
      <form id="searchNote">
        {/* <label for="searchNoteTitle"></label> */}
        <input id="searchNoteTitle" type="text" placeholder="Cari Catatan" />
        <button id="searchSubmit" type="submit">
          Cari
        </button>
      </form>

      <NotesInput />
    </section>
  );
}

export default SearchBar;
