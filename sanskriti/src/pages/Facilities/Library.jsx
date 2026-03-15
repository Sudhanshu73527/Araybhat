import React from "react";
import { motion } from "framer-motion";
import { FaBookOpen, FaUserGraduate, FaClock } from "react-icons/fa";

const Library = () => {
  return (
    <section className="py-14 sm:py-16 px-4 sm:px-8 md:px-16 bg-gradient-to-br from-indigo-50 via-white to-blue-50">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          School Library Facility
        </h2>
        <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed">
          Our school provides a well-maintained and peaceful library facility 
          where students can study comfortably and develop strong reading habits.
        </p>
      </div>

      {/* Content Box */}
      <motion.div
        className="max-w-5xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center md:text-left mb-10">
          The library offers a calm and disciplined environment where students 
          can sit peacefully and focus on their studies. It encourages self-learning, 
          improves concentration and builds knowledge beyond classroom teaching. 
          We believe that regular reading enhances vocabulary, imagination and 
          academic performance.
        </p>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center md:text-left">

          <div className="p-5 rounded-2xl bg-indigo-50 hover:bg-indigo-100 transition shadow-sm">
            <FaBookOpen className="text-indigo-600 text-2xl mb-3 mx-auto md:mx-0" />
            <h4 className="font-semibold text-gray-800 mb-2">
              Wide Range of Books
            </h4>
            <p className="text-sm text-gray-600">
              Academic and general knowledge books available for all classes.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-indigo-50 hover:bg-indigo-100 transition shadow-sm">
            <FaUserGraduate className="text-indigo-600 text-2xl mb-3 mx-auto md:mx-0" />
            <h4 className="font-semibold text-gray-800 mb-2">
              Peaceful Study Environment
            </h4>
            <p className="text-sm text-gray-600">
              A quiet space where students can read and prepare without disturbance.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-indigo-50 hover:bg-indigo-100 transition shadow-sm">
            <FaClock className="text-indigo-600 text-2xl mb-3 mx-auto md:mx-0" />
            <h4 className="font-semibold text-gray-800 mb-2">
              Dedicated Library Hours
            </h4>
            <p className="text-sm text-gray-600">
              Scheduled library periods to encourage consistent reading habits.
            </p>
          </div>

        </div>
      </motion.div>

      {/* Bottom Quote */}
      <div className="mt-12 text-center max-w-3xl mx-auto">
        <h4 className="text-lg sm:text-xl font-semibold text-gray-800">
          "Reading builds knowledge, discipline and lifelong learning."
        </h4>
      </div>

    </section>
  );
};

export default Library;