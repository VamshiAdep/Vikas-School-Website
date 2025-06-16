import React from 'react';
import './footer.css';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wave">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V12C50,20,100,15,150,12C200,9,250,11,300,12C350,13,400,12,450,10C500,8,550,6,600,8C650,10,700,16,750,16C800,16,850,10,900,8C950,6,1000,8,1050,10C1100,12,1150,14,1200,12V0Z" fill="#1a1a1a"></path>
                </svg>
            </div>

            <div className="footer-content">
                <div className="footer-section-about">
                    <h1>Vikas English Medium School</h1>
                    <p>
                        At Vikas English Medium School, we seamlessly blend time-honored values with modern educational practices, empowering our students to excel in a dynamic world while staying deeply rooted in our rich cultural heritage.
                    </p>
                    <div className="social-icons">
                        <a href="#" className="icon-circle"><FaFacebookF /></a>
                        <a href="#" className="icon-circle"><FaInstagram /></a>
                        <a href="#" className="icon-circle"><FaYoutube /></a>
                        <a href="#" className="icon-circle"><FaTwitter /></a>
                    </div>
                </div>

                <div className='footer-section-container'>
                    <div className="footer-section">
                        <h3>Useful Links</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="#aboutus">About Us</a></li>
                            <li><a href="/SchoolAdmissions">Admissions</a></li>
                            <li><a href="/RightCurriculum">Curriculum</a></li>
                        </ul>
                    </div>

                    <div className="footer-section contact">
                        <h3>Contact Us</h3>
                        <ul>
                            <li>
                                <span className="icon-circle"><FaMapMarkerAlt size={'20px'} /></span>
                                Near Akhila Padmashali samaj Hall, Padmanagar, Bhiwandi, Thane 421302
                            </li>
                            <li>
                                <span className="icon-circle"><FaEnvelope size={'20px'} /></span>
                                vikasschool123@gmail.com
                            </li>
                            <li>
                                <span className="icon-circle"><FaPhoneAlt size={'20px'} /></span>
                                7887681816 / 8655465553 / 8625025367
                            </li>
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