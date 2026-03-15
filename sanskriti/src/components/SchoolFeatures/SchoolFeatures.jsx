import React from "react";
import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaFlask,
  FaDesktop,
  FaUtensils,
  FaBookOpen,
  FaBasketballBall,
  FaMusic,
  FaPaintBrush,
  FaBus,
  FaHeartbeat,
  FaLeaf,
} from "react-icons/fa";

const infrastructureData = [
  { icon: <FaDesktop />, title: "Computer Labs", description: "Modern computer labs equipped with updated systems to support digital learning." },
  { icon: <FaFlask />, title: "Science Labs", description: "Well-structured Physics, Chemistry & Biology labs for practical experiments." },
  { icon: <FaChalkboardTeacher />, title: "Maths Lab", description: "Interactive learning tools to strengthen logical thinking and problem-solving." },
  { icon: <FaBookOpen />, title: "Library", description: "A peaceful space with books, journals, and study resources for students." },
  { icon: <FaBasketballBall />, title: "Sports Facilities", description: "Playgrounds and sports areas to encourage fitness and teamwork." },
  { icon: <FaMusic />, title: "Music Room", description: "Dedicated space for musical training and creative expression." },
  { icon: <FaPaintBrush />, title: "Art & Craft", description: "Creative studio for drawing, painting, and artistic development." },
  { icon: <FaUtensils />, title: "Canteen", description: "Clean and hygienic food facilities for students and staff." },
  { icon: <FaBus />, title: "Transport", description: "Safe and reliable transport services covering nearby areas." },
  { icon: <FaHeartbeat />, title: "Medical Room", description: "Basic medical care with first-aid and health support on campus." },
  { icon: <FaLeaf />, title: "Eco Garden", description: "Green environment promoting environmental awareness and care." },
];

const Infrastructure = () => {
  return (
    <section className="bg-[#FAFAFA] py-24 font-playfair">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-black">
            Our <span className="text-yellow-400">Infrastructure</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-500 text-lg">
            Carefully designed facilities that support academic excellence,
            creativity, and holistic growth.
          </p>
        </div>

        {/* Cards */}
        <div className="flex gap-8 overflow-x-auto pb-6 no-scrollbar">
          {infrastructureData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="min-w-[300px] max-w-[300px] bg-white rounded-3xl 
                         border border-gray-200 px-8 py-10 text-center
                         shadow-sm hover:shadow-lg hover:-translate-y-1
                         transition-all duration-300"
            >
              {/* Icon */}
              <div className="mx-auto w-20 h-20 rounded-full 
                              bg-gradient-to-br from-yellow-400 to-yellow-600
                              flex items-center justify-center text-[#7A5C3E] 
                              text-3xl mb-6 shadow-sm">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-yellow-400 mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Infrastructure;
