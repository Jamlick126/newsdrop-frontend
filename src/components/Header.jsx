import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Receive toggleTheme and isLightMode as props
const Header = ({ toggleTheme, isLightMode}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to handle opening and closing menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <header className='header' id='header'>
            <nav className='navbar container'>
                <Link to="/">
                <h2 className='logo'>NewsDrop</h2>
                </Link>
                <div className={`menu ${isMenuOpen ? 'activated' : ''}`} id='menu' onClick={() => setIsMenuOpen(false)}>
                    <ul className='list'>
                        <li className='list-item'>
                            <Link to="/" className='list-link current'>Home</Link>
                        </li>
                        <li className='list-item'>
                            <Link to="/#older-posts" className='list-link current'>Blogs</Link>
                        </li>
                        <li className='list-item'>
                            <Link to="/#categories-section" className='list-link current'>Categories</Link>
                        </li>
                         <li className='list-item'>
                            <Link to="/#categories-section" className='list-link current'>About</Link>
                        </li>
                        
                    </ul>
                </div>
                <div className='list list-right'>
                    <button className='btn place-items-center' id='theme-toggle-btn' onClick={toggleTheme}>
                        <i className={`ri-sun-line sun-icon ${isLightMode ? 'active' : ''}`}></i>
                        <i className={`ri-moon-line moon-icon ${isLightMode ? '' : 'active'}`}></i>
                    </button>
                    {/* -- Menu toggle button -- */}
                    <button className={`btn place-items-center menu-toggle-icon ${isMenuOpen ? 'activated' : ''}`} id='menu-toggle-btn' onClick={toggleMenu}>
                        <i className="ri-menu-3-line open-menu-icon"></i>
                         <i className="ri-close-line close-menu-icon"></i>
                    </button>
                    <ul className='list'>
                        <li className='list-item list-right screen-sm-hidden'>
                            <Link to="/login" className='list-link'>Sign In</Link>
                        </li>
                        <li className='list-item list-right screen-sm-hidden'>
                            <Link to="/signup" className='list-link'>Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;