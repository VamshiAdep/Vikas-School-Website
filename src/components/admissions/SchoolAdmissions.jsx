import React from 'react'
import './SchoolAdmissions.css'

const SchoolAdmissions = () => {
    return (
        <div>
            <div className="school-adm-hero">
                <div className="school-adm-carousel-wrapper">
                    <div className='school-adm-overlay-container'>
                        <div className="school-adm-left-overlay">
                            <h1 className="school-adm-title">Welcome to Vikas High School </h1>
                            <h2 className="school-adm-subtitle">Addmissions For Jr to 10th</h2>
                        </div>
                        <div className="school-adm-right-overlay">
                            <div className="school-adm-form-container">
                                <form action="https://api.web3forms.com/submit" method="POST" className="school-adm-form">
                                    <input type="hidden" name="access_key" value="99a36398-df7f-44fe-a4cd-eeccba85ab44"></input>
                                    <h2>Admissions Open for <br /> 2025-26</h2>

                                    <input name="Student Name" type="text" placeholder="Student Name*" required />
                                    <input name="Parent Name" type="text" placeholder="Parent Name" />

                                    <select name="Current Std" required>
                                        <option value="" disabled selected>Current Std</option>
                                        <option value="Nursery">Nursery</option>
                                        <option value="LKG">LKG</option>
                                        <option value="UKG">UKG</option>
                                        <option value="1st">1st</option>
                                        <option value="2nd">2nd</option>
                                        <option value="3rd">3rd</option>
                                        <option value="4th">4th</option>
                                        <option value="5th">5th</option>
                                        <option value="6th">6th</option>
                                        <option value="7th">7th</option>
                                        <option value="8th">8th</option>
                                        <option value="9th">9th</option>
                                        <option value="10th">10th</option>
                                    </select>

                                    <input name="Mobile No " type="tel" placeholder="Mobile No*" required />
                                    <input name="Email " type="email" placeholder="Email ID" />
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

export default SchoolAdmissions