import React, { useState } from 'react';

// Receive toggleTheme and isLightMode as props
const Header = ({ toggleTheme, isLightMode}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className='header' id='header'>
            <nav className='navbar container'>
                <a href="/logo.html">
                <h2 className='logo'>NewsDrop</h2>
                </a>
                <div className={`menu ${isMenuOpen ? 'open' : ''}`} id='menu'>
                    <ul className='list'>
                        <li className='list-item'>
                            <a href="#" className='list-link current'>Home</a>
                        </li>
                        <li className='list-item'>
                            <a href="#" className='list-link current'>Blogs</a>
                        </li>
                        <li className='list-item'>
                            <a href="#" className='list-link current'>Categories</a>
                        </li>
                    </ul>
                </div>
                <div className='list list-right'>
                    <ul className='list'>
                        <li className='list-item list-right screen-sm-hidden'>
                            <a href="/login.html" className='list-link'>Sign In</a>
                        </li>
                        <li className='list-item list-right screen-sm-hidden'>
                            <a href="/signup.html" className='list-link'>Sign Up</a>
                        </li>
                    </ul>
                    <button className='btn place-items-center' id='theme-toggle-btn' onClick={toggleTheme}>
                        <i className={`ri-sun-line sun-icon ${isLightMode ? 'active' : ''}`}></i>
                        <i className={`ri-moon-line moon-icon ${isLightMode ? '' : 'active'}`}></i>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;