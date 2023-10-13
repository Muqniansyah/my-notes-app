import React from "react";
import NotesArsip from "./NotesArsip";
import NotesActive from "./NotesActive";
import { getInitialData } from "../utils/index";

class NotesResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  // event hapus
  onDeleteHandler(id) {
    const { notes } = this.state;
    const newNotes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes: newNotes });
  }

  render() {
    const { notes } = this.state;
    return (
      <div className="result">
        <NotesActive notes={this.state.notes} onDelete={this.onDeleteHandler} />
        {notes.length === 0 && <p>Catatan tidak ada</p>}
        <NotesArsip />
        <p>Catatan tidak ada</p>
      </div>
    );
  }
}

export default NotesResult;
