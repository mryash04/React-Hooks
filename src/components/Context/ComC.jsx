import React, {useContext} from 'react'
import {PersonDetails} from "./ComA";

const ComC = () => {

    const name = useContext(PersonDetails);

    return (
        <div className="compoc">
            <h2>This is component {name}</h2> 
        </div>
    )
}

export default ComC