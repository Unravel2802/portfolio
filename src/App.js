import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/home';
import Contact from './components/contact';
import Projects from './components/projects';

function App(){
	return (
		<div>
			<Navbar />
			<Home />
			<Contact />
			<Projects />
		</div>  
	)
}


export default App;