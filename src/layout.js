import React from "react";
import About from './components/about';
import Education from "./components/education";
import Projects from './components/projects';
import Experience from "./components/experience";
import './layout.css'

const Layout = () => {
  return (
    <div className="container">
        <div className="about"> {/* Left half */}
            <About />
        </div>
        <div className="content"> {/* Right half */}
          <Education/>
          <Experience />
          <Projects />
        </div>
    </div>
  );
};

export default Layout;
