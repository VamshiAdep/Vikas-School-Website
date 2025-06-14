import React from 'react'
import collegeAddmission from '../assets/collegeAddmission.jpg'
import './JrCollegeAdmissions.css'

const CollegeAdmissions = () => {
    return (
        <div>
            <div className="jc-adm-hero">
                <div className="jc-adm-carousel-wrapper">
                    <div className='jc-adm-overlay-container'>
                        <div className="jc-adm-left-overlay">
                            <div className='image-Container'>
                                <img src={collegeAddmission} />
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
                                        <option value="B.sc.">B.sc.</option>
                                        <option value="B.Com">B.Com</option>
                                        <option value="B.A.">B.A.</option>
                                    </select>

                                    <select name="Current Std" required>
                                        <option value="" disabled selected>Current Std</option>
                                        <option value="1st Year">1st Year</option>
                                        <option value="2nd Year">2nd Year</option>
                                        <option value="3rd Year">3rd Year</option>
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

export default CollegeAdmissions