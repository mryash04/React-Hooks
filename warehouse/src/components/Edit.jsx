import React, {useState} from 'react';
import {useHistory, useParams} from "react-router-dom";

const Edit = () => {

    const[user, setUser] = useState({
        name: "",
        city: "",
        code: "",
        cluster: "",
        space: ""
    });

    const{name, city, code, cluster, space} = user;

    const handleChange = (event) =>{
        setUser({...user, [event.target.name]: event.target.value});
        console.log({...user});
    };

    const history = useHistory();

    const {id} = useParams();

    console.log(id);

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log("button is submitted");

        history.push("/");
    }

    return (
        <div className="edit container my-5">
            <h2 className="text-center text-uppercase">Edit Warsehouse Details</h2>
            <form className="my-5" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input className="form-control form-control-lg" onChange={handleChange} type="text" name="name" value={name} placeholder="Enter Warehouse Name" />
                </div>
                <div className="form-group">
                    <input className="form-control form-control-lg" onChange={handleChange} type="text" name="city" value={city} placeholder="Enter City Name" />
                </div>
                <div className="form-group">
                    <input className="form-control form-control-lg" onChange={handleChange} type="text" name="code" value={code} placeholder="Enter Code" />
                </div>
                <div className="form-group">
                    <input className="form-control form-control-lg" onChange={handleChange} type="text" name="cluster" value={cluster} placeholder="Enter Cluster" />
                </div>
                <div className="form-group">
                    <input className="form-control form-control-lg" onChange={handleChange} type="number" name="space" value={space} placeholder="Enter Avaliable Space" />
                </div>
                <div className="form-group">
                    <button className="form-control btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Edit

