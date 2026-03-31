import React from "react";
import { motion } from "framer-motion";
import { FaMusic, FaTrophy, FaUsers } from "react-icons/fa";

const Dance = () => {
  return (
    <div className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-purple-600 font-semibold uppercase tracking-wide">
            Co-Curricular
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Dance & Cultural Activities
          </h1>

          <div className="w-20 h-1 bg-purple-600 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Encouraging students to express creativity, build confidence and
            participate in cultural excellence through structured dance programs.
          </p>
        </motion.div>

        {/* Main Section */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 bg-purple-50 rounded-lg">
                <FaMusic className="text-purple-600 text-xl" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Saturday Dance Competition
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              The school organizes regular house-wise dance competitions every
              Saturday to enhance creativity and student engagement beyond
              academics.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Students participate with enthusiasm, showcasing different dance
              styles and cultural performances while gaining stage exposure.
            </p>

            <p className="text-gray-600 leading-relaxed">
              These activities help in personality development, confidence
              building and maintaining a balanced learning environment.
            </p>
          </motion.div>

          {/* RIGHT SIDE CARDS */}
          <div className="grid gap-6">

            <motion.div
              whileHover={{ y: -6 }}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition duration-300 bg-white"
            >
              <div className="flex items-center gap-4">
                <FaUsers className="text-purple-600 text-2xl" />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Participation
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Students from all houses actively take part.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition duration-300 bg-white"
            >
              <div className="flex items-center gap-4">
                <FaMusic className="text-purple-600 text-2xl" />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Talent Development
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Enhances creativity, rhythm and performance skills.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition duration-300 bg-white"
            >
              <div className="flex items-center gap-4">
                <FaTrophy className="text-purple-600 text-2xl" />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Healthy Competition
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Promotes teamwork and positive competitive spirit.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Dance;