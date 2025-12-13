import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ categories = [] }) => {
    return (
        <footer className="footer section">
            <div className="footer-container container d-grid">
                <div className="company-data">
                    <Link to="/">
                        <h2 className="logo">NewsDrop</h2>    
                    </Link>
                    <p className="company-description">
                        Get the Latest News on the go.
                    </p>
                     <ul className="list social-media">
                        <li className="list-item">
                            <Link to="#" className="list-link">
                                <i className="ri-instagram-line"></i>
                            </Link>
                            <Link to="#" className="list-link">
                                <i className="ri-facebook-circle-line"></i>
                            </Link>
                            <Link  to="#" className="list-link">
                                <i className="ri-twitter-line"></i>
                            </Link>
                            <Link to="#" className="list-link">
                                <i className="ri-pinterest-line"></i>
                            </Link>
                        </li>
                    </ul>

                    <span className="copyright-notice">&copy; 2025 NewsDrop. All rights reserved.</span>
                </div>

                <div>
                    <h6 className="title footer-title">Navigation</h6>
                    <ul className='list footer-list'>
                        <li className='list-item'>
                            <Link to="#" className='list-link current'>Home</Link>
                        </li>
                        <li className='list-item'>
                            <Link to="#" className='list-link current'>Blogs</Link>
                        </li>
                        <li className='list-item'>
                            <Link to="#" className='list-link current'>Categories</Link>
                        </li>
                        <li className='list-item'>
                            <Link to="#" className='list-link current'>Sign In</Link>
                        </li>
                        <li className='list-item'>
                            <Link to="#" className='list-link current'>Sign Up</Link>
                        </li>
                    </ul>
                </div>

                 <div>
                    <h6 className="title footer-title">Categories</h6>
                    <ul className="list footer-list categories-list">
                        {categories.map((category) => (
                            <li className="list-item" key={category.slug || category.name}>
                                <Link to={`/category/${category.slug}`} className="list-link">{category.name}</Link>
                            </li>

                        ))}
                    </ul>
                </div>

                {/* Replace with download call actions playstore*/}
                <div>
                    <h6 className="title footer-title">Download App</h6>
                    <div className="footer-logo">
                        {/* Link to google playstore though paid add */}
                        <img src="/assets/playstore.png" alt="Google Play Store" className="footer-image"/>
                        <p className="footer-image-description">Available</p>
                        <img src="/assets/appstore.png" alt="Apple Store" className="footer-image"/>
                        <p className="footer-image-description">Coming Soon</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;