import React from "react";
import UserDetails from "./UserDetails";
import Home from "./Home";
import "./App.css";
import SearchAppBar from "./SearchAppBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {

  return (
    <div>
    <SearchAppBar/>
    <Router>
      <Switch>
        <Route path="/UserDetails">
          <UserDetails />
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}



export default App;
