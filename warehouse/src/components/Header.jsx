import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from "react-router-dom";
import Data from "./Data";

const Header = () =>{

  const[data, setData] = useState(Data);

  const[search, setSearch] = useState("");

  const[res, setRes] = useState([]);

    return(
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <NavLink className="navbar-brand font-weight-bold" to="/">Warehouse</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink className="nav-link text-white" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link text-white" to="/about">About</NavLink>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" 
      onChange={e => {
          const test = data.filter(data => {
            return (data.toLowerCase().includes(e.target.value.toLowerCase()));
          });
          console.log("test: ", test);

          // uncomment line below and teams is logged as I want
          setData(test);
          setSearch(e.target.value);

          setRes(test)
          if(e.target.value === '') setRes([])
        }}
        type="text"
        value={search}  type="text" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
        </div>
    )
}

export default Header;