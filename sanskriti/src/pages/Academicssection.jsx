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
      title: "Pre-Primary Section",
      icon: <FaChild />,
      description:
        "Our Pre-Primary section focuses on early childhood development through play-based learning, interactive activities and creative exploration. The aim is to build a strong foundation for young learners while developing curiosity, confidence and social skills.",
    },
    {
      title: "Primary Section (Class I – V)",
      icon: <FaBookOpen />,
      description:
        "The Primary section provides structured academic learning where students develop strong fundamentals in subjects such as language, mathematics and environmental studies. Modern teaching methods and activity-based learning help students understand concepts effectively.",
    },
    {
      title: "Upper Primary Section (Class VI – VIII)",
      icon: <FaSchool />,
      description:
        "In the Upper Primary level, students are introduced to advanced subject knowledge and analytical thinking. The curriculum encourages conceptual understanding, discipline and active participation in both academic and co-curricular activities.",
    },
    {
      title: "Secondary Section (Class IX – X)",
      icon: <FaUserGraduate />,
      description:
        "The Secondary section prepares students for higher education and future academic challenges. The school provides a focused learning environment, experienced teachers and a structured curriculum that helps students perform well in board examinations and build a strong academic future.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-14 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-800">
            Academic Structure
          </h1>

          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Our school provides quality education from Pre-Primary to
            Secondary level with a focus on academic excellence, character
            development and holistic growth of every student.
          </p>
        </div>

        {/* Academic Sections */}
        <div className="grid md:grid-cols-2 gap-8">

          {sections.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white shadow-lg rounded-2xl p-8 border-l-4 border-blue-600"
            >
              <div className="flex items-center gap-3 text-blue-600 text-xl font-semibold mb-4">
                {item.icon}
                {item.title}
              </div>

              <p className="text-gray-600 leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>

        {/* Closing Description */}
        <div className="mt-12 bg-white shadow-lg rounded-2xl p-8">
          <p className="text-gray-600 leading-relaxed">
            Our institution is committed to providing a progressive learning
            environment where students receive quality education along with
            moral values, discipline and personality development. Through
            modern teaching methods, dedicated teachers and supportive
            infrastructure, the school ensures that every student grows
            academically and personally while preparing for future challenges.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Academicssection;