import React from 'react';
import './footer.css';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wave" />

            <div className="footer-content">
              <div className='w-30 h-20'>
                <img  src="src/components/assets/TSSS-Logo.jpg" alt="" />
              </div>
                <div className="footer-section-about">
                    <h1>P.E.M High school & Jr College</h1>
                    <p>
                        At P.E.M High School & Jr College, we seamlessly blend time-honored values with modern educational practices, empowering our students to excel in a dynamic world while staying deeply rooted in our rich cultural heritage.
                    </p>
                    <div className="social-icons">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaYoutube /></a>
                        <a href="#"><FaTwitter /></a>
                    </div>
                </div>

                <div className='footer-section-container'>

                    <div className="footer-section">
                        <h3>Useful Links</h3>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#aboutus">About Us</a></li>
                            <li><a href="#">Admissions</a></li>
                            <li><a href="#">Copyright Policy</a></li>
                        </ul>
                    </div>

                    <div className="footer-section contact">
                        <h3>Contact Us</h3>
                        <ul>
                            <li><FaMapMarkerAlt  size={'20px'}/> Fhenegao Kamatghar , Bhiwandi, Dist Thane, Maharashtra 421302</li>
                            <li><FaEnvelope size={'20px'}/> pemhighschool&jrcollege@gm.com</li>
                            <li><FaPhoneAlt size={'20px'}/> 7887681816 / 8655465553 / 8625025367</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                © 2025 P.E.M High school & Jr College | All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;