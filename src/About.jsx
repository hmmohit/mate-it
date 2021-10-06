import React from "react";
import Common from "./Common";
import about_img from "../src/images/about.png";

const About = () => {
    return (
        <>
            <Common name="Why with" strong="US?" imgsrc={about_img} visit="/contact" btnname="Contact now" />
        </>
    )
}

export default About;