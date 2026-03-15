import React from "react";
import { motion } from "framer-motion";
import { FaMusic, FaTrophy, FaUsers } from "react-icons/fa";

const Dance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-14 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Dance & Cultural Activities
          </h1>

          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Our school encourages students to explore their creativity and
            express themselves through dance, music and cultural performances.
          </p>
        </div>

        {/* Main Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white shadow-lg rounded-2xl p-10"
        >

          <div className="flex items-center gap-3 mb-6 text-purple-700 text-xl font-semibold">
            <FaMusic />
            Saturday House-wise Dance Competition
          </div>

          <p className="text-gray-600 leading-relaxed">
            At our school, co-curricular activities play an important role in
            the overall development of students. To promote creativity,
            confidence and teamwork, the school organizes a **House-wise Dance
            Competition every Saturday**.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Students from different houses actively participate in these
            competitions with great enthusiasm. These events provide a platform
            where children can showcase their talent, improve their stage
            confidence and enjoy learning beyond the classroom environment.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Such activities keep students motivated, help them stay engaged in
            school life and create a joyful learning atmosphere where every
            child feels encouraged to participate and express their abilities.
          </p>

        </motion.div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <FaUsers className="text-blue-600 text-3xl mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800">
              Participation
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Students from all houses participate actively in the competition.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <FaMusic className="text-pink-600 text-3xl mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800">
              Talent Development
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Dance activities help students develop creativity and confidence.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <FaTrophy className="text-yellow-500 text-3xl mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800">
              Healthy Competition
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              House-wise competitions encourage teamwork and healthy spirit.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Dance;