import React from "react";
import SubmitButton from "./button/SubmitButton";

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };
  }

  render() {
    return (
      <section className="input_section">
        <h2>Tambahkan Catatan</h2>
        <form id="inputBook">
          <div className="input">
            {/* input nama */}
            <label htmlFor="inputNoteTitle">Nama Catatan</label>
            <input
              id="inputNoteTitle"
              type="text"
              required
              placeholder="Masukkan Nama Catatan"
              maxlength="25"
            />
            <label id="notifikasiSisaKarakter">
              Sisa karakter : <span id="sisaKarakter"></span>
            </label>
          </div>
          <div className="input">
            {/* input pesan */}
            <label htmlFor="pesan">Isi Catatan</label>
            <br />
            <textarea
              name="pesan"
              id="pesan"
              cols="50"
              rows="4"
              placeholder="Isi catatan anda disini"
            ></textarea>
          </div>
          <SubmitButton />
        </form>
      </section>
    );
  }
}
export default NotesInput;
