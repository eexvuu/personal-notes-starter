import { Component } from "react";

class NoteSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
    };
  }

  onSearchChangeEventHandler = (event) => {
    this.setState(
      {
        search: event.target.value,
      },
      () => {
        this.props.onSearchChange(this.state);
      }
    );
  };

  render() {
    return (
      <div className="note-search">
        <input
          type="text"
          placeholder="Search"
          value={this.state.search}
          onChange={this.onSearchChangeEventHandler}
        />
      </div>
    );
  }
}

export default NoteSearch;
