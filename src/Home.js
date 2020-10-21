import React from "react";
import TextField from "@material-ui/core/TextField";
import logo from "./Logo1.png";
import Users from "./Users";

export default function User(props) {
    return (
        <div className="App">
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
         
        </header>
      </div>
  
    );
  }
  