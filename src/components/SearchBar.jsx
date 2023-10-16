import React from "react";

function SearchBar({ search, onSearch }) {
  return (
    <section className="search_section">
      <h2 className="judul-note">Cari Catatan</h2>
      <form>
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
