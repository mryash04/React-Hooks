import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import User from "./components/User";
import EditUser from "./components/EditUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about">
            <Navbar />
            <About />
          </Route>
          <Route path="/contact">
            <Navbar />
            <Contact />
          </Route>
          <Route path="/user">
            <Navbar />
            <User />
          </Route>
          <Route path="/edit/:id">
            <Navbar />
            <EditUser />
          </Route>
          <Route exact path="/">
            <Navbar />
            <Home />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;