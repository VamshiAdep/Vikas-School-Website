import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full  overflow-hidden text-gray-800 font-sans">
      {/* Footer Banner Image */}
      <img
        src="/card.png"
        alt="Footer Banner"
        className="w-full object-cover "
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = '/fallback-footer.png';
        }}
      />

      {/* Main Footer Section */}
      <div className="bg-blue-300 w-full py-20 px-6 md:px-24 text-white">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Vision */}
          <div className="space-y-6">
            <img
              src="src/components/assets/TSSS-Logo.jpg"
              alt="School Logo"
              className="w-24 md:w-32"
            />
            <h2 className="text-3xl font-bold">Vikas High School</h2>
            <p className="text-lg leading-relaxed max-w-sm">
              Empowering students to become thoughtful leaders, responsible citizens, and lifelong
              learners with values and skills for the future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 underline underline-offset-4">Quick Links</h3>
            <ul className="space-y-4 text-lg">
              <li><a href="/" className="hover:opacity-80">🏠 Home</a></li>
              <li><a href="/about" className="hover:opacity-80">ℹ️ About Us</a></li>
              <li><a href="/admissions" className="hover:opacity-80">🎓 Admissions</a></li>
              <li><a href="/contact" className="hover:opacity-80">📞 Contact</a></li>
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 underline underline-offset-4">Academics</h3>
            <ul className="space-y-4 text-lg">
              <li><a href="/curriculum" className="hover:opacity-80">📘 Curriculum</a></li>
              <li><a href="/faculty" className="hover:opacity-80">👩‍🏫 Our Faculty</a></li>
              <li><a href="/events" className="hover:opacity-80">📅 Events</a></li>
              <li><a href="/gallery" className="hover:opacity-80">🖼️ Gallery</a></li>
            </ul>
          </div>

          {/* Contact and Social */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 underline underline-offset-4">Contact Us</h3>
            <p className="text-lg mb-2">🏫 123 School Lane, Mumbai, India</p>
            <p className="text-lg mb-2">📞 +91 98765 43210</p>
            <p className="text-lg mb-4">✉️ info@vikasschool.com</p>
            <div className="flex gap-6 text-3xl mt-4">
              <a href="#" className="hover:text-blue-700"><FaFacebook /></a>
              <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
              <a href="#" className="hover:text-sky-500"><FaTwitter /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="bg-[#00234f] text-center text-lg font-medium text-white py-6">
        © {new Date().getFullYear()} Vikas High School. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
