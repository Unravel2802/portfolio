import React from "react";
import './home.css'
import hoang from './images/about.jpg'

const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <img src={hoang} alt='john'/>
                <div className="columns-2">
                    <h2>Home</h2>
                    <span className="line"></span>
                    <p>CS student passionate about AI, Machine Learning, and web/app development. Explore my tech journey and innovative projects in these fields.</p>
                    <button className="button">explore more</button>
                </div>
            </div>
        </div>
    )
}

export default Home;