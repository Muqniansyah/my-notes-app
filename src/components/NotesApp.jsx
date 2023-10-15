import React from "react";
import NoteList from "./NoteList";
import NotesInput from "./NotesInput";
import SearchBar from "./SearchBar";
import { getInitialData } from "../utils/index";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchNote: "",
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onMoveDataHandler = this.onMoveDataHandler.bind(this);
  }

  // event hapus
  onDeleteHandler(id) {
    const newNotes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes: newNotes });
  }

  // event tambah
  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toDateString(),
            archived: false,
          },
        ],
      };
    });
  }

  // event arsip
  // onMoveDataHandler({ id }) {
  //   const updateNotes = this.state.notes.map((note) =>
  //     note.id === id ? { ...note, archived: !note.archived } : note
  //   );
  //   this.setState({ notes: updateNotes });
  //   console.log(updateNotes);
  // }

  onMoveDataHandler(id) {
    const updateNotes = this.state.notes
      .filter((note) => note.id === id)
      .map((note) => {
        note.archived = !note.archived;
      });
    this.setState({
      updateNotes,
    });
    console.log(updateNotes);
  }

  // event search
  onSearchHandler(event) {
    this.setState(() => {
      return {
        searchNote: event.target.value,
      };
    });
  }

  render() {
    // search
    const noteSearch = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.searchNote.toLowerCase())
    );
    // archive
    const activeNotes = noteSearch.filter((note) => {
      return note.archived === false;
    });
    const archivedNotes = noteSearch.filter((note) => {
      return note.archived === true;
    });
    return (
      <div>
        <h3>Notes App</h3>
        <NotesInput addNote={this.onAddNoteHandler} />
        <SearchBar onSearch={this.onSearchHandler} />
        <div className="result">
          <h2>Catatan Aktif</h2>
          <NoteList
            notes={activeNotes}
            onDelete={this.onDeleteHandler}
            moveData={this.onMoveDataHandler}
          />

          <h2>Arsip Catatan</h2>
          <NoteList
            notes={archivedNotes}
            onDelete={this.onDeleteHandler}
            moveData={this.onMoveDataHandler}
          />
        </div>
      </div>
    );
  }
}

export default NotesApp;
