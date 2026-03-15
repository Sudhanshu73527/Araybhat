import React from "react";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaSchool,
  FaCheckCircle,
  FaFileAlt,
} from "react-icons/fa";

const Rte = () => {
  return (
    <section className="relative bg-white py-20 px-6 md:px-16 overflow-hidden">
      
      {/* Background Blur Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-40"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-yellow-400 mb-6 leading-tight">
            Right to Education (RTE) Act
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            The Right to Education (RTE) Act ensures free and compulsory
            education for children between the ages of 6 and 14 years.
            It guarantees that every child has access to quality elementary
            education without financial barriers.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Under this act, private schools are required to reserve 25% of
            their seats for children from economically weaker sections,
            promoting equal opportunity and inclusive education.
          </p>

          {/* <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition duration-300">
            Apply for RTE Admission
          </button> */}
        </motion.div>

        {/* Right Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white border border-gray-100 shadow-xl rounded-2xl p-6"
          >
            <FaUserGraduate className="text-3xl text-blue-600 mb-4" />
            <h4 className="font-semibold text-lg mb-2">Free Education</h4>
            <p className="text-gray-600 text-sm">
              Free and compulsory education for children aged 6–14 years.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white border border-gray-100 shadow-xl rounded-2xl p-6"
          >
            <FaSchool className="text-3xl text-indigo-600 mb-4" />
            <h4 className="font-semibold text-lg mb-2">25% Seat Reservation</h4>
            <p className="text-gray-600 text-sm">
              Private schools reserve 25% seats for economically weaker students.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white border border-gray-100 shadow-xl rounded-2xl p-6"
          >
            <FaCheckCircle className="text-3xl text-green-600 mb-4" />
            <h4 className="font-semibold text-lg mb-2">Equal Opportunity</h4>
            <p className="text-gray-600 text-sm">
              Ensures equal access to quality education for all children.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white border border-gray-100 shadow-xl rounded-2xl p-6"
          >
            <FaFileAlt className="text-3xl text-purple-600 mb-4" />
            <h4 className="font-semibold text-lg mb-2">Government Standards</h4>
            <p className="text-gray-600 text-sm">
              Schools must follow defined academic and infrastructure standards.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Rte;