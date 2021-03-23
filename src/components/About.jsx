import React, {useState} from 'react'
import {useHistory} from "react-router-dom";

const btn = {
    backgroundColor: "#4CAF50",
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "4px 2px",
    cursor: "pointer",
}

const History = () => {

    const[state, setState] = useState(true)

    const history = useHistory();

    console.log(history);

    const handleClick = () =>{
        history.push("/");
    }

    return (
        <div className="history">
            <h2>This is about page</h2>
            <button style={btn} onClick={handleClick}>Go Back</button>
        </div>
    )
}

export default History