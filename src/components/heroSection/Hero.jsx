import React from "react";
import "./hero.css";

export default function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="Addmission-container">
        <p>Addmission's Are Open for 2025-2026</p>
      </div>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Welcome to Vikas School</h1>
            <p>
              Nurturing young minds with knowledge, values, and innovation.
              Building leaders for tomorrow with holistic education.
            </p>
            <div className="hero-buttons">
              <button className="btn primary">Admissions Open</button>
            </div>
          </div>
        </div>
        <div className="form-section">
          <div className="form-container">
            <h2>Connect With Our School Experts</h2>

            <form>
              {/* Row 1 */}
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" placeholder="Enter your full name" required />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <div className="phone-input">
                    <select>
                      <option>+91</option>
                      <option>+1</option>
                      <option>+44</option>
                    </select>
                    <input type="tel" placeholder="Enter your no." required />
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="form-row">
                <div className="form-group">
                  <label>Email Id *</label>
                  <input type="email" placeholder="abc@xyz.com" required />
                </div>
                <div className="form-group">
                  <label>Class You Are Looking For *</label>
                  <select required>
                    <option value="">Select Class</option>
                    <option>Kindergarten</option>
                    <option>1st Class</option>
                    <option>2nd Class</option>
                    <option>3rd Class</option>
                    <option>4th Class</option>
                    <option>5th Class</option>
                    <option>6th Class</option>
                    <option>7th Class</option>
                    <option>8th Class</option>
                    <option>9th Class</option>
                    <option>10th Class</option>
                  </select>
                </div>
              </div>

              {/* Row 3 */}
              {/* <div className="form-row">
              <div className="form-group full-width">
                <label>Program You Are Interested In *</label>
                <select required>
                  <option value="">Select Program</option>
                  <option>Day School</option>
                  <option>Boarding School</option>
                  <option>After-School Activities</option>
                </select>
              </div>
            </div> */}

              {/* Terms */}
              <div className="form-row">
                <div className="form-group full-width terms">
                  <input type="checkbox" id="consent" required />
                  <label htmlFor="consent">
                    By entering these details, I agree that Vikas School and its
                    staff can contact me with updates & notifications via Email,
                    SMS, WhatsApp, and calls. This consent will override any DNC /
                    NDNC registration.
                  </label>
                </div>
              </div>

              {/* Submit */}
              <div className="form-row">
                <button type="submit" className="submit-btn">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
