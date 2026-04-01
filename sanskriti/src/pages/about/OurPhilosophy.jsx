import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaBookOpen, FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";

const OurPhilosophy = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Our Philosophy
          </h2>
          <p className="text-gray-500 mt-2">
            Guiding Every Child Towards Knowledge & Confidence
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="backdrop-blur-lg bg-white/70 border border-white/40 shadow-xl rounded-3xl p-6 md:p-12"
        >

          {/* Quote Section */}
          <div className="text-center mb-10">
            <p className="text-2xl md:text-3xl font-semibold text-indigo-700 italic">
              “Sa Vidya - Ya Vimuktaya”
            </p>
            <p className="text-gray-500 text-sm">
              True knowledge liberates and enlightens
            </p>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-8 items-start">

            {/* Left Text */}
            <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
              <p>
                Our philosophy is rooted in the belief that education should
                remove ignorance and empower every child with clarity, purpose,
                and confidence.
              </p>

              <p>
                A child who understands what to do next and has the ability to
                act on it becomes truly happy. This happiness builds
                self-confidence and a natural love for learning.
              </p>

              <p>
                With the support of experienced educators, students receive
                personalized guidance to strengthen both academic knowledge and
                essential communication skills.
              </p>

              <p>
                This approach reduces dependency on external coaching and helps
                children grow with clarity instead of confusion.
              </p>
            </div>

            {/* Right Feature Cards */}
            <div className="grid grid-cols-2 gap-4">

              <div className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition">
                <FaLightbulb className="text-indigo-600 text-2xl mx-auto mb-2" />
                <p className="text-sm font-medium">Concept Clarity</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition">
                <FaBookOpen className="text-indigo-600 text-2xl mx-auto mb-2" />
                <p className="text-sm font-medium">Strong Academics</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition">
                <FaUserGraduate className="text-indigo-600 text-2xl mx-auto mb-2" />
                <p className="text-sm font-medium">Student Growth</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition">
                <FaChalkboardTeacher className="text-indigo-600 text-2xl mx-auto mb-2" />
                <p className="text-sm font-medium">Expert Guidance</p>
              </div>

            </div>

          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default OurPhilosophy;