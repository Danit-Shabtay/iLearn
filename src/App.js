import React from "react";
import logo from "./Logo1.png";
import Users from "./Users";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./App.css";
import SearchAppBar from "./SearchAppBar";

function App() {
  return (
    <div className="App">
      <SearchAppBar>

      </SearchAppBar>
      <header className="App-header">
        :חיפוש משתמש
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Users />
        <img src={logo} className="App-logo" alt="logo" />
        <p>Danit's Website ♡</p>
        <a
          className="App-link"
          href="https://github.com/Danit-Shagan"
          target="_blank"
          rel="noopener noreferrer"
        >
          Danit's GitHub
        </a>
        <Button variant="contained">Default</Button>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        type="button"
      </header>
    </div>
  );
}



export default App;
