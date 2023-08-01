import './App.css';
import React from 'react';
import { Nav, NavLink, Bars, NavMenu } from "./components/NavbarElement";
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages/home'
import Education from './pages/education';
import Experience from './pages/experience';
import Projects from './pages/projects';
import Contact from './pages/contact';
import NavBar from './components';

export default function App() {
  return (
      <Router>
        <NavBar>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/education' element={<Education />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </NavBar>
      </Router>
  );
}

