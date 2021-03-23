import logo from './logo.svg';
import './App.css';
import State from "./components/State";
import Effect from "./components/Effect";
import Array from "./components/Array";
import DataObject from "./components/DataObject";
import Todo from "./components/Todo";
import ShortCircuitEval from "./components/ShortCircuitEval";
import Reducer from "./components/Reducer";
import ComA from "./components/Context/ComA";
import Location from "./components/Location";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import History from "./components/About";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/about">
            <History />
          </Route>
          <Route path="/">
            <Location />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
