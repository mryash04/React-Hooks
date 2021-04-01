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

const initialState = [<CompA />, <CompB />]

const reducer = (state, action) =>{
    console.log(state);
    console.log(action.type);
    switch(action.type){
        case "componentA" :{
            return state[0];
        }
        case "componentB" :{
            return state[1];
        }
        default:
            break;
    }
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
            <button onClick={() => dispatch({type : "componentA"})} style={btn}>Component A</button>
            <button onClick={() => dispatch({type : "componentB"})} style={btn}>Component B</button>
            <div>
                {state}
            </div>
        </div>
    )
}

export default ShowHideComp
