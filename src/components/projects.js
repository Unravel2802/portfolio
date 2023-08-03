import React from "react";
import './projects.css'

const Projects = () => {
    return (
      <div className="projects w-full">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl text-center">Projects</h2>
          <div className="content grid grid-cols-1 gap-4 mt-16">
            <div className="card w-80 border rounded shadow-md p-4">
              <div className="date font-bold text-xl">July 2023 - Now</div>
              <div className="info pl-5">
                <ul className="mt-3 text-white text-base opacity-70">
                  <li>Developed a web application with React as the frontend.</li>
                  <li>Implemented GitHub OAuth to get data from user’s repositories.</li>
                  <li>Used Github for VCS</li>
                  {/* Add more project details here */}
                </ul>
              </div>
            </div>
  
            <div className="card w-80 border rounded shadow-md p-4">
              <h3>Medical Hotline App</h3>
              <ul>
                <li>Designed and built a mobile app using Flutter and Go</li>
                <li>Implemented Firebase authentication and database.</li>
                <li>Integrated with a medical API to get patient medical history.</li>
                <li>Used Firebase Cloud Functions to send push notifications.</li>
              </ul>
            </div>
  
            <div className="card w-80 border rounded shadow-md p-4">
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
    );
  };
  
  

export default Projects;