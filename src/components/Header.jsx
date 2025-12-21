import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Receive toggleTheme and isLightMode as props
const Header = ({ toggleTheme, isLightMode}) => {

    const { isAuthenticated, logout, user } = useAuth(); 
    const navigate = useNavigate();

    const handleLogout =() => {
        logout();
        navigate('/');
    };

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
                            <Link to="/about" className='list-link current'>About</Link>
                        </li>
                         <li className='list-item'>
                            <Link to="/contact" className='list-link current'>Contact Us</Link>
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
                    <div className="list-item-buttons">
                          {isAuthenticated ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem'}}>
                            <Link to="/profile" className="list-link" style={{ textTransform: 'capitalize', fontWeight: 'bold' }}>
                                {user?.username}
                            </Link>
                            <button className="btn fancy-border" onClick={handleLogout}>Log Out</button>

                        </div>   
                         ) : (
                            <div className="auth-group">
                            <Link to="/login" className="btn fancy-border">Log In</Link>
                            <Link to="/signup" className="btn fancy-border">Sign Up</Link>
                            </div>
                         )}

                    </div>
                  
                </div>
            </nav>
        </header>
    );
};

export default Header;