import React from 'react';

const Contact = () => {
    return (
        <div className="contact container mt-4">
            <h2 className="text-center">Contact Form</h2>
            <form className="mt-5">
                <div className="form-group">
                    <input className="form-control form-control-lg" type="text" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                    <input className="form-control form-control-lg" type="text" placeholder="Enter your username" />
                </div>
                <div className="form-group">
                    <input className="form-control form-control-lg" type="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                    <input className="form-control form-control-lg" type="number" placeholder="Enter your number" />
                </div>
                <div className="form-group">
                    <input className="form-control form-control-lg" type="text" placeholder="Enter website" />
                </div>
                <div className="form-group">
                    <button className="form-control form-control-lg btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Contact;
