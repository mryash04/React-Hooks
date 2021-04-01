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

const initialState = {
    firstCount : 0,
    secondCount : 0
}

console.log(initialState.firstCount);

const reducer = (state, action) =>{
    console.log(state.firstCount, action);
    console.log(state.secondCount);
    console.log(action.value);
    switch(action.type){
        case "Increment":{
            return {...state, firstCount : state.firstCount + action.value}
        }
        case "Decrement":{
            return {...state, firstCount : state.firstCount - action.value}
        }
        case "IncrementSecond":{
            return {...state, secondCount : state.secondCount + action.value}
        }
        case "DecrementSecond":{
            return {...state, secondCount : state.secoundCount - action.value}
        }
        default:
            break;
    }
}

const ReducerAdvanced = () => {

    const[state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="reducer_advanced" style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            height:"100vh",
            backgroundColor:"orange"
        }}>
            <h2>{state.firstCount}</h2>
            <h2>{state.secondCount}</h2>
            <button style={btn} onClick={() => dispatch({type : "Increment", value : 1})}>Increment</button>
            <button style={btn} onClick={() => dispatch({type : "Decrement", value : 1})}>Decrement</button>
            <button style={btn} onClick={() => dispatch({type : "IncrementSecond", value : 5})}>Increment 5</button>
            <button style={btn} onClick={() => dispatch({type : "DecrementSecond", value : 5})}>Decrement 5</button>
        </div>
    )
}

export default ReducerAdvanced
