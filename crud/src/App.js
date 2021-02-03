import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about">
            <Navbar />
          </Route>
          <Route path="/contact">
            <Navbar />
          </Route>
          <Route path="/">
            <Navbar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;