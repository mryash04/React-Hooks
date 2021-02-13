import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from "react-router-dom";
import Data from "./Data";
import {useHistory} from "react-router-dom";
import Table from "./Table";

const Header = () =>{

  const[data, setData] = useState(Data);

  const[search, setSearch] = useState(null);

  const[res, setRes] = useState([]);

  data.filter((data) =>console.log(data.name));

  const history = useHistory();

    return(
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <NavLink className="navbar-brand font-weight-bold" to="/">Warehouse</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto font-weight-bold">
      <li className="nav-item active">
        <NavLink className="nav-link text-white" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link text-white" to="/about">About</NavLink>
      </li>
    </ul>
  </div>
</nav>
        </div>
    )
}

export default Header;