import React from 'react';

const Footer = () => {
    return (
        <footer className="footer section">
            <div className="footer-container container d-grid">
                <div className="company-data">
                    <a href="/index.html">
                        <h2 className="logo">NewsDrop</h2>    
                    </a>
                    <p className="company-description">
                        Get the Latest News on the go.
                    </p>
                     <ul className="list social-media">
                        <li className="list-item">
                            <a href="#" className="list-link">
                                <i className="ri-instagram-line"></i>
                            </a>
                            <a href="#" className="list-link">
                                <i className="ri-facebook-circle-line"></i>
                            </a>
                            <a href="#" className="list-link">
                                <i className="ri-twitter-line"></i>
                            </a>
                            <a href="#" className="list-link">
                                <i className="ri-pinterest-line"></i>
                            </a>
                        </li>
                    </ul>

                    <span className="copyright-notice">&copy; 2025 NewsDrop. All rights reserved.</span>
                </div>

                <div>
                    <h6 className="title footer-title">Navigation</h6>
                    <ul className='list footer-list'>
                        <li className='list-item'>
                            <a href="#" className='list-link current'>Home</a>
                        </li>
                        <li className='list-item'>
                            <a href="#" className='list-link current'>Blogs</a>
                        </li>
                        <li className='list-item'>
                            <a href="#" className='list-link current'>Categories</a>
                        </li>
                        <li className='list-item'>
                            <a href="#" className='list-link current'>Sign In</a>
                        </li>
                        <li className='list-item'>
                            <a href="#" className='list-link current'>Sign Up</a>
                        </li>
                    </ul>
                </div>

                 <div>
                    <h6 className="title footer-title">Categories</h6>
                    <ul className="list footer-list">
                        <li className="list-item">
                            <a href="/html/travel.html" className="list-link">Travel</a>
                        </li>
                        <li className="list-item">
                            <a href="/html/tech.html" className="list-link">Technology</a>
                        </li>
                        <li className="list-item">
                            <a href="/html/basketball.html" className="list-link">Basketball</a>
                        </li>
                        <li className="list-item">
                            <a href="/html/movies.html" className="list-link">Movies</a>
                        </li>
                        <li className="list-item">
                            <a href="/html/football.html" className="list-link">Football</a>
                        </li>
                        <li className="list-item">
                            <a href="/html/fitness.html" className="list-link">Fitness</a>
                        </li>
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