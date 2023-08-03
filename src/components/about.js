import React from "react";
import './about.css'
import hoang from './images/about.jpg'

const About = () => {
    return (
        <div className="about">
            <div className="container">
                {/* <img src={hoang} alt='john'/> */}
                <h1> Hoang Ly </h1>
                    <p>CS student passionate about AI, Machine Learning, and web/app development. Explore my tech journey and innovative projects in these fields.</p>
            </div>
        </div>
    )
}

export default About;