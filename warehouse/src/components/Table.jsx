import React, {useState} from 'react';
import Data from "./Data";
import {NavLink} from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';

const Table = () => {

  const[data, setData] = useState(Data)

  const deleteWareHouseData = (id) =>{
    const newItem = data.filter((item) => item.id !== id);
    setData(newItem);
  }

    return (
        <div className="table my-2">
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
