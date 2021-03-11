import React, {useState} from 'react'

const DataObject = () => {

    const[objectData, setObjectData] = useState({
        id: 1, name: "Hercules", age: 31, job: "Web Development"
    })

    return (
        <div>
            <h2>The name is {objectData.name} and age is {objectData.age} and job is {objectData.job}</h2>
        </div>
    )
}

export default DataObject
