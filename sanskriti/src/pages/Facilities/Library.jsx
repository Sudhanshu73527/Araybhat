import React from "react";
import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaUserGraduate,
  FaClock,
} from "react-icons/fa";

const Library = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 px-4 sm:px-8 md:px-16 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900">

      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center max-w-4xl mx-auto mb-14"
      >
        <span className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/10 text-indigo-300 text-sm backdrop-blur-md mb-5">
          Knowledge • Discipline • Learning
        </span>

        <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
          Modern School
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
            {" "}
            Library Facility
          </span>
        </h2>

        <p className="text-gray-300 mt-6 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
          A peaceful and inspiring environment where students explore knowledge,
          improve focus and build strong reading habits for lifelong success.
        </p>
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center"
      >

        {/* Left Content */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl">

          <p className="text-gray-200 leading-relaxed text-sm sm:text-base mb-8">
            Our library is designed to create a calm and motivating atmosphere
            where students can focus deeply on studies, reading and self-learning.
            The facility helps students improve vocabulary, imagination and
            academic performance beyond classroom learning.
          </p>

          {/* Features */}
          <div className="grid gap-5">

            <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition duration-300">
              <div className="p-3 rounded-xl bg-indigo-500/20 text-indigo-300">
                <FaBookOpen className="text-xl" />
              </div>

              <div>
                <h4 className="text-white font-semibold mb-1">
                  Wide Collection of Books
                </h4>
                <p className="text-sm text-gray-300">
                  Academic, competitive and general knowledge books available
                  for every student.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition duration-300">
              <div className="p-3 rounded-xl bg-indigo-500/20 text-indigo-300">
                <FaUserGraduate className="text-xl" />
              </div>

              <div>
                <h4 className="text-white font-semibold mb-1">
                  Peaceful Reading Space
                </h4>
                <p className="text-sm text-gray-300">
                  A quiet and disciplined atmosphere for better concentration
                  and learning.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition duration-300">
              <div className="p-3 rounded-xl bg-indigo-500/20 text-indigo-300">
                <FaClock className="text-xl" />
              </div>

              <div>
                <h4 className="text-white font-semibold mb-1">
                  Dedicated Library Hours
                </h4>
                <p className="text-sm text-gray-300">
                  Regular library sessions encourage students to develop daily
                  reading habits.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          {/* Image 1 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-3xl h-[320px] group"
          >
            <img
              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop"
              alt="Library"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

            <div className="absolute bottom-5 left-5">
              <h4 className="text-white text-lg font-semibold">
                Smart Reading Environment
              </h4>
            </div>
          </motion.div>

          {/* Image 2 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-3xl h-[320px] group sm:mt-12"
          >
            <img
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop"
              alt="Library"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

            <div className="absolute bottom-5 left-5">
              <h4 className="text-white text-lg font-semibold">
                Knowledge Beyond Classroom
              </h4>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Bottom Quote */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 mt-16 text-center"
      >
        <h4 className="text-xl sm:text-2xl font-semibold text-white leading-relaxed">
          “Reading inspires imagination, discipline and lifelong learning.”
        </h4>
      </motion.div>

    </section>
  );
};

export default Library;