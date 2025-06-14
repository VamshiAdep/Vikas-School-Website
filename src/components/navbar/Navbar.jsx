import React, { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import './navbar.css';
import logo from '../assets/TSSS-Logo.jpg';

const Navbar = () => {
    const [isAboutDropdownOpen, setAboutDropdownOpen] = useState(false);
    const [isAcademicsDropdownOpen, setAcademicsDropdownOpen] = useState(false);
    const [isAddmissionDropdownOpen, setAddmissionDropdownOpen] = useState(false);
    const [isWhyPEM, setWhyPEM] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const isMobile = window.innerWidth <= 768;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleAboutDropdown = () => setAboutDropdownOpen(!isAboutDropdownOpen);
    const toggleAddmissionDropdown = () => setAddmissionDropdownOpen(!isAddmissionDropdownOpen);
    const toggleWhyPEM = () => setWhyPEM(!isWhyPEM);
    const toggleAcademicsDropdown = () => setAcademicsDropdownOpen(!isAcademicsDropdownOpen);
    const toggleMenu = () => setMenuOpen(!isMenuOpen);
    const closeMenu = () => setMenuOpen(false);

    // SVG pattern for background
    const svgPattern = (
        <svg className="navbar-svg-pattern" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="rgba(255, 255, 255, 0.2)" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" opacity="0.5" />
        </svg>
    );

    return (
        <>
            <div className="admission-marquee">
                <div className="marquee-wrapper">
                    <div className="marquee">
                        Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div className="marquee">
                        Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                </div>
            </div>
            
            <div className="navbar-main-container">
                <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                    {svgPattern}
                    <div className="navbar-title">
                        <div className='image-container'>
                            <img className='image' src={logo} alt="Logo" />
                        </div>
                        <div className='text-container'>
                            <h5 href="/" className="navbar-brand">Vikas High School</h5>
                            <p className="navbar-adress">Near Fehnegaon, Kamatghar, Bhiwandi, Thane 421302</p>
                        </div>
                    </div>
                    <div className="menu-icon" onClick={toggleMenu}>
                        <div className="menu-icon-bar"></div>
                        <div className="menu-icon-bar"></div>
                        <div className="menu-icon-bar"></div>
                        <p className="menu-text">Menu</p>
                    </div>
                    <div className={`navbar-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>

                    <div className={`navbar-links ${isMenuOpen ? 'show' : ''}`}>
                        <a href="/" className="nav-link" onClick={closeMenu}>Home</a>

                        <div className="nav-link"
                            onMouseEnter={toggleAboutDropdown} onMouseLeave={toggleAboutDropdown}
                            onClick={isMobile ? toggleAboutDropdown : undefined}
                        >
                            About Us <FaChevronDown size={14} className="dropdown-icon" />
                            {isAboutDropdownOpen && (
                                <div className="dropdown-menu">
                                    <a href="#aboutus" className="dropdown-item" onClick={closeMenu}>About School</a>
                                    <a href="/management" className="dropdown-item" onClick={closeMenu}>Our Management</a>
                                    <a href="/ChairmanMessage" className="dropdown-item" onClick={closeMenu}>Chairman's Message</a>
                                    <a href="/OurPrincipalsView" className="dropdown-item" onClick={closeMenu}>Principal's Desk</a>
                                    <a href="/Facility" className="dropdown-item" onClick={closeMenu}>P.E.M. Intiatives</a>
                                    <a href="/Broucher" className="dropdown-item" onClick={closeMenu}>School Broucher</a>
                                </div>
                            )}
                        </div>

                        <div className="nav-link"
                            onMouseEnter={toggleAcademicsDropdown} onMouseLeave={toggleAcademicsDropdown}
                            onClick={isMobile ? toggleAcademicsDropdown : undefined}
                        >
                            Academics <FaChevronDown size={14} className="dropdown-icon" />
                            {isAcademicsDropdownOpen && (
                                <div className="dropdown-menu">
                                    <a href="/RightCurriculum" className="dropdown-item" onClick={closeMenu}>Curriculum</a>
                                    <a href="/Toppers" className="dropdown-item" onClick={closeMenu}>Toppers</a>
                                    <a href="#Calender" className="dropdown-item" onClick={closeMenu}>Calender</a>
                                </div>
                            )}
                        </div>

                        <div className="nav-link"
                            onMouseEnter={toggleWhyPEM} onMouseLeave={toggleWhyPEM}
                            onClick={isMobile ? toggleWhyPEM : undefined}
                        >
                            Why P.E.M. <FaChevronDown size={14} className="dropdown-icon" />
                            {isWhyPEM && (
                                <div className="dropdown-menu">
                                    <a href="/RightCurriculum" className="dropdown-item" onClick={closeMenu}>The Right Curriculum</a>
                                    <a href="/RightFaculty" className="dropdown-item" onClick={closeMenu}>The Right Faculty</a>
                                    <a href="/SchoolFacilities" className="dropdown-item" onClick={closeMenu}>The School Facilities</a>
                                    <a href="/RightCapability" className="dropdown-item" onClick={closeMenu}>The Right Capability</a>
                                </div>
                            )}
                        </div>

                        <div className="nav-link"
                            onMouseEnter={toggleAddmissionDropdown} onMouseLeave={toggleAddmissionDropdown}
                            onClick={isMobile ? toggleAddmissionDropdown : undefined}
                        >
                            Admissions <FaChevronDown size={14} className="dropdown-icon" />
                            {isAddmissionDropdownOpen && (
                                <div className="dropdown-menu">
                                    <a href="/SchoolAdmissions" className="dropdown-item" onClick={closeMenu}>Addmissions For Schools 2025-26</a>
                                </div>
                            )}
                        </div>
                        <a href="/Blog" className="nav-link" onClick={closeMenu}>Blogs</a>
                        <a href="/ContactUs" className="nav-link" onClick={closeMenu}>Contact Us</a>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;