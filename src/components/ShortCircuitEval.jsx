import React, {useState} from 'react'

const ShortCircuitEval = () => {

    const[demo, setDemo] = useState("");

    return (
        <div>
            <h2>{demo || <div>
                <h2>This is demo</h2>
                <p>This is check demo</p>
                </div>}</h2>
            <h2>{demo || "Pettliner"}</h2>
        </div>
    )
}

export default ShortCircuitEval
