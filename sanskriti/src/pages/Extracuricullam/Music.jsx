import React from "react";
import { motion } from "framer-motion";
import { FaMusic, FaUsers, FaMicrophone } from "react-icons/fa";

const Music = () => {
  return (
    <div className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-600 font-semibold tracking-wide uppercase">
            Co-Curricular
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Music & Cultural Activities
          </h1>

          <div className="w-20 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Encouraging creativity, confidence and expression through structured
            musical programs and cultural events.
          </p>
        </motion.div>

        {/* Main Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 bg-indigo-50 rounded-lg">
                <FaMusic className="text-indigo-600 text-xl" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Saturday Music Competition
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              The school organizes structured house-wise music competitions every
              Saturday to promote artistic growth and student engagement.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Students actively participate in vocal and instrumental performances,
              gaining exposure and confidence through regular stage practice.
            </p>

            <p className="text-gray-600 leading-relaxed">
              These activities help maintain a balanced development between academics
              and creative expression.
            </p>
          </motion.div>

          {/* Right Cards */}
          <div className="grid gap-6">

            <motion.div
              whileHover={{ y: -5 }}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4">
                <FaUsers className="text-indigo-600 text-2xl" />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Active Participation
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Students from all houses participate regularly.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4">
                <FaMusic className="text-indigo-600 text-2xl" />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Skill Development
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Enhances creativity, rhythm and musical ability.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4">
                <FaMicrophone className="text-indigo-600 text-2xl" />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Stage Confidence
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Improves public speaking and performance confidence.
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

export default Music;