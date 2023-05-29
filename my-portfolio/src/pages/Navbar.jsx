// src/pages/Navbar.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

// Social media icons
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Stuti Agrawal</h1>
            <div className="links">
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/experience">Experience</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <a href="https://www.linkedin.com/in/stuti-agrawal-50a669217/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={24} />
                </a>
                <a href="https://github.com/stuti-agrawal" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} />
                </a>
                
            </div>
        </nav>
    );
};

export default Navbar;

