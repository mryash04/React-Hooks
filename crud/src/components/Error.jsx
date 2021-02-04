import React from 'react';
import {NavLink} from "react-router-dom";
import "./Error.css";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const Error = () => {
    return (
        <div className="error">
            <h2>4😮4 Page</h2>
            <p className="text-capitalize">Oops! nothing was found</p>
            <NavLink to="/"><button><span><ArrowBackIcon /></span> Go back</button></NavLink>
        </div>
    )
}

export default Error;