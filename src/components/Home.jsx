import React from 'react'
import Hero from './heroSection/Hero'
import OurManagement from './OurManagment/OurManagment'
import AboutUs from './aaboutUs/AboutUs'
import SchoolGallery from './schoolGallery/SchoolGallery'
import ContactUs from './contactUs/ContactUs'
import StatsSection from './StatsSection'


const Home = () => {
    return (
        <div>
            <Hero />
            <StatsSection />
            {/* <OurManagement /> */}
            <div id="aboutus">
                <AboutUs />
            </div>
            <div id="SchoolGallery">
                <SchoolGallery />
            </div>
            <div id="ContactUs">
                <ContactUs />
            </div>
            <div>

            </div>
        </div>
    )
}

export default Home
