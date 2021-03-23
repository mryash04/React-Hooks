import React from 'react'
import {useLocation} from "react-router-dom";

const Location = () => {

    const location = useLocation();

    console.log(location);

    return (
        <div className="location">
            <h2>This is location{location.pathname.replace("/", " home")}</h2>
            <p>This is location{location.search}</p>
        </div>
    )
}

export default Location
