import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaUsers, FaHeartbeat } from "react-icons/fa";

const Yoga = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 py-14 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Yoga & Wellness Activities
          </h1>

          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Yoga plays an important role in maintaining physical health,
            mental balance and overall well-being of students.
          </p>
        </div>

        {/* Main Yoga Section */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white shadow-lg rounded-2xl p-10"
        >

          <div className="flex items-center gap-3 mb-6 text-green-700 text-xl font-semibold">
            <FaLeaf />
            Yoga Practice in School
          </div>

          <p className="text-gray-600 leading-relaxed">
            Our school strongly believes in promoting a healthy lifestyle
            among students. Yoga is an essential part of our wellness
            activities that helps students improve concentration,
            flexibility and mental peace.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
            On the occasion of <strong>International Yoga Day</strong>, the
            school organizes a special yoga session where all students and
            faculty members actively participate together. These sessions
            encourage awareness about the importance of physical fitness
            and a healthy lifestyle.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
            In addition, yoga exercises are also practiced during the
            <strong> morning assembly</strong>. Students regularly perform
            simple yoga postures and breathing exercises that help them
            start their day with energy, focus and positivity.
          </p>

        </motion.div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <FaUsers className="text-blue-600 text-3xl mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800">
              Collective Participation
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Students and faculty members participate together in yoga
              activities and wellness programs.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <FaLeaf className="text-green-600 text-3xl mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800">
              Healthy Lifestyle
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Yoga helps students maintain physical fitness and mental
              balance.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <FaHeartbeat className="text-red-500 text-3xl mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800">
              Daily Wellness
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Morning assembly yoga sessions help students stay energetic
              and focused throughout the day.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Yoga;