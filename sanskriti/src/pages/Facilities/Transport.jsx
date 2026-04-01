import React from "react";
import { FaBus, FaMapMarkedAlt, FaUserShield } from "react-icons/fa";
import { motion } from "framer-motion";

const Transport = () => {
  return (
    <section className="py-14 sm:py-16 px-4 sm:px-8 md:px-16 bg-gradient-to-br from-yellow-50 via-white to-orange-50">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          School Transport Facility
        </h2>

        <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed">
          We cover main trunk and feeder routes. Specific bus routes will depend on demand and will be determined 
at the beginning of each academic year. The school reserves the right to fix and/or change the bus routes 
as may deem fit from time to time. Parents will be duly informed about the bus routes before the classes 
commence. 
        </p>
      </div>

      {/* Transport Features */}
      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
          <FaBus className="text-orange-500 text-2xl mb-3" />
          <h4 className="font-semibold text-gray-800 mb-2">
            Comfortable School Buses
          </h4>
          <p className="text-sm text-gray-600">
            Our school buses are designed to provide comfortable and safe
            transportation for students every day.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
          <FaMapMarkedAlt className="text-orange-500 text-2xl mb-3" />
          <h4 className="font-semibold text-gray-800 mb-2">
            Wide Area Coverage
          </h4>
          <p className="text-sm text-gray-600">
            Transport service is available for nearby surrounding areas as well
            as far locations to ensure students can reach school easily.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
          <FaUserShield className="text-orange-500 text-2xl mb-3" />
          <h4 className="font-semibold text-gray-800 mb-2">
            Safe & Reliable
          </h4>
          <p className="text-sm text-gray-600">
            Student safety is our priority, and our transport system ensures
            secure travel for every child.
          </p>
        </div>
      </motion.div>

      {/* Bottom Line */}
      <div className="mt-12 text-center max-w-3xl mx-auto">
        <p className="text-gray-700 text-sm sm:text-base">
          Our transport network connects the school with multiple nearby towns
          and villages so that students from different areas can access quality
          education conveniently.
          <br /> <br />
          Transportation charges according to distance from school to pick up & drop point and to be decided by the Transport
Management.
        </p>
      </div>

    </section>
  );
};

export default Transport;