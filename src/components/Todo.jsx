import React, { useState } from 'react'

const ToDo = () => {

    const contentStyle = {
        color: "#800000",
        backgroundColor: "#ffffff",
        padding: "20px 10px",
        display: "flex",
        justifyContent: "center",
        borderRadius: "50px",
        width: "800px"
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

    const [todoData, setTodoData] = useState(bioData);

    const handleClick = () => {
        setTodoData([""]);
    }

    const deleteItem = (id) =>{
        const newTodoData = todoData.filter((value) => {
            console.log(value.id !== id)
            return value.id !== id;
        })

        setTodoData(newTodoData);
    }

    const id = todoData.map((value) => {
        return value.id;
    })

    const updateData = () =>{
        const newTodoData = [
            {
                id: 3, name: "Ashwin", age: 34
            }]
    }

    return (
        <div className="todo" style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#ff0000"
        }}>
            {todoData.map((value) => {
                return <div>
                    <h2 style={contentStyle} key={value.id}>The id is {value.id} and name is {value.name} and age is {value.age}
                        <span><button style={{
                            color: "#ffffff",
                            backgroundColor: "#800000",
                            padding: "10px 20px",
                            border: "none",
                            outline: "none",
                            borderRadius: "5px",
                            fontSize: "10px",
                            cursor: "pointer",
                            marginLeft: "10px",
                            marginTop: "5px",
                            display: "grid",
                        }} onClick={() => deleteItem(value.id)}>Delete</button></span></h2>
                </div>
            })}
            <div style={{
                display:"grid",
                gridTemplateColumns:"repeat(2, 1fr)",
                gridGap:"5px"
            }}>
            <button style={{
                color: "#ffffff",
                backgroundColor: "#800000",
                padding: "10px 20px",
                border: "none",
                outline: "none",
                borderRadius: "5px",
                fontSize: "20px",
                cursor: "pointer"
            }} onClick={handleClick}>Clear</button>
            <button style={{
                color: "#ffffff",
                backgroundColor: "#800000",
                padding: "10px 20px",
                border: "none",
                outline: "none",
                borderRadius: "5px",
                fontSize: "20px",
                cursor: "pointer"
            }} onClick={updateData}>Update</button>
            </div>
        </div>
    )
}

export default ToDo
