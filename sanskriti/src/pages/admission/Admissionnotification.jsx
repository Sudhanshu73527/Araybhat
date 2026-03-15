import React from "react";
import { FaCalendarAlt, FaUserGraduate, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

const AdmissionNotification = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 py-20 px-4 overflow-hidden">
      
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-700">
             Admission Open 2026-27
          </h2>

          <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
            Admission is open to classes Pre‐Nursery to Class VIII.  The admission process is designed to test the 
proficiency in various subjects, which will reveal the child's problem‐solving skills.  We believe that this 
method of testing the student will allow us to look at him/her holistically.  
          </p>

          {/* Hurry Up Badge */}
          <div className="mt-6 inline-block bg-red-600 text-white px-8 py-3 rounded-full font-semibold shadow-xl animate-bounce">
            ⏳ Hurry Up! Limited Seats Available
          </div>
        </motion.div>

        {/* Glassmorphism Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-lg bg-white/70 border border-white/40 shadow-2xl rounded-3xl p-8 md:p-14 grid md:grid-cols-3 gap-8 hover:shadow-yellow-200 transition-all duration-500"
        >
          
          {/* Start Date */}
          <div className="text-center p-6 rounded-xl hover:-translate-y-2 transition duration-300">
            <FaCalendarAlt className="text-5xl text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Admission Starts</h3>
            <p className="text-gray-700 font-medium text-lg">1st March 2026</p>
          </div>

          {/* End Date */}
          <div className="text-center p-6 rounded-xl hover:-translate-y-2 transition duration-300">
            <FaClock className="text-5xl text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Last Date</h3>
            <p className="text-gray-700 font-medium text-lg">30th April 2026</p>
          </div>

          {/* Classes Available */}
          <div className="text-center p-6 rounded-xl hover:-translate-y-2 transition duration-300">
            <FaUserGraduate className="text-5xl text-yellow-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Classes Available</h3>
            <p className="text-gray-700 font-medium text-lg">
              Nursery to Class VII
            </p>
          </div>

        </motion.div>

        {/* Apply Button Section */}
        <div className="text-center mt-16">
          <MotionLink
            to="/online-registration"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-block bg-yellow-500 text-white px-12 py-5 rounded-full text-xl font-bold shadow-2xl transition-all duration-500"
          >
             Apply Now Before Seats Fill
          </MotionLink>

          <p className="mt-4 text-gray-600 text-sm">
             Registration closing soon. Don’t miss the opportunity!
          </p>
        </div>

      </div>
    </section>
  );
};

export default AdmissionNotification;