import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import img1 from "../../assets/san3.jpg"; // Replace with actual images
import img2 from "../../assets/san1.jpg";
import img3 from "../../assets/san2.jpg";
import img4 from "../../assets/san4.jpg"
const schoolPrompts = [
  {
    title: "Academic Excellence",
    image: img1,
    link: "#academics",
  },
  {
    title: "Sports & Activities",
    image: img2,
    link: "#sports",
  },
  {
    title: "Smart Classrooms",
    image: img3,
    link: "#smart-classrooms",
  },
   {
    title: "Smart Classrooms",
    image: img4,
    link: "#smart-classrooms",
  },
   {
    title: "Smart Classrooms",
    image: img3,
    link: "#smart-classrooms",
  },
];

const SchoolPrompts = () => {
  return (
    <section className="py-16 px-4 md:px-12 bg-gradient-to-b from-gray-50 to-white">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12">
        Explore Our{" "}
        <span className="text-green-600 underline decoration-green-300">
          School Highlights
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {schoolPrompts.map((prompt, index) => (
          <motion.div
            key={index}
            className="rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-lg overflow-hidden cursor-pointer flex flex-col"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={() => window.location.href = prompt.link}
          >
            {/* Image */}
            <div className="relative w-full h-56 overflow-hidden">
              <motion.img
                src={prompt.image}
                alt={prompt.title}
                className="object-cover w-full h-full"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
            </div>

            {/* Text Content */}
            <div className="flex justify-between items-center p-5">
              <h3 className="text-lg font-semibold text-gray-800">
                {prompt.title}
              </h3>
              <motion.span
                whileHover={{ rotate: 45 }}
                transition={{ duration: 0.3 }}
                className="bg-green-100 text-green-600 p-2 rounded-full"
              >
                <ArrowUpRight size={20} />
              </motion.span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SchoolPrompts;
