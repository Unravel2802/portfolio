import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import banner from './images/banner.png'

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='banner'>
                    <img src={banner} alt='banner' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#education' onClick={closeMenu}>Education</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#Experience' onClick={closeMenu}>Experience</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#Projects' onClick={closeMenu}>Projects</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#Contact' onClick={closeMenu}>Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar