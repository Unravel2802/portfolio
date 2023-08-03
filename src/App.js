import React from 'react';
import Navbar from './components/Navbar';
import About from './components/about';
import Contact from './components/contact';
import Projects from './components/projects';

function App(){
	return (
		<div>
			{/* <Navbar /> */}
			<About />
			<Contact />
			<Projects />
		</div>  
	)
}


export default App;