import React from "react";
import './about.css'

const About = () => {
    return (
        <div className="about">
                <p style={{textAlign: "center"}}>Hoang Ly</p>
                <p>Undergrad student at Umass Amherst</p>
                <p>Interested in artificial intelligence and software engineering.</p>
                <div className='nav'>
                    <button className="button"> About</button>
                    <button className="button"> Experience</button>
                    <button className="button"> Projects</button>
                </div>
        </div>
    )
}

export default About;