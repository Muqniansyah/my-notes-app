import React from "react";
import SearchBar from "./SearchBar";
import NotesResult from "./NotesResult";
import { getInitialData } from "../utils/index";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };
  }

  render() {
    return (
      <>
        <SearchBar />
        <NotesResult />
      </>
    );
  }
}

export default NotesApp;
