import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Home from './pages/home/home';
import Education from './pages/education/education';
import Experience from './pages/experience/experience';
import Projects from './pages/projects/projects';
import Contact from './pages/contact/contact';

function App() {
	return (
    <div class="min-h-screen bg-sky-200">
		<Router>
			<Navbar />
			<Routes>
				<Route path='/home'  element={<Home />} />
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
