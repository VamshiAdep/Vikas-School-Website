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
                    <span className="pem-title-gray">P.E.M</span>{" "}
                    <span className="pem-title-yellow">High School & Jr. College</span>
                </h2>
                <div className="pem-description">
                    <p>
                        PEM High School is one of the educational institutions managed by
                        Telugu Samaj Shikshan Sanstha in Bhiwandi. The school offers quality
                        education to students from kindergarten through 10th grade.
                        Additionally, PEM High School has a junior college section offering
                        11th and 12th grade education. The junior college is committed to
                        providing students with a comprehensive education that prepares them
                        for higher education and beyond. It's worth noting that Tel
                    </p>
                </div>
            </div>
        </div>
    )
}