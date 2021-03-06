import React, {useState} from 'react';
import Data from "./Data";
import {NavLink} from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import { TagFacesTwoTone } from '@material-ui/icons';

const Table = () => {

  const[data, setData] = useState(Data);

  const[search, setSearch] = useState();

  const[res, setRes] = useState([]);

  const deleteWareHouseData = (id) =>{
    const newItem = data.filter((item) => item.id !== id);
    setData(newItem);
  }

    return (
        <div className="table my-2">
          <div className="form-group container">
            <input className="form-control border-dark" type="text" placeholder="Enter warehouse name to search" 
                  onChange={e => {
                    const test = data.filter((data) => {
                      return (data.name).toString().toLowerCase().includes(e.target.value.toString().toLowerCase())
                    })
            
                      // uncomment line below and teams is logged as I want
            
                      console.log(test);
            
                      setData(test);
                      setSearch(e.target.value);
            
                      setRes(test);
                      if(e.target.value === '') setRes([])
                    }} value={search}/>
          </div>
            <div className="container">
            <table class="table table-striped table-bordered">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">City</th>
      <th scope="col">Code</th>
      <th scope="col">Cluster</th>
      <th scope="col">Space-Avaliable</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
      {data.map((value, index) => {
          return <tr>
          <th scope="row">{index + 1}</th>
          <td>{value.name}</td>
          <td>{value.city}</td>
          <td>{value.code}</td>
          <td>{value.cluster}</td>
          <td>{value.space_available}</td>
          <td>
              <NavLink to="/" className="btn btn-primary mr-2">View<span><VisibilityIcon /></span></NavLink>
              <NavLink to="/edit" className="btn btn-outline-primary mr-2">Edit<span><EditIcon /></span></NavLink>
              <NavLink to="/" className="btn btn-danger" onClick={() => deleteWareHouseData(value.id)}>Delete<span><DeleteIcon /></span></NavLink>
          </td>
        </tr>
      })}
  </tbody>
</table>
            </div>
        </div>
    )
}

export default Table
