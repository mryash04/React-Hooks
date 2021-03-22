import React, {useState} from 'react'

const DataObject = () => {

    const contentStyle={
        color:"#800000",
        backgroundColor:"#ffffff",
        padding:"30px 20px",
        display:"flex",
        justifyContent:"center",
        borderRadius:"50px",
        fontSize:"20px"
    }

    const[objectData, setObjectData] = useState({
        id: 1, name: "Hercules", age: 31, job: "Web Development",
    })

    const handleClick = () =>{
        setObjectData({...objectData, name:"Parrytest"});
    }

    return (
        <div style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            height:"100vh",
            backgroundColor:"#ff0000"
        }}>
            <h2 style={contentStyle}>The name is {objectData.name} & age is {objectData.age} & job is {objectData.job}</h2>
            <button style={{
                color:"#ffffff",
                backgroundColor:"#800000",
                padding:"10px 20px",
                border:"none",
                outline:"none",
                borderRadius:"5px",
                fontSize:"20px",
                cursor:"pointer"
            }} onClick={handleClick}>Update</button>
        </div>
    )
}

export default DataObject
