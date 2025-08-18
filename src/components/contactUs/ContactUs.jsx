import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Get in Touch</h2>
      <div className="contact-container">

        {/* ✅ Map Section */}
        <div className="map-container">
          <iframe title="Vikas English Medium School" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.416964496486!2d73.0558634!3d19.2872442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bd0a1c58aa93%3A0xb6bd70968b23b717!2sVikas%20English%20Medium%20School!5e0!3m2!1sen!2sin!4v1720955597919!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe>
        </div>

        {/* ✅ Info + Form Section */}
        <div className="contact-info">
          <p className="contact-subtitle">
            We're open for any suggestions or just to have a chat.
          </p>

          <div className="info-grid">
            <div className="info-block">
              <strong>📍 Address:</strong>
              <p>
                <b>Vikas English Medium School</b><br />
                Near Akhila Padmashali Samaj Hall, Padmanagar, Bhiwandi,<br />
                Thane - 421302
              </p>
            </div>

            <div className="info-block">
              <strong>📧 Email:</strong>
              <p>vikasschool236@gmail.com</p>
            </div>

            <div className="info-block">
              <strong>📞 Phone:</strong>
              <p>+91 8087784766</p>
            </div>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Create a message here..." required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;
