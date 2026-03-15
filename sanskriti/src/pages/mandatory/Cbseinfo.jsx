import React from "react";
import { FaBook, FaSchool, FaAward } from "react-icons/fa";

const Cbseinfo = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-14 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            CBSE Information
          </h1>
          <p className="text-gray-500 mt-3">
            Understanding the Central Board of Secondary Education (CBSE)
          </p>
        </div>

        {/* About CBSE */}
        <div className="bg-white shadow-lg rounded-2xl p-8 mb-10">
          <div className="flex items-center gap-3 mb-4 text-blue-700 text-xl font-semibold">
            <FaSchool />
            What is CBSE?
          </div>

          <p className="text-gray-600 leading-relaxed">
            The Central Board of Secondary Education (CBSE) is one of the most
            recognized and trusted educational boards in India. It is a national
            level board of education for public and private schools, controlled
            and managed by the Government of India.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
            CBSE was established in 1962 with the objective of providing a
            strong and balanced academic curriculum that helps students build
            conceptual understanding, analytical skills and overall personality
            development.
          </p>
        </div>

        {/* CBSE Education System */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">

          <div className="bg-white shadow-lg rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4 text-green-700 text-xl font-semibold">
              <FaBook />
              CBSE Education System
            </div>

            <p className="text-gray-600 leading-relaxed">
              CBSE focuses on a student-friendly and concept-based learning
              approach. The board promotes modern teaching methods, continuous
              evaluation and balanced academic development.
            </p>

            <p className="text-gray-600 mt-3 leading-relaxed">
              The curriculum is designed to help students prepare for higher
              education and national level competitive examinations such as
              engineering, medical and other professional courses.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4 text-purple-700 text-xl font-semibold">
              <FaAward />
              Advantages of CBSE
            </div>

            <ul className="text-gray-600 leading-relaxed space-y-2">
              <li>• Concept-based and structured curriculum</li>
              <li>• Recognized across India and internationally</li>
              <li>• Focus on analytical and practical learning</li>
              <li>• Preparation for national competitive examinations</li>
              <li>• Balanced development of academics and co-curricular skills</li>
            </ul>
          </div>

        </div>

        {/* Conclusion */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <p className="text-gray-600 leading-relaxed">
            Schools affiliated with CBSE aim to provide quality education,
            modern teaching practices and a disciplined learning environment.
            The board encourages innovation in education and ensures that
            students develop strong academic knowledge along with life skills
            required for the future.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Cbseinfo;