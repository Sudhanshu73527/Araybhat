import React from "react";
import { motion } from "framer-motion";

const Chairmenfullmessage = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Message from the Founder & Chairperson
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-md p-6 md:p-10 leading-relaxed border"
        >

          {/* Quote */}
          <p className="text-3xl text-blue-300 font-serif mb-2">“</p>

          {/* Content */}
          <div className="space-y-4 text-gray-700 text-sm md:text-base">

            <p>
              The core purpose of education is to provide children with a learning
              environment which brings out the best in them. I strongly felt the
              need for customization in our school system and reorienting it
              towards Indian culture and traditions.
            </p>

            <p>
              Aryabhatta National Public School (ANPS), ‘The Galaxy of Knowledge’,
              is the result of this vision. Since its establishment in 2017, the
              institution has focused on nurturing young minds in a child-centric
              and joyful learning environment.
            </p>

            <p>
              Our goal has always been to make ANPS a place where teaching is a
              pleasure and learning is a joy. We encourage students to explore,
              experiment, and grow by embracing both success and failure with
              confidence and purpose.
            </p>

            {/* Highlight Section */}
            <div className="bg-gray-100 rounded-lg p-4 border-l-4 border-blue-600">
              <p className="font-medium text-gray-800 mb-2">
                Our learning framework focuses on:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>The philosophy (The why)</li>
                <li>The curriculum and methodology (The what and how)</li>
                <li>The learning environment and tools</li>
                <li>The teachers as facilitators</li>
              </ul>
            </div>

            <p>
              We aim to develop students who are physically fit, mentally
              resilient, morally strong, and spiritually aware. A holistic
              approach remains the foundation of our teaching methodology.
            </p>

            <p>
              I firmly believe that Aryabhatta National Public School will
              continue to grow as a premier institution, fulfilling the
              aspirations of parents and shaping responsible future citizens.
            </p>

          </div>

          {/* Signature */}
          <div className="mt-8 pt-5 border-t flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">
                Lt Col Sushil Kumar Pathak (Retd)
              </h3>
              <p className="text-gray-600 text-sm">
                Founder & Chairperson
              </p>
              <p className="text-gray-500 text-xs">
                Aryabhatta National Public School
              </p>
            </div>

            {/* Minimal Accent */}
            <div className="text-blue-600 font-semibold text-sm">
              Since 2017
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default Chairmenfullmessage;