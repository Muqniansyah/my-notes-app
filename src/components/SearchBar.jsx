import React from "react";

function SearchBar({ search, onSearch }) {
  return (
    <section className="search_section">
      <h2>Cari Catatan</h2>
      <form id="searchNote">
        <label htmlFor="searchNoteTitle"></label>
        <input
          type="text"
          placeholder="Cari Catatan"
          value={search}
          onChange={onSearch}
        />
      </form>
    </section>
  );
}

export default SearchBar;
