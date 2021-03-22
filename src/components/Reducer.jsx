import React, {useReducer} from 'react'

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

const Reducer = () => {

    const initialState = 0;

    const reducer = (state, action) =>{
        console.log(action.type)
        if(action.type == "Increment"){
            return state + 1;
        }else if(action.type == "Decrement"){
            return state - 1;
        }
    }

    const[state, dispatch] = useReducer(reducer, initialState)

    console.log(state);

    return (
        <div className="reducer" style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            height:"100vh",
            backgroundColor:"orange"
        }}>
            <h2 style={{color:"#ffffff"}}>{state}</h2>
            <button style={btn} onClick={() => dispatch({type : "Increment"})}>Increment</button>
            <button style={btn} onClick={() => dispatch({type : "Decrement"})}>Decrement</button> 
        </div>
    )
}

export default Reducer