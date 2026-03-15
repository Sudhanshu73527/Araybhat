import React from "react";
import { motion } from "framer-motion";
import { FaUserGraduate, FaUniversity } from "react-icons/fa";

const Studentdetails = () => {
  const totalStudents = 350;

  const classes = [
    {
      name: "Nursery - K3",
      classroom:
        "Foundational classrooms designed for early childhood learning with activity based teaching, visual learning tools and a safe, engaging environment.",
    },
    {
      name: "Prep - III",
      classroom:
        "Concept-driven learning environment equipped with structured seating arrangement, academic charts and interactive teaching methods.",
    },
    {
      name: "IV - V",
      classroom:
        "Modern classroom infrastructure with subject displays, improved learning aids and collaborative learning activities.",
    },
    {
      name: "VI - IX",
      classroom:
        "Senior academic wing with focused subject teaching, disciplined classroom environment and performance based learning support.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f4f7fb] py-14 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-14 text-center">
          <h1 className="text-4xl font-bold text-gray-800 tracking-wide">
            Student Academic Overview
          </h1>

          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Aryabhatta National Public School continues to maintain a strong
            academic environment where students receive quality education in a
            disciplined and progressive learning atmosphere.
          </p>
        </div>

        {/* TOTAL STUDENT CARD */}
        <div className="flex justify-center mb-16">

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-md p-10 border-l-4 border-blue-600 w-full md:w-1/2"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">
                  Total Students (Nursery - IX)
                </p>

                <h2 className="text-4xl font-bold text-gray-800">
                  {totalStudents}+
                </h2>
              </div>

              <FaUserGraduate className="text-blue-600 text-4xl" />
            </div>
          </motion.div>

        </div>

        {/* CLASSROOM INFRASTRUCTURE SECTION */}
        <div className="bg-white rounded-2xl shadow-lg p-10">

          <div className="flex items-center gap-3 mb-8">
            <FaUniversity className="text-blue-600 text-2xl" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Classroom Infrastructure & Learning Environment
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {classes.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="border rounded-xl p-6 bg-gray-50 hover:shadow-md transition"
              >
                <h3 className="text-blue-700 font-semibold mb-3">
                  {item.name}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.classroom}
                </p>
              </motion.div>
            ))}

          </div>

          {/* SCHOOL GROWTH DESCRIPTION */}
          <div className="mt-10 text-gray-600 leading-relaxed">

            Aryabhatta National Public School is continuously progressing
            towards academic excellence. The school focuses on providing
            quality education, disciplined learning culture and holistic
            development of every student.

            <br />
            <br />

            Due to the strong academic performance, dedicated teachers and
            supportive learning environment, the number of students enrolling
            in the institution is steadily increasing. In the current academic
            session, student enrollment has grown significantly as parents are
            increasingly trusting the school's educational standards and
            development-oriented approach.

          </div>

        </div>

      </div>
    </div>
  );
};

export default Studentdetails;