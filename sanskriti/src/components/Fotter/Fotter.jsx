import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
  FaPaperPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-[#0f1115] text-white overflow-hidden">
      
      {/* BEAUTIFUL BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-yellow-400/20 blur-[160px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-amber-300/10 blur-[160px] rounded-full"></div>

      {/* GRID OVERLAY */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* TOP CTA SECTION */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-14">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 rounded-[40px] p-8 md:p-12 shadow-[0_20px_80px_rgba(255,215,0,0.25)]"
        >
          {/* INNER GLOW */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/20 blur-3xl rounded-full"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            
            {/* LEFT */}
            <div>
              <span className="bg-black/20 backdrop-blur-xl px-4 py-2 rounded-full text-sm font-medium">
                 Admissions Open 2026
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-black mt-5 leading-tight">
                Build Your Child’s <br />
                Bright Future With Us
              </h2>

              <p className="text-black/70 mt-5 max-w-2xl leading-relaxed text-lg">
                A modern learning environment focused on education,
                creativity, discipline, and innovation.
              </p>
            </div>

            {/* RIGHT */}
            <div className="w-full lg:w-auto">
              <div className="bg-white rounded-2xl p-2 flex items-center shadow-2xl">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent px-5 py-4 outline-none text-gray-700 w-full lg:w-80"
                />

                <button className="bg-black hover:bg-neutral-900 text-white px-6 py-4 rounded-xl transition-all duration-300 flex items-center gap-2 font-medium">
                  Subscribe
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* MAIN FOOTER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">

        {/* ABOUT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl font-black leading-tight bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">
            Aryabhatta National Public School
          </h1>

          <p className="mt-6 text-gray-400 leading-relaxed text-sm">
            Inspiring students through quality education, leadership,
            innovation, and holistic development for a successful future.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-8">
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
              (Icon, i) => (
                <motion.a
                  whileHover={{ y: -6, scale: 1.1 }}
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-lg"
                >
                  <Icon size={15} />
                </motion.a>
              )
            )}
          </div>
        </motion.div>

        {/* QUICK LINKS */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 relative inline-block">
            Quick Links
            <span className="absolute left-0 -bottom-3 w-16 h-1 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500"></span>
          </h3>

          <ul className="space-y-5 text-gray-400">
            {[
              "About Us",
              "Admissions",
              "Academics",
              "Faculty",
              "Gallery",
              "Contact Us",
            ].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="group flex items-center gap-3 hover:text-yellow-400 transition-all duration-300"
                >
                  <FaArrowRight className="text-xs group-hover:translate-x-2 transition-all" />
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div> */}

        {/* FEATURES */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 relative inline-block">
            Why Choose Us
            <span className="absolute left-0 -bottom-3 w-16 h-1 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500"></span>
          </h3>

          <div className="space-y-4">
            {[
              "Smart Digital Classrooms",
              "Experienced Faculty",
              "Sports & Activities",
              "Safe Campus Environment",
              "Modern Learning Methods",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 hover:border-yellow-400/40 hover:bg-yellow-400/5 transition-all duration-300 rounded-2xl px-5 py-4 text-sm text-gray-300"
              >
                ✨ {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 relative inline-block">
            Contact Info
            <span className="absolute left-0 -bottom-3 w-16 h-1 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500"></span>
          </h3>

          <div className="space-y-5">

            <div className="group flex items-start gap-4 bg-white/5 border border-white/10 hover:border-yellow-400/30 rounded-3xl p-5 transition-all duration-300">
              
              <div className="w-12 h-12 rounded-2xl bg-yellow-400 text-black flex items-center justify-center shadow-lg">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h4 className="font-semibold text-white mb-1">
                  Address
                </h4>

                <p className="text-sm text-gray-400 leading-relaxed">
                  Semara Bargon, Deoraj <br />
                  West Champaran, Bihar – 845106
                </p>
              </div>
            </div>

            <div className="group flex items-center gap-4 bg-white/5 border border-white/10 hover:border-yellow-400/30 rounded-3xl p-5 transition-all duration-300">
              
              <div className="w-12 h-12 rounded-2xl bg-yellow-400 text-black flex items-center justify-center shadow-lg">
                <FaPhoneAlt />
              </div>

              <div>
                <h4 className="font-semibold text-white mb-1">
                  Phone
                </h4>

                <p className="text-sm text-gray-400">
                  +91 99319 79868
                </p>
              </div>
            </div>

            <div className="group flex items-center gap-4 bg-white/5 border border-white/10 hover:border-yellow-400/30 rounded-3xl p-5 transition-all duration-300">
              
              <div className="w-12 h-12 rounded-2xl bg-yellow-400 text-black flex items-center justify-center shadow-lg">
                <FaEnvelope />
              </div>

              <div>
                <h4 className="font-semibold text-white mb-1">
                  Email
                </h4>

                <p className="text-sm text-gray-400 break-all">
                  info@aryabhattpublicschool.com
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="relative z-10 border-t border-white/10 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <p className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Aryabhatta National Public School. 
            All Rights Reserved.
          </p>

          <p className="text-sm text-gray-500">
            Designed & Developed By{" "}
            <span className="text-yellow-400 font-semibold">
              Webala
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;