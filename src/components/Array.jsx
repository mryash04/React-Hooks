import React, {useState} from 'react'

const Array = () => {

    const contentStyle={
        color:"#800000",
        backgroundColor:"#ffffff",
        padding:"5px",
        width:"700px",
        display:"flex",
        justifyContent:"center",
        borderRadius:"50px"
    }

    const bioData = [
        {
            id: 1, name: "MSD", age: 39
        },
        {
            id: 2, name: "Jadega", age: 31
        },
        {
            id: 3, name: "Ashwin", age: 34
        }
    ];

    // console.log(bioData[1].age);

    const[arrayData, setArrayData] = useState(bioData);

    const handleClick = () =>{
        setArrayData([]);
    }

    return (
        <div className="array" style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            height:"100vh",
            backgroundColor:"#ff0000"
        }}>
            {arrayData.map((value) => { 
                return <h2 style={contentStyle} key={value.id}>The id is {value.id} and name is {value.name} and age is {value.age}</h2>
            })}
            <button style={{
                color:"#ffffff",
                backgroundColor:"#800000",
                padding:"10px 20px",
                border:"none",
                outline:"none",
                borderRadius:"5px",
                fontSize:"20px",
                cursor:"pointer"
            }} onClick={handleClick}>Clear</button>
        </div>
    )
}

export default Array
