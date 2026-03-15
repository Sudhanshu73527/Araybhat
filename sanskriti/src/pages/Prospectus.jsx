import React from "react";
import { motion } from "framer-motion";
import { FaFilePdf, FaDownload, FaSchool } from "react-icons/fa";

const Prospectus = () => {
  return (
    <div className="min-h-screen bg-[#f4f7fb] py-14 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-14">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-800"
          >
            School Prospectus
          </motion.h1>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Download our official school prospectus to explore academic programs,
            admission guidelines, facilities, fee structure, and institutional
            policies.
          </p>
        </div>

        {/* Prospectus Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-10"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* Left Side - Icon & Info */}
            <div>
              <div className="flex items-center gap-3 mb-4 text-red-600">
                {/* <FaFilePdf className="text-4xl" /> */}
                <h2 className="text-2xl font-semibold text-gray-800">
                  Official Prospectus 
                </h2>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                This prospectus provides complete details about our school
                academic system, infrastructure, teaching methodology,
                admission procedure, fee structure, rules & regulations,
                and student development programs.
              </p>

              <ul className="text-gray-600 space-y-2 mb-8">
                <li>✔ Academic Curriculum Details</li>
                <li>✔ Admission Process</li>
                <li>✔ Fee Structure</li>
                <li>✔ Infrastructure & Facilities</li>
                <li>✔ School Policies & Guidelines</li>
              </ul>

              {/* Download Button */}
              <a
                href="/Aryabhatta.pdf"
                download
                className="inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition"
              >
                <FaDownload />
                Download Prospectus 
              </a>
            </div>

            {/* Right Side - Preview Box */}
            <div className="bg-gray-100 rounded-xl p-6 border flex flex-col items-center justify-center text-center">
              <FaSchool className="text-blue-600 text-5xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">
                Preview Available
              </h3>
              <p className="text-gray-500 mt-2 text-sm">
                Click the download button to access the complete prospectus
                document in PDF format.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Prospectus;