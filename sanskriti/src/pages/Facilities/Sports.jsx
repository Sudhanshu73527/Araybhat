import React from "react";
import { motion } from "framer-motion";
import { FaFutbol, FaRunning, FaTrophy, FaChild } from "react-icons/fa";

const sportsFeatures = [
  {
    icon: <FaFutbol />,
    title: "Cricket & Football Matches",
    desc: "Regular cricket and football matches are organized among students to promote teamwork and sportsmanship."
  },
  {
    icon: <FaRunning />,
    title: "Athletic Activities",
    desc: "Running races, fitness activities and outdoor games help students stay active and healthy."
  },
  {
    icon: <FaTrophy />,
    title: "Sports Competitions",
    desc: "We organize sports competitions where students participate enthusiastically and showcase their talent."
  },
  {
    icon: <FaChild />,
    title: "Physical Development",
    desc: "Sports activities help children develop discipline, confidence and strong physical fitness."
  }
];

const Sports = () => {
  return (
    <section className="py-14 sm:py-16 px-4 sm:px-8 md:px-16 bg-gradient-to-br from-green-50 via-white to-blue-50">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Sports & Physical Activities
        </h2>

        <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed">
          Our school believes that sports are an essential part of education.
          We regularly organize various sports activities and competitions
          such as cricket, football and other games to encourage teamwork,
          leadership and physical fitness among students.
        </p>
      </div>

      {/* Sports Cards */}
      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {sportsFeatures.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
          >
            <div className="text-green-500 text-2xl mb-3">
              {item.icon}
            </div>

            <h4 className="font-semibold text-gray-800 mb-2">
              {item.title}
            </h4>

            <p className="text-sm text-gray-600">
              {item.desc}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Bottom Text */}
      <div className="mt-12 text-center max-w-3xl mx-auto">
        <p className="text-gray-700 text-sm sm:text-base">
          Through sports and outdoor activities, we aim to build confidence,
          discipline and a healthy lifestyle among students while making
          learning more enjoyable and energetic.
        </p>
      </div>

    </section>
  );
};

export default Sports;