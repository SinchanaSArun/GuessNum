
import React, { useState } from 'react';
import './navbar.css';
import Register from './register';
import logo from '../assets/GuessNum logo.png'; 
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
      <div className="logo-container">
                <img src={logo} alt="Logo" className="logo-img" />
                <div className="logo-text">GUESSNUM</div>
            </div>
            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
              <button>
              <Link to="/register">Register</Link>
                </button>
                    <button>
                    <Link to="/login">Login</Link>
                    </button>
                
            </ul>
            <div className="hamburger" onClick={toggleMenu}>
                &#9776;
            </div>
        </nav>
    );
};


export default Navbar;
