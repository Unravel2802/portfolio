import React from "react";
import './about.css';
import fb from '../images/facebook.png';
import ig from '../images/instagram.png';
import gh from '../images/github-sign.png';
import ld from '../images/linkedin.png';

const About = () => {
    return (
        <div className="about">
                <p style={{textAlign: "center"}}>Hoang Ly</p>
                <p>Undergrad student at Umass Amherst</p>
                <p>Interested in artificial intelligence and software engineering.</p>
                    <div className="button-container">
                        <button className="button"> <span>About</span></button>
                        <button className="button"> <span>Experience</span></button>
                        <button className="button"> <span>Projects</span></button>
                    </div>
                <div className="social-icons">
                    <a href='/' className="facebook">
                        <img src={fb} alt='facebook'/>
                    </a>

                    <a href='/' className="instagram">
                        <img src={ig} alt='instagram'/>
                    </a>

                    <a href='/' className="linkedin">
                        <img src={ld} alt='linkedin'/>
                    </a>

                    <a href='/' className="github">
                        <img src={gh} alt='github'/>
                    </a>
                </div>
        </div>
    )
}

export default About;