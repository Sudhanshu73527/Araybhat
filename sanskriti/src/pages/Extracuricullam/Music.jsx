import React from "react";
import { motion } from "framer-motion";
import { FaMusic, FaUsers, FaMicrophone } from "react-icons/fa";

const Music = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-14 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Music & Cultural Activities
          </h1>

          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Music plays an important role in developing creativity, confidence
            and emotional expression among students.
          </p>
        </div>

        {/* Main Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white shadow-lg rounded-2xl p-10"
        >

          <div className="flex items-center gap-3 mb-6 text-indigo-700 text-xl font-semibold">
            <FaMusic />
            Saturday House-wise Music Competition
          </div>

          <p className="text-gray-600 leading-relaxed">
            Our school encourages students to explore their musical talents and
            creative abilities. To promote interest in music and cultural
            activities, the school organizes a **House-wise Music Competition
            every Saturday**.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Students from different houses participate enthusiastically in
            singing and musical performances. These competitions provide a
            platform for students to showcase their talent, improve confidence
            and develop stage presence.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Such cultural activities make the learning environment joyful and
            engaging. They help students stay motivated, express their
            creativity and maintain a healthy balance between academics and
            co-curricular development.
          </p>

        </motion.div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <FaUsers className="text-blue-600 text-3xl mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800">
              Active Participation
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Students from all houses actively participate in music
              competitions.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <FaMusic className="text-purple-600 text-3xl mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800">
              Talent Development
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Music activities help students develop rhythm, creativity and
              artistic expression.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <FaMicrophone className="text-pink-500 text-3xl mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800">
              Stage Confidence
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Performances help students build confidence and improve their
              stage presence.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Music;