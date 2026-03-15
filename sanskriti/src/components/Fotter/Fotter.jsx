import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-emerald-900 to-green-950 text-gray-300 font-outfit overflow-hidden">
      
      {/* Soft Decorative Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-emerald-500/20 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-green-600/20 blur-3xl"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* School Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Araybhat National Public School
          </h2>
          <p className="leading-relaxed text-gray-400 text-sm">
            Empowering young minds with quality education, strong values, and
            modern skills to build confident, responsible global citizens.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-6">
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-emerald-500 text-white transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              )
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            {["About Us", "Admissions", "Academics", "Gallery", "Contact"].map(
              (item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-emerald-400 transition-all"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* What We Offer */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Why Choose Us
          </h3>
          <ul className="space-y-3 text-sm">
            <li>✔ Holistic & Value-Based Education</li>
            <li>✔ Experienced & Caring Faculty</li>
            <li>✔ Smart & Digital Classrooms</li>
            <li>✔ Sports & Creative Activities</li>
            <li>✔ Safe & Supportive Environment</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Us
          </h3>

          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-emerald-400 mt-1" />
              <span>Semra, Ramnagar (West Champaran), Bihar – 845106</span>
            </li>

            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-emerald-400" />
              <span>+91-99319 79868</span>
            </li>

            <li className="flex items-center gap-3">
              <FaEnvelope className="text-emerald-400" />
              <span>info@araybhatnationalpublichschool.in</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Araybhat national Public School. All rights reserved.  
        <span className="block sm:inline">
          {" "} | Powered by{" "}
          {/* <span className="text-emerald-400 font-semibold">Webala</span> */}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
