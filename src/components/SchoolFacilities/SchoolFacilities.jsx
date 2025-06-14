import React from 'react';
import './SchoolFacilities.css';
import Library from '../assets/schoolFacilityImages/Library.JPG'; // replace with your actual image
import imageLab from '../assets/schoolImages/computterLab.jpg';
import ChemistryLab from '../assets/schoolImages/ChemistryLab.JPG';
import image1 from '../assets/schoolImages/schoolImage2.jpg';
import yogaDayImage from '../assets/blogImages/Yogaday.jpeg'


const facilities = [
    {
        title: "Library",
        description: "A well-stocked library with thousands of books and digital resources to inspire learning.",
        image: Library, // replace with your actual image
    },
    {
        title: "Science Labs",
        description: "State-of-the-art physics, chemistry, and biology labs with modern equipment.",
        image: ChemistryLab,
    },
    {
        title: "Computer Labs",
        description: "High-speed internet and the latest computers to enhance digital literacy.",
        image: imageLab,
    },
    {
        title: "Sports Grounds",
        description: "Expansive sports facilities including football, basketball, and cricket grounds.",
        image: image1,
    },
    {
        title: "Auditorium",
        description: "A spacious auditorium for cultural events, competitions, and seminars.",
        image: yogaDayImage,
    },
];

const SchoolFacilities = () => {
    return (
        <section className="facilities-section">
            <h2 className="facilities-title">Our School Facilities</h2>
            <p className="facilities-caption">
                At P.E.M. High School and Degree College, we pride ourselves on providing exceptional facilities to support the holistic development of our students.
            </p>

            <div className="facilities-grid">
                {facilities.map((facility, index) => (
                    <div className="facility-card" key={index}>
                        <img src={facility.image} alt={facility.title} />
                        <h3>{facility.title}</h3>
                        <p>{facility.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SchoolFacilities;
