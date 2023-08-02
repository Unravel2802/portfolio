import React from 'react';
import { Link, Element } from 'react-scroll'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Home from './pages/home/home';
import Education from './pages/education/education';
import Experience from './pages/experience/experience';
import Projects from './pages/projects/projects';
import Contact from './pages/contact/contact';


export default function App(){
	return (
		<div className='bg-sky-200'>
			{/* <nav>
				<ul>
					<li>
						<Link to='home' spy={true} smooth={true}>
							Home Page
						</Link>
					</li>

					<li>
						<Link to='education' spy={true} smooth={true}>
							Education Page
						</Link>
					</li>

					<li>
						<Link to='experience' spy={true} smooth={true}>
							Experience Page
						</Link>
					</li>
					
					<li>
						<Link to='projects' spy={true} smooth={true}>
							Projects Page
						</Link>
					</li>

					<li>
						<Link to='contact' spy={true} smooth={true}>
							Contact Page
						</Link>
					</li>
				</ul>
			</nav> */}
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

			<div className='page bg-red-500' id ='Home Page'>
				<Element name='Home Page'>
					<h1>Home Page</h1>
				</Element>
			</div>

			<div className='page' id ='Education Page'>
				<Element name='Education Page'>
					<h1>Education Page</h1>
				</Element>
			</div>

			<div className='page' id ='Experience Page'>
				<Element name='Experience Page'>
					<h1>Experience Page</h1>
				</Element>
			</div>

			<div className='page' id ='Projects Page'>
				<Element name='Projects Page'>
					<h1>Projects Page</h1>
				</Element>
			</div>

			<div className='page' id ='Contact Page'>
				<Element name='Contact Page'>
					<h1>Contact Page</h1>
				</Element>
		</div>	
		</div> 
	)
}

// function App() {

// 	return (
//     <div class="min-h-screen bg-sky-200">
// 		{/* <Router>
// 			<Navbar />
// 			<Routes>
// 				<Route path='/home'  element={<Home />} />
// 				<Route path='/experience' element={<Experience />} />
// 				<Route path='/contact' element={<Contact />} />
// 				<Route path='/education' element={<Education />} />
// 				<Route path='/projects' element={<Projects />} />
// 			</Routes>
// 		</Router> */}
// 		<nav className='fixed top-0 left-0 w-full p-4 text-black'>
// 			<ul className='="flex justify-center space-x-4'>
// 				<li>
// 					<Link to='./pages/home/home' spy={true} smooth={true}>
// 					</Link>
// 				</li>
// 				<li>
// 					<Link to='./pages/education/education' spy={true} smooth={true}>
// 					</Link>
// 				</li>
// 				<li>
// 					<Link to='./pages/experience/experience' spy={true} smooth={true}>
// 					</Link>
// 				</li>
// 				<li>
// 					<Link to='./pages/projects/projects' spy={true} smooth={true}>
// 					</Link>
// 				</li>
// 				<li>
// 					<Link to='./pages/contact/contact' spy={true} smooth={true}>
// 					</Link>
// 				</li>
					
// 			</ul>
// 		</nav>

// 			<div className="page bg-gray-200" id="page2">
// 			<Element name="page2">
// 			<h1 className="text-4xl font-bold text-center mt-20">Page 2</h1>
// 			<p className="text-center mt-4">Content for Page 2</p>
// 			</Element>
// 		</div>

// 		<div className="page" id="page3">
// 			<Element name="page3">
// 			<h1 className="text-4xl font-bold text-center mt-20">Page 3</h1>
// 			<p className="text-center mt-4">Content for Page 3</p>
// 			</Element>
// 		</div>

// 		<div className="page bg-gray-200" id="page4">
// 			<Element name="page4">
// 			<h1 className="text-4xl font-bold text-center mt-20">Page 4</h1>
// 			<p className="text-center mt-4">Content for Page 4</p>
// 			</Element>
// 		</div>
//     </div>
//     	//<img src="/home.svg" alt="Home" />
// 	);
// }

// export default App;

const app = () => {
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full p-4 bg-gray-800 text-white">
        <ul className="flex justify-center space-x-4">
          <li>
            <Link to="page1" spy={true} smooth={true}>
              Page 1
            </Link>
          </li>
          <li>
            <Link to="page2" spy={true} smooth={true}>
              Page 2
            </Link>
          </li>
          <li>
            <Link to="page3" spy={true} smooth={true}>
              Page 3
            </Link>
          </li>
          <li>
            <Link to="page4" spy={true} smooth={true}>
              Page 4
            </Link>
          </li>
		  <li>
            <Link to="page5" spy={true} smooth={true}>
              Page 5
            </Link>
          </li>
        </ul>
      </nav>

      <div className="page" id="page1">
        <Element name="page1">
          <h1 className="text-4xl font-bold text-center mt-20">Page 1</h1>
          <p className="text-center mt-4">Content for Page 1</p>
        </Element>
      </div>

      <div className="page bg-gray-200" id="page2">
        <Element name="page2">
          <h1 className="text-4xl font-bold text-center mt-20">Page 2</h1>
          <p className="text-center mt-4">Content for Page 2</p>
        </Element>
      </div>

      <div className="page" id="page3">
        <Element name="page3">
          <h1 className="text-4xl font-bold text-center mt-20">Page 3</h1>
          <p className="text-center mt-4">Content for Page 3</p>
        </Element>
      </div>

      <div className="page bg-gray-200" id="page4">
        <Element name="page4">
          <h1 className="text-4xl font-bold text-center mt-20">Page 4</h1>
          <p className="text-center mt-4">Content for Page 4</p>
        </Element>
      </div>

	  <div className="page bg-gray-200" id="page5">
        <Element name="page5">
          <h1 className="text-4xl font-bold text-center mt-20">Page 5</h1>
          <p className="text-center mt-4">Content for Page 5</p>
        </Element>
      </div>
    </div>
  );
};

// export default app;
