import React from 'react'
import './JrCollegeAdmissions.css'
import JrCollegeAddmissionImage from '../assets/JrCollegeAddmissionImage.jpg'

const JrCollegeAdmissions = () => {
    return (
        <div>
            <div className="jc-adm-hero">
                <div className="jc-adm-carousel-wrapper">
                    <div className='jc-adm-overlay-container'>
                        <div className="jc-adm-left-overlay">
                            {/* <h1 className="jc-adm-title">Welcome to P.E.M High School & Jr College</h1>
                            <h2 className="jc-adm-subtitle">Addmissions For Junior College</h2> */}
                            <div className='image-Container'>
                                <img src={JrCollegeAddmissionImage} />
                            </div>
                        </div>
                        <div className="jc-adm-right-overlay">
                            <div className="jc-adm-form-container">
                                <form action="https://api.web3forms.com/submit" method="POST" className="jc-adm-form">
                                    <input type="hidden" name="access_key" value="99a36398-df7f-44fe-a4cd-eeccba85ab44"></input>
                                    <h2>Admissions Open for <br /> 2025-26</h2>

                                    <input name="Student Name" type="text" placeholder="Student Name*" required />
                                    <select name="Course Name" required>
                                        <option value="" disabled selected>Choose Any Course</option>
                                        <option value="Science">Science</option>
                                        <option value="Commerce">Commerce</option>
                                        <option value="Arts">Arts</option>
                                    </select>

                                    <select name="Current Std" required>
                                        <option value="" disabled selected>Current Std</option>
                                        <option value="11th">11th</option>
                                        <option value="12th">12th</option>
                                    </select>

                                    <input name="Mobile No" type="tel" placeholder="Mobile No*" required />
                                    <input name="Email" type="email" placeholder="Email ID" />
                                    <input name="City" type="text" placeholder="City*" required />

                                    <button type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JrCollegeAdmissions