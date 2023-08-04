import React from "react";
import Navbar from './components/Navbar';
import About from './components/about';
import Contact from './components/contact';
import Projects from './components/projects';
import './layout.css'

const Layout = () => {
  return (
    <div className="container">
        <div className="about"> {/* Left half */}
            <About />
        </div>
        <div className="content"> {/* Right half */}
          <Projects />
          <Contact />
        </div>
    </div>
  );
};

export default Layout;
