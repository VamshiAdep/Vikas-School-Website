import React from 'react';
import './RightFaculty.css';
import facultyGroupImage from '../assets/blogImages/Dahihandi.jpeg';
import secondaryFaculty from '../assets/schoolImages/secondaryFaculty.jpg';
import collegeFaculty from '../assets/schoolImages/collegeFaculty.png';

const RightFaculty = () => {
    return (
        <section className="faculty-section">
            <h1 className="faculty-title">Our Esteemed Faculty</h1>

            {/* Primary Section */}
            <div className="faculty-content">
                <img src={facultyGroupImage} alt="Primary Faculty Group" className="faculty-group-image" />
                <div className="faculty-description">
                    <h2 className="faculty-subtitle">Primary Section</h2>
                    <p>
                        The Primary Section faculty at P.E.M. High School focuses on nurturing young minds with care and creativity. They build essential skills and inspire curiosity, laying a solid foundation for lifelong learning.
                    </p>
                </div>
            </div>

            {/* Secondary Section */}
            <div className="faculty-content">
                <img src={secondaryFaculty} alt="Secondary Faculty Group" className="faculty-group-image" />
                <div className="faculty-description">
                    <h2 className="faculty-subtitle">Secondary Section</h2>
                    <p>
                        Our Secondary Section faculty at P.E.M. High School are experts in their respective fields and dedicated to building strong academic foundations. They guide students through the crucial secondary years, helping them excel in their SSC board examinations and beyond.
                    </p>
                </div>
            </div>

            {/* College Section */}
            <div className="faculty-content">
                <img src={collegeFaculty} alt="College Faculty Group" className="faculty-group-image" />
                <div className="faculty-description">
                    <h2 className="faculty-subtitle">Degree College Section</h2>
                    <p>
                        At P.E.M. Degree College, our dedicated faculty bring their expertise and experience to higher education, preparing students for university success and professional careers. They mentor and motivate students, fostering academic excellence and personal growth.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default RightFaculty;
