import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.css";
import NoteApp from "./components/NoteApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NoteApp />
  </React.StrictMode>
);
