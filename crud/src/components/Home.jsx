import React, { useState, useEffect } from 'react';
import axios from "axios";
import { NavLink } from "react-router-dom";
import EditUser from "./EditUser";

const Home = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((apiData) => apiData.json()).
      then((actualData) => setData(actualData));
  }, [])

  const deleteUser = (id) => {
    console.log(id);

    const deleteUserItem = data.filter((item) => item.id !== id);
    setData(deleteUserItem);
  }

  return (
    <div className="home container py-4">
      <table class="table border shadow">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((userInfo, index) => {
            return <tr>
              <th scope="row">{index + 1}</th>
              <td>{userInfo.name}</td>
              <td>{userInfo.username}</td>
              <td>{userInfo.email}</td>
              <td>
                <NavLink to="/" className="btn btn-primary mr-2">View</NavLink>
                <NavLink to={`/edit/${userInfo.id}`} className="btn btn-outline-primary mr-2">Edit</NavLink>
                <NavLink to="/" className="btn btn-danger" onClick={() => deleteUser(userInfo.id)}>Delete</NavLink>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Home;