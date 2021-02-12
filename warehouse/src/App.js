import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import About from "./components/About";
import Table from "./components/Table";
import Edit from "./components/Edit";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about">
            <Header />
            <About />
          </Route>
          <Route path="/edit">
            <Header />
            <Edit />
          </Route>
          <Route path="/">
            <Header />
            <Table />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
