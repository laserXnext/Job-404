import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <img src='./src/assets/crisis.png' alt="Logo" className="footer-logo"/> 
            <div className="footer-section">
                <div className="footer-service">
                    <h3>Our Services</h3>
                    <ul>
                        <li>Job Search</li>
                        <li>Market Insights</li>
                        <li>Personalized Guidance</li>
                        <li>Skill Recommendations</li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to ="/">Home</Link></li>
                        <li><Link to ="#home">About Us</Link></li>
                        <li><Link to ="#home">Jobs</Link></li>
                        <li><Link to ="#home">Courses</Link></li>
                        <li><Link to ="#home">Services</Link></li>
                    </ul>
                </div>
                <div className="footer-socila-media">
                    <h3>Follow Us</h3>
                    <ul className="social-media-links">
                        <li><i className="uil uil-facebook facebook"></i></li>
                        <li><i className="uil uil-linkedin linkedin"></i></li>
                        <li><i className="uil uil-whatsapp whatsapp"></i></li>
                    </ul>
                </div>
            </div>
            <div className="footer-copright">
                <p>Copyright 2025. All rights reserved by laserX.</p>
            </div>  
        </footer>
    );
};

export default Footer;
