import React, { useState, useEffect } from 'react';
import "./Effect.css";
import Data from "./Data";
import 'bootstrap/dist/css/bootstrap.css';

const Effect = () => {

    let Number = 0;

    const [count, setCount] = useState(Number);

    const [data, setData] = useState([]);

    useEffect(() => {
        document.title = (`This is title ${count}`);
        console.log("The document title is changed");

        fetch(`https://jsonplaceholder.typicode.com/todos/`).
            then((apiData) => apiData.json()).then((actualData) => setData(actualData));


    }, [count]);

    return (
        <div className="effect">
            <table className="table table-bordered table-dark">
            <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col" className="text-center w-75">Title</th>
                    </tr>
                </thead>
            </table>
            {data.map((todo) => {
                return <Data
                    id={todo.id}
                    title={todo.title}
                />
            })}
            <button className="btn" onClick={() => setCount((prevCount) => prevCount + 1)}>Click Me</button>
            <h2>{count}</h2>
        </div>
    )
}

export default Effect;






