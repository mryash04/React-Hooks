import React, { useState } from 'react';
import "./State.css";

const State = () => {

    let initalCount = 0;

    const [count, setCount] = useState(initalCount);
    const [state, setState] = useState({ counts: 0, theme: 'blue' });

    const counts = state.counts;
    const theme = state.theme;

    console.log(state.count);

    const IncrementState = () => {
        setState(prevState => {
            return {
                ...prevState,
                counts: prevState.counts + 1,
                theme: "red"
            }
        })
    }

    const DecrementState = () => {
        setState(prevState => {
            return {
                ...prevState,
                counts: prevState.counts - 1,
                theme: "Maroon"
            }
        })
    }

    return (
        <div className="state" style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh"
        }}>
            <div className="countState" style={{ display: "flex" }}>
                <button className="button" onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
                <h2>{count}</h2>
                <button className="button" onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            </div>
            <h2>Object State</h2>
            <div className="objectState" style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <button className="button" onClick={IncrementState}>+</button>
                <h2>{counts}</h2> &nbsp; &nbsp;
                <span style={{ fontWeight: "bold" }}>Theme {theme}</span>
                <button className="button" onClick={DecrementState}>-</button>
            </div>
        </div>
    )
}

export default State;