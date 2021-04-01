import React, {useState, useReducer} from 'react'
import CompA from "./CompA";
import CompB from "./CompB";

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

const initialState = <CompA />

const reducer = (state, action) =>{
}

const ShowHideComp = () => {

    const[state, dispatch] = useReducer(reducer, initialState)

    console.log(state);

    return (
        <div className="showhide_comp" style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            height:"100vh",
            backgroundColor:"orange"
        }}>
            <button onClick={() => console.log("This is component a")} style={btn}>Component A</button>
            <button onClick={() => console.log("This is component b")} style={btn}>Component B</button>
            <CompA />
            <CompB />
        </div>
    )
}

export default ShowHideComp
