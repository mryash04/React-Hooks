import React, {createContext} from 'react'
import ComB from "./ComB";

const PersonDetails = createContext();

const ComA = () => {
    return (
        <div className="compoa">
            <PersonDetails.Provider value={"John Doe"}>
                <ComB />
            </PersonDetails.Provider>
        </div>
    )
}

export default ComA;
export {PersonDetails};
