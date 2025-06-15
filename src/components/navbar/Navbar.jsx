import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css';
import logo from '../assets/TSSS-Logo.jpg';

const Navbar = () => {
  const [isAboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [isAcademicsDropdownOpen, setAcademicsDropdownOpen] = useState(false);
  const [isAddmissionDropdownOpen, setAddmissionDropdownOpen] = useState(false);
  const [isWhyPEM, setWhyPEM] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        !event.target.closest('.navbar-links') &&
        !event.target.closest('.menu-toggle')
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

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
          </div>
          <div className="marquee">
            Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Admission Open for 2025-26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>
      </div>

      {isMobileMenuOpen && <div className="mobile-backdrop"></div>}

      <div className="navbar-main-container">
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
          {svgPattern}
          <div className="navbar-title">
            <div className="image-container">
              <img className="image" src={logo} alt="Logo" />
            </div>
            <div className="text-container">
              <h5 className="navbar-brand">Vikas English Medium School</h5>
              <p className="navbar-adress">Near Fehnegaon, Kamatghar, Bhiwandi, Thane 421302</p>
            </div>
          </div>

          <button className="menu-toggle" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <a href="/" className="nav-link">Home</a>

            <div className="nav-link" onClick={toggleAboutDropdown}>
              About Us <FaChevronDown size={14} className="dropdown-icon" />
              <div className={`dropdown-menu ${isAboutDropdownOpen ? 'active' : ''}`}>
                <a href="#aboutus" className="dropdown-item">About School</a>
                <a href="/management" className="dropdown-item">Our Management</a>
                <a href="/ChairmanMessage" className="dropdown-item">Chairman's Message</a>
                <a href="/OurPrincipalsView" className="dropdown-item">Principal's Desk</a>
                <a href="/Facility" className="dropdown-item">Vikas Initiatives</a>
                <a href="/Broucher" className="dropdown-item">School Brochure</a>
              </div>
            </div>

            <div className="nav-link" onClick={toggleAcademicsDropdown}>
              Academics <FaChevronDown size={14} className="dropdown-icon" />
              <div className={`dropdown-menu ${isAcademicsDropdownOpen ? 'active' : ''}`}>
                <a href="/RightCurriculum" className="dropdown-item">Curriculum</a>
                <a href="/Toppers" className="dropdown-item">Toppers</a>
                <a href="#Calender" className="dropdown-item">Calendar</a>
              </div>
            </div>

            <div className="nav-link" onClick={toggleWhyPEM}>
              Why Vikas <FaChevronDown size={14} className="dropdown-icon" />
              <div className={`dropdown-menu ${isWhyPEM ? 'active' : ''}`}>
                <a href="/RightCurriculum" className="dropdown-item">The Right Curriculum</a>
                <a href="/RightFaculty" className="dropdown-item">The Right Faculty</a>
                <a href="/SchoolFacilities" className="dropdown-item">The School Facilities</a>
                <a href="/RightCapability" className="dropdown-item">The Right Capability</a>
              </div>
            </div>

            <div className="nav-link" onClick={toggleAddmissionDropdown}>
              Admissions <FaChevronDown size={14} className="dropdown-icon" />
              <div className={`dropdown-menu ${isAddmissionDropdownOpen ? 'active' : ''}`}>
                <a href="/SchoolAdmissions" className="dropdown-item">Admissions For Schools 2025-26</a>
              </div>
            </div>

            <a href="/Blog" className="nav-link">Blogs</a>
            <a href="/ContactUs" className="nav-link">Contact Us</a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
