import React from "react";
import { motion } from "framer-motion";
import {
  FaChild,
  FaBookOpen,
  FaSchool,
  FaUserGraduate,
} from "react-icons/fa";

const Academicssection = () => {
  const sections = [
    {
      title: "Pre-Primary",
      class: "Nursery - UKG",
      icon: <FaChild />,
      description:
        "A nurturing environment focused on play-based learning, creativity, and early skill development.",
    },
    {
      title: "Primary",
      class: "Class I - V",
      icon: <FaBookOpen />,
      description:
        "Strong academic foundation with focus on basic concepts, reading, writing and interactive learning.",
    },
    {
      title: "Middle School",
      class: "Class VI - VIII",
      icon: <FaSchool />,
      description:
        "Conceptual clarity, subject depth and development of analytical thinking with co-curricular balance.",
    },
    {
      title: "Secondary",
      class: "Class IX - X",
      icon: <FaUserGraduate />,
      description:
        "Focused preparation for board exams with structured curriculum, guidance and performance tracking.",
    },
  ];

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
            Academic Journey
          </h2>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
            A structured learning path from early education to Class 10, designed
            to build strong academic foundations and future readiness.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">

          {/* vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 w-[2px] h-full bg-gray-200 transform -translate-x-1/2" />

          <div className="space-y-16">
            {sections.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >

                {/* Card */}
                <div className="w-full md:w-1/2">
                  <div className="bg-white border rounded-2xl p-8 shadow-md hover:shadow-xl transition">

                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-900 text-white text-xl">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {item.class}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Dot */}
                <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 text-white z-10 shadow">
                  {index + 1}
                </div>

                {/* Empty space */}
                <div className="hidden md:block w-1/2" />

              </motion.div>
            ))}
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-24 text-center">
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our academic system is carefully designed to ensure students receive
            quality education, discipline and overall personality development at
            every stage. We prepare students not only for examinations but for
            life ahead.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Academicssection;