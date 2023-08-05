import React from "react";
import './projects.css'

const Projects = () => {
    return (
      <div className="projects">
        <h1>Projects</h1>
        <div className="container">
          <div className="content">
            <div className="card">
              <div className="date">July 2023 - Now</div>
                <div className="info">
                  <ul>
                    <li>Developed a web application with React as the frontend.</li>
                    <li>Implemented GitHub OAuth to get data from user’s repositories.</li>
                    <li>Used Github for VCS</li>
                    {/* Add more project details here */}
                  </ul>
                </div>
              </div>
  
              <div className="card">
                <div className="info">
                  <h3>Medical Hotline App</h3>
                  <ul>
                    <li>Designed and built a mobile app using Flutter and Go</li>
                    <li>Implemented Firebase authentication and database.</li>
                    <li>Integrated with a medical API to get patient medical history.</li>
                    <li>Used Firebase Cloud Functions to send push notifications.</li>
                  </ul>
                </div>
              </div>
  
            <div className="card ">
              <div className="info">
                <h3>Placedotio</h3>
                <ul>
                  <li>Developed a web app using Next.js and Node.js</li>
                  <li>Implemented Firebase authentication and real-time database</li>
                  <li>Created a user interface that allows users to place pixels on a canvas</li>
                  <li>Used Firebase Cloud Functions to update the canvas in real time</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  

export default Projects;