import { Component } from "react";

class NoteSearch extends Component {
  render() {
    return (
      <div className="note-search">
        <input
          type="text"
          placeholder="Search"
          value={this.props.search}
          onChange={this.props.onSearchChange}
        />
      </div>
    );
  }
}

export default NoteSearch;
