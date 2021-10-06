import React from "react";
import home_img from "../src/images/home.svg"
import Common from "./Common";

const Home = () => {
    return (
        <>
            <Common name="Grow your business with" strong="MATE IT" imgsrc={home_img} visit="/about" btnname="Get Started" />
        </>
    )
}

export default Home;