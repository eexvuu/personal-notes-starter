import { Component } from "react";
import { getInitialData } from "../utils";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import NoteSearch from "./NoteSearch";

class NoteApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      search: "",
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSearchChangeEventHandler =
      this.onSearchChangeEventHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: !note.archived };
      }
      return note;
    });
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: +new Date(),
            archived: false,
          },
        ],
      };
    });
  }

  onSearchChangeEventHandler({ search }) {
    this.setState({ search });
  }

  render() {
    const filteredNotes = this.state.notes.filter(
      (note) =>
        note.title.toLowerCase().includes(this.state.search.toLowerCase()) ||
        note.body.toLowerCase().includes(this.state.search.toLowerCase())
    );

    return (
      <>
        <div className="note-app__header">
          <h1>Notes</h1>
          <NoteSearch onSearchChange={this.onSearchChangeEventHandler} />
        </div>

        <div className="note-app__body">
          <div className="note-input">
            <h2>Buat catatan</h2>
            <NoteInput addNote={this.onAddNoteHandler} />
          </div>
          <h2>Catatan Aktif</h2>
          {filteredNotes.filter((note) => !note.archived).length > 0 ? (
            <NoteList
              notes={filteredNotes.filter((note) => !note.archived)}
              onDelete={this.onDeleteHandler}
              onArchive={this.onArchiveHandler}
            />
          ) : (
            <p className="notes-list__empty-message">Tidak ada catatan</p>
          )}

          <h2>Arsip</h2>
          {filteredNotes.filter((note) => note.archived).length > 0 ? (
            <NoteList
              notes={filteredNotes.filter((note) => note.archived)}
              onDelete={this.onDeleteHandler}
              onArchive={this.onArchiveHandler}
            />
          ) : (
            <p className="notes-list__empty-message">Tidak ada catatan</p>
          )}
        </div>
      </>
    );
  }
}

export default NoteApp;
