import React from "react";
import Card from "./Card";
import s1 from "./images/s1.jpg"
import s2 from "./images/s2.jpg"
import s3 from "./images/s3.jpg"
import s4 from "./images/s4.png"
import s5 from "./images/s5.png"
import s6 from "./images/s6.jfif"
import sdata from "./Sdata";

const Service = () => {
    return (
        <>
            <div className="my-5" id="service">

                <h1 className="text-center"> Our Services</h1>

            </div>

            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">

                            { /* <Card imgsrc={s1} title="Web development" visit="/" />
                            <Card imgsrc={s2} title="Android app development" visit="/" />
                            <Card imgsrc={s3} title="Windows app development" visit="/" />
                            <Card imgsrc={s4} title="ios app development" visit="/" />
                            <Card imgsrc={s5} title="OSX app development" visit="/" />
                            <Card imgsrc={s6} title="Database management" visit="/" /> */ }
                            {sdata.map((val, ind) => {
                                return <Card
                                    key={ind}
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                    visit={val.visit}
                                />
                            }
                            )}

                        </div>

                    </div>
                </div>
            </div>
            <br></br><br></br>
        </>
    )
}

export default Service;