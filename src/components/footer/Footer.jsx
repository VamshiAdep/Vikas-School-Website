import React from "react";
import "./footer.css";
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            {/* Decorative Wave */}
            <div className="footer-wave">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path
                        d="M0,0V12C50,20,100,15,150,12C200,9,250,11,300,12C350,13,400,12,450,10C500,8,550,6,600,8C650,10,700,16,750,16C800,16,850,10,900,8C950,6,1000,8,1050,10C1100,12,1150,14,1200,12V0Z"
                        fill="#1a1a1a"
                    ></path>
                </svg>
            </div>

            {/* Footer Content */}
            <div className="footer-container">
                {/* About Section */}
                <div className="footer-about">
                    <h2 className="footer-title">Vikas English Medium School</h2>
                    <p className="footer-text">
                        At Vikas English Medium School, we blend traditional values with
                        modern teaching to nurture young minds from Kindergarten to Grade
                        10, building confidence, knowledge, and character for the future.
                    </p>
                    <div className="social-icons">
                        <a href="#" className="icon-circle">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="icon-circle">
                            <FaInstagram />
                        </a>
                        <a href="#" className="icon-circle">
                            <FaYoutube />
                        </a>
                        <a href="#" className="icon-circle">
                            <FaTwitter />
                        </a>
                    </div>
                </div>

                {/* Links */}
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#aboutus">About Us</a></li>
                        <li><a href="/SchoolAdmissions">Admissions</a></li>
                        <li><a href="/RightCurriculum">Curriculum</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <ul>
                        <li>
                            <FaMapMarkerAlt className="footer-icon" />
                            Near Akhila Padmashali Samaj Hall, Padmanagar, Bhiwandi, Thane
                            421302
                        </li>
                        <li>
                            <FaEnvelope className="footer-icon" />
                            vikasschool236@gmail.com
                        </li>
                        <li>
                            <FaPhoneAlt className="footer-icon" />
                            +91 80877 84766
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom */}
            <div className="footer-bottom">
                © {new Date().getFullYear()} Vikas English Medium School | All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;
