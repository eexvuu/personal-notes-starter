import { Component } from "react";
import NoteBody from "./components/NoteBody";
import { getInitialData } from "./utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };
  }
  render() {
    return (
      <>
        <NoteBody notes={this.state.notes} />
      </>
    );
  }
}

export default App;
