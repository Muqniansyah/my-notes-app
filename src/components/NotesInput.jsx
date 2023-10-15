import React from "react";

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      maxTitle: 50,
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    const newTitle = event.target.value;
    if (newTitle.length <= this.state.maxTitle) {
      this.setState({
        title: newTitle,
      });
    }
  }

  onBodyChangeHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  // submit event handler
  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <section className="input_section">
        <h2>Tambahkan Catatan</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <div className="input">
            {/* input nama */}
            <label htmlFor="inputNoteTitle">Nama Catatan</label>
            <input
              type="text"
              required
              placeholder="Masukkan Nama Catatan"
              value={this.state.title}
              onChange={this.onTitleChangeHandler}
            />
            <p>
              Karakter Tersisa : {this.state.maxTitle - this.state.title.length}
            </p>
          </div>
          <div className="input">
            {/* input pesan */}
            <label htmlFor="pesan">Isi Catatan</label>
            <br />
            <textarea
              name="pesan"
              cols="50"
              rows="4"
              required
              placeholder="Isi catatan anda disini"
              value={this.state.body}
              onChange={this.onBodyChangeHandler}
            ></textarea>
          </div>
          <button type="submit">Buat Catatan</button>
        </form>
      </section>
    );
  }
}

export default NotesInput;
