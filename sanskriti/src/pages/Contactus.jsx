import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contactus = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#f5fff8] via-white to-[#e8fff0] py-16 px-4 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-7"
        >
          <div>
            <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold">
              CONTACT US
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-5 leading-tight">
              Let’s Connect <br />
              With Us
            </h1>

            <p className="text-gray-600 mt-5 text-lg leading-relaxed">
              Have questions, suggestions, or need help? Our team is always
              ready to assist you. Feel free to contact us anytime.
            </p>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-5">
            <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              <div className="bg-green-100 p-4 rounded-xl text-green-600 text-xl">
                <FaPhoneAlt />
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">Call Us</h3>
                <p className="text-gray-600">+91 99319 79868</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              <div className="bg-green-100 p-4 rounded-xl text-green-600 text-xl">
                <FaEnvelope />
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">Email Address</h3>
                <p className="text-gray-600">info@AryabhattaNationalPublic.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              <div className="bg-green-100 p-4 rounded-xl text-green-600 text-xl">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">Location</h3>
                <p className="text-gray-600">
                 Semara, Ramnagar, Bihar, India
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              <div className="bg-green-100 p-4 rounded-xl text-green-600 text-xl">
                <FaClock />
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">Working Hours</h3>
                <p className="text-gray-600">
                  Mon - Sat : 6:30 AM - 3:00 PM
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white shadow-2xl rounded-3xl p-8 md:p-10 relative"
        >
          {/* TOP GLOW */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-green-200 blur-3xl opacity-30 rounded-full"></div>

          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Send Message
          </h2>

          <p className="text-gray-500 mb-8">
            Fill out the form and we’ll get back to you quickly.
          </p>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-200 focus:border-green-500 outline-none px-5 py-4 rounded-xl bg-gray-50"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-200 focus:border-green-500 outline-none px-5 py-4 rounded-xl bg-gray-50"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-200 focus:border-green-500 outline-none px-5 py-4 rounded-xl bg-gray-50"
            />

            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full border border-gray-200 focus:border-green-500 outline-none px-5 py-4 rounded-xl bg-gray-50 resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-green-700 hover:scale-[1.02] transition duration-300 text-white font-semibold py-4 rounded-xl shadow-lg"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contactus;