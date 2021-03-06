import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const User = () => {

    let history = useHistory();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    })

    const handleChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
        console.log({ ...user });
    }

    const handleSubmit = (event) => {
        console.log("button is submitted");
        event.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify({ user }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(json => setUser(json.user))

        history.push("/");
    }

    return (
        <div className="user container">
            <h2 className="text-center mt-4">Add User</h2>
            <form className="mt-5" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input className="form-control form-control-lg" onChange={handleChange} type="text" name="name" value={user.name} placeholder="Enter your name" />
                </div>
                <div className="form-group">
                    <input className="form-control form-control-lg" onChange={handleChange} type="text" name="username" value={user.username} placeholder="Enter Username" />
                </div>
                <div className="form-group">
                    <input className="form-control form-control-lg" onChange={handleChange} type="email" name="email" value={user.email} placeholder="Enter your email" />
                </div>
                <div className="form-group">
                    <input className="form-control form-control-lg" onChange={handleChange} type="number" name="phone" value={user.phone} placeholder="Enter your number" />
                </div>
                <div className="form-group">
                    <input className="form-control form-control-lg" onChange={handleChange} type="text" name="website" value={user.website} placeholder="Enter website" />
                </div>
                <div className="form-group">
                    <button className="form-control form-control-lg btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default User;