import React, { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import './navbar.css';
import logo from '../assets/TSSS-Logo.jpg';

const Navbar = () => {
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);
    const [isAdmissionsOpen, setIsAdmissionsOpen] = useState(false);
    const [isWhyPemOpen, setIsWhyPemOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        const handleScroll = () => setIsScrolled(window.scrollY > 10);

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

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

    const renderDropdown = (isOpen, items) =>
        isOpen && (
            <div className="dropdown-menu">
                {items.map(({ href, label }) => (
                    <a key={href} href={href} className="dropdown-item" onClick={closeMenu}>
                        {label}
                    </a>
                ))}
            </div>
        );

    return (
        <>
            {/* Admission Banner */}
            <div className="admission-marquee">
                <div className="marquee-wrapper">
                    <div className="marquee">
                        {Array(8).fill('Admission Open for 2025-26').join('     ')}
                    </div>
                    <div className="marquee">
                        {Array(8).fill('Admission Open for 2025-26').join('     ')}
                    </div>
                </div>
            </div>

            {/* Navbar */}
            <div className="navbar-main-container">
                <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                    {svgPattern}
                    <div className="navbar-title">
                        <div className="image-container">
                            <img className="image" src={logo} alt="Logo" />
                        </div>
                        <div className="text-container">
                            <h5 className="navbar-brand">Vikas English Medium School</h5>
                            <p className="navbar-adress">Near Akihla Padmashali Samaj Hall, Padmanagar, Bhiwandi, Thane 421302</p>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="menu-icon" onClick={toggleMenu}>
                        <div className="menu-icon-bar" />
                        <div className="menu-icon-bar" />
                        <div className="menu-icon-bar" />
                        <p className="menu-text">Menu</p>
                    </div>

                    {/* Overlay for mobile */}
                    <div className={`navbar-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu} />

                    {/* Navbar Links */}
                    <div className={`navbar-links ${isMenuOpen ? 'show' : ''}`}>
                        <a href="/" className="nav-link" onClick={closeMenu}>Home</a>

                        {/* About Us Dropdown */}
                        <div
                            className="nav-link"
                            onMouseEnter={() => !isMobile && setIsAboutOpen(true)}
                            onMouseLeave={() => !isMobile && setIsAboutOpen(false)}
                            onClick={() => isMobile && setIsAboutOpen(prev => !prev)}
                        >
                            About Us <FaChevronDown size={14} className="dropdown-icon" />
                            {renderDropdown(isAboutOpen, [
                                { href: '#aboutus', label: 'About School' },
                                { href: '/management', label: 'Our Management' },
                                { href: '/ChairmanMessage', label: "Chairman's Message" },
                                { href: '/OurPrincipalsView', label: "Principal's Desk" },
                                { href: '/Facility', label: 'P.E.M. Initiatives' },
                                { href: '/Broucher', label: 'School Broucher' }
                            ])}
                        </div>

                        {/* Academics Dropdown */}
                        <div
                            className="nav-link"
                            onMouseEnter={() => !isMobile && setIsAcademicsOpen(true)}
                            onMouseLeave={() => !isMobile && setIsAcademicsOpen(false)}
                            onClick={() => isMobile && setIsAcademicsOpen(prev => !prev)}
                        >
                            Academics <FaChevronDown size={14} className="dropdown-icon" />
                            {renderDropdown(isAcademicsOpen, [
                                { href: '/RightCurriculum', label: 'Curriculum' },
                                { href: '/Toppers', label: 'Toppers' },
                                { href: '#Calender', label: 'Calendar' }
                            ])}
                        </div>

                        {/* Why PEM Dropdown */}
                        <div
                            className="nav-link"
                            onMouseEnter={() => !isMobile && setIsWhyPemOpen(true)}
                            onMouseLeave={() => !isMobile && setIsWhyPemOpen(false)}
                            onClick={() => isMobile && setIsWhyPemOpen(prev => !prev)}
                        >
                            Why P.E.M. <FaChevronDown size={14} className="dropdown-icon" />
                            {renderDropdown(isWhyPemOpen, [
                                { href: '/RightCurriculum', label: 'The Right Curriculum' },
                                { href: '/RightFaculty', label: 'The Right Faculty' },
                                { href: '/SchoolFacilities', label: 'The School Facilities' },
                                { href: '/RightCapability', label: 'The Right Capability' }
                            ])}
                        </div>

                        {/* Admissions Dropdown */}
                        <div
                            className="nav-link"
                            onMouseEnter={() => !isMobile && setIsAdmissionsOpen(true)}
                            onMouseLeave={() => !isMobile && setIsAdmissionsOpen(false)}
                            onClick={() => isMobile && setIsAdmissionsOpen(prev => !prev)}
                        >
                            Admissions <FaChevronDown size={14} className="dropdown-icon" />
                            {renderDropdown(isAdmissionsOpen, [
                                { href: '/SchoolAdmissions', label: 'Admissions For Schools 2025-26' }
                            ])}
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
