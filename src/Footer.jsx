import React from "react";
import { NavLink } from "react-router-dom";


const Footer = () => {
    return (

        <>
            <footer className="text-center text-white fixed-bottom" style={{ backgroundColor: `blue` }}>





                <div className="text-center p-3" style={{ backgroundColor: `rgba(0, 0, 0, 0.2)` }}>
                    © 2021 Copyright:
                    <NavLink className="text-white" to="/" style={{ textDecoration: `none` }}> mate-it.xyz</NavLink>
                </div>
            </footer>

        </>
    )
};

export default Footer;