import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Home from './pages/home';
import Education from './pages/education';
import Experience from './pages/experience';
import Projects from './pages/projects';
import Contact from './pages/contact';

function App() {
	return (
    <div>
		<Router>
			<Navbar />
			<Routes>
				<Route exact path='/'  element={<Home />} />
				<Route path='/experience' element={<Experience />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/education' element={<Education />} />
				<Route path='/projects' element={<Projects />} />
			</Routes>
		</Router>
    </div>
	);
}

export default App;
