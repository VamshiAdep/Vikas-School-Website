import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/Home';
import OurManagement from './components/OurManagment/OurManagment';
import Principalreview from './components/principalreview/Principalreview';
import { ChairmanMessage } from './components/chairmanMessage/ChairmanMessage';
import CollegeAdmissions from './components/admissions/CollegeAdmissions';
import JrCollegeAdmissions from './components/admissions/JrCollegeAdmissions';
import SchoolAdmissions from './components/admissions/SchoolAdmissions';
import Facility from './components/facility/Facility';
import BlogPage from './components/blog/BlogPage';
import RightCurriculum from './components/curriculum/RightCurriculum';
import RightFaculty from './components/faculty/RightFaculty';
import SchoolFacilities from './components/SchoolFacilities/SchoolFacilities';
import RightCapability from './components/RightCapability/RightCapability';
import Toppers from './components/toppers/Toppers';
import ContactUs from './components/contactUs/ContactUs';
import AnimatedBanner from './components/AnimatedBanner';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<div data-aos="fade-up"><Home /></div>} />
        <Route path="/management" element={<div data-aos="fade-up"><OurManagement /></div>} />
        <Route path="/OurPrincipalsView" element={<div data-aos="fade-up"><Principalreview /></div>} />
        <Route path="/ChairmanMessage" element={<div data-aos="fade-up"><ChairmanMessage /></div>} />
        <Route path="/SchoolAdmissions" element={<div data-aos="fade-up"><SchoolAdmissions /></div>} />
        <Route path="/JrCollegeAdmissions" element={<div data-aos="fade-up"><JrCollegeAdmissions /></div>} />
        <Route path="/CollegeAdmissions" element={<div data-aos="fade-up"><CollegeAdmissions /></div>} />
        <Route path="/Facility" element={<div data-aos="fade-up"><Facility /></div>} />
        <Route path="/Blog" element={<div data-aos="fade-up"><BlogPage /></div>} />
        <Route path="/ContactUs" element={<div data-aos="fade-up"><ContactUs /></div>} />
        <Route path="/RightCurriculum" element={<div data-aos="fade-up"><RightCurriculum /></div>} />
        <Route path="/RightFaculty" element={<div data-aos="fade-up"><RightFaculty /></div>} />
        <Route path="/SchoolFacilities" element={<div data-aos="fade-up"><SchoolFacilities /></div>} />
        <Route path="/RightCapability" element={<div data-aos="fade-up"><RightCapability /></div>} />
        <Route path="/Toppers" element={<div data-aos="fade-up"><Toppers /></div>} />
      </Routes>
      <AnimatedBanner /><br/><br/>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
