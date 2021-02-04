import React from 'react';

const User = () => {
    return (
        <div className="user container">
            <form>
                <h2 className="text-center">Add User</h2>
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="Enter your name" />
                    <input className="form-control" type="text" placeholder="Enter Username" />
                    <input className="form-control" type="email" placeholder="Enter your email" />
                    <input className="form-control" type="number" placeholder="Enter your number" />
                    <input className="form-control" type="text" placeholder="Enter website" />
                    <button className="form-control btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default User;






