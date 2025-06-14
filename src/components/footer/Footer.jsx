import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-[#1e1e1e] text-white pt-12 pb-6 px-6 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 border-b border-gray-700 pb-8">

        {/* Left - School Info */}
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold">P.E.M High school & Jr College</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            At P.E.M High School & Jr College, we seamlessly blend time-honored values with
            modern educational practices, empowering our students to excel in a dynamic world
            while staying deeply rooted in our rich cultural heritage.
          </p>
          <div className="flex gap-4 pt-2 text-gray-400">
            <FaFacebookF className="hover:text-white transition" />
            <FaInstagram className="hover:text-white transition" />
            <FaYoutube className="hover:text-white transition" />
            <FaTwitter className="hover:text-white transition" />
          </div>
        </div>

        {/* Middle - Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 relative inline-block after:block after:h-1 after:w-10 after:bg-purple-500 after:mt-1">
            Useful Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Admissions</li>
            <li className="hover:text-white cursor-pointer">Copyright Policy</li>
          </ul>
        </div>

        {/* Right - Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <HiOutlineLocationMarker className="mt-1" />
              Fhenegao Kamathghar , Bhiwandi, Dist Thane, Maharashtra 421302
            </li>
            <li className="flex items-center gap-2">
              <HiOutlineMail />
              pemhighschool@jrcollege@gm.com
            </li>
            <li className="flex items-center gap-2">
              <HiOutlinePhone />
              7887681816 / 8655465553 / 8625025367
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="text-center text-xs text-gray-400 pt-6">
        © 2025 P.E.M High school & Jr College | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
