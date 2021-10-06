import React from "react";
import { NavLink } from "react-router-dom";


const Footer = () => {
    return (

        <>
            <footer className="text-center text-white mt-5 fixed-bottom" style={{ backgroundColor: `blue` }}>





                <div className="text-center p-3" style={{ backgroundColor: `rgba(0, 0, 0, 0.2)` }}>
                    © 2021 Copyright:
                    <NavLink className="text-white" to="/" style={{ textDecoration: `none` }}> Hossain Mohit </NavLink>
                </div>
            </footer>

        </>
    )
};

export default Footer;
