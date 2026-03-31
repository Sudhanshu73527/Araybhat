import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaFilePdf } from "react-icons/fa";

const Prospectus = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-gray-900"
          >
            School Prospectus
          </motion.h1>
          <p className="text-gray-500 mt-5 max-w-2xl mx-auto text-lg">
            Discover everything about our academic excellence, facilities, and admission process.
          </p>
        </div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-0">

            {/* LEFT */}
            <div className="p-10 md:p-14">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-100 p-4 rounded-2xl">
                  <FaFilePdf className="text-red-600 text-3xl" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">
                  Official Prospectus
                </h2>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                Get a complete overview of our school including academics,
                infrastructure, admission process, fee structure, and policies.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
                {[
                  "Curriculum",
                  "Admissions",
                  "Fees",
                  "Facilities",
                  "Policies",
                  "Activities",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-medium text-center"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <a
                href="/Aryabhatta.pdf"
                download
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-7 py-3 rounded-xl shadow-lg hover:scale-105 transition-all"
              >
                <FaDownload className="group-hover:animate-bounce" />
                Download Now
              </a>
            </div>

            {/* RIGHT */}
            <div className="relative flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-12">

              {/* Glow Effect */}
              <div className="absolute w-72 h-72 bg-white/20 blur-3xl rounded-full"></div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center shadow-xl"
              >
                <FaFilePdf className="text-6xl mb-4 mx-auto" />
                <h3 className="text-xl font-semibold">PDF Preview</h3>
                <p className="text-sm text-blue-100 mt-2">
                  Download the prospectus to view complete details in high quality PDF.
                </p>
              </motion.div>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Prospectus;
