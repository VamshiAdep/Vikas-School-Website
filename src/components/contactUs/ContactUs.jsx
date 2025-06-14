import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="map-container">
       <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4533.397486619348!2d72.9779207!3d19.194385999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b93b00000001%3A0xdb2b2d6c931de5d4!2sSahyog%20College%20of%20Hotel%20%26%20Tourism%20Management%20College%20in%20Thane%20%7C%20Tourism%20%26%20Aviation%20Management%20%7C%20BA%20Travel%20%26%20Tourism%20College!5e1!3m2!1sen!2sin!4v1749814684378!5m2!1sen!2sin"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="School Location"
/>

        </div>

        <div className="contact-info">
          <h2>CONTACT US</h2>
          <p>We're open for any suggestion or just to have a chat</p>

          <div className="info-block">
            <strong>📍 ADDRESS:</strong>
            <p>
              <b>P.E.M High School & Jr College</b><br />
              Fehnegoan, Kamatghar, Bhiwandi,<br />
              Thane - 421302
            </p>
          </div>

          <div className="info-block">
            <strong>📧 EMAIL:</strong>
            <p>pemschool123@gmail.com</p>
          </div>

          <div className="info-block">
            <strong>📞 PHONE:</strong>
            <p>+91 8655465553</p>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Create a message here..." required></textarea>
            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
