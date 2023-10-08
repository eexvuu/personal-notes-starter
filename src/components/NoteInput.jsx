import { Component } from "react";

class NoteInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      characterLength: 50,
    };
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler = (event) => {
    const title = event.target.value;
    const characterLength = 50 - title.length;

    if (characterLength >= 0) {
      this.setState({
        title: title,
        characterLength: characterLength,
      });
    } else {
      this.setState({
        title: title.substring(0, 50),
        characterLength: 0,
      });
    }
  };

  onBodyChangeEventHandler = (event) => {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  };

  onSubmitEventHandler = (event) => {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({
      title: "",
      body: "",
      characterLength: 50,
    });
  };
  render() {
    return (
      <>
        <form action="" onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit">
            sisa karakter : {this.state.characterLength}
          </p>
          <input
            type="text"
            className="note-input__title"
            placeholder="Ini adalah judul..."
            onChange={this.onTitleChangeEventHandler}
            value={this.state.title}
            required
          />
          <textarea
            className="note-input__body"
            type="text"
            placeholder="Tuliskan catatanmu disini..."
            onChange={this.onBodyChangeEventHandler}
            value={this.state.body}
            required
          ></textarea>
          <button type="submit">Buat</button>
        </form>
      </>
    );
  }
}

export default NoteInput;
