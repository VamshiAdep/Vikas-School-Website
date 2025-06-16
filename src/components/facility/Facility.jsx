import React from 'react'
import image1 from "../assets/carouselImages/image1.jpg"
import "./facility.css"
export default function Facility() {
    return (
        <div className="pem-container">

            <div className="image_main_container">
                <div className="pem-image">
                    <img src={image1} alt="PEM High School Building" />
                </div>
            </div>


            <div className="pem-text">
                <h2 className='heading-text'>
                    <span className="pem-title-gray">Vikas</span>{" "}
                    <span className="pem-title-yellow">English Medium School</span>
                </h2>
                <div className="pem-description">
                    <p>
                        Vikas English Medium School, proudly managed by the Telugu Samaj Shikshan Sanstha in Bhiwandi, is a well-established institution dedicated to delivering high-quality education to students from Playgroup through 10th grade. The school is committed to nurturing young minds right from their foundational years, creating a strong academic and moral base that supports lifelong learning and growth. With a focus on both scholastic and co-scholastic development, Vikas English Medium School blends traditional values with modern teaching methodologies to ensure that every child receives a well-rounded education. The school fosters an environment where curiosity, creativity, and critical thinking are encouraged, while also instilling discipline, empathy, and a strong sense of community. With well-qualified teachers, a supportive infrastructure, and a child-centric approach, the school ensures that students are not only prepared for academic success but are also equipped with the skills and confidence to thrive in a dynamic world. Through consistent efforts and a clear vision, Vikas English Medium School continues to be a trusted name in shaping future-ready individuals with strong cultural roots and progressive outlooks.
                    </p>
                </div>
            </div>
        </div>
    )
}