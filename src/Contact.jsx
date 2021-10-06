import React, { useState } from "react";

const Contact = () => {

    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        message: ""
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    };

    const formSubmit = () => {

    };

    return (
        <>
            <div className="text-center mt-5 con" ><h1>Contact with <strong style={{ color=`blue` }}>US</strong></h1></div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label mt-3">Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput2" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter your full name here"></input>


                                <label for="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com"></input>
                                <label for="exampleFormControlInput1" className="form-label mt-3">Contact number</label>
                                <input type="text" className="form-control" id="exampleFormControlInput2" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter your phone number with country code"></input>

                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Enter your message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message" value={data.message} onChange={InputEvent} placeholder="Enter your message here"></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div >
        </>
    )
}

export default Contact;
