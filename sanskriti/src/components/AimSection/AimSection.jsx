import React from "react";
import { FaLightbulb, FaHandshake, FaStar } from "react-icons/fa";

const AimSection = () => {
  return (
    <section className="bg-[#FAF9F7] py-24 font-playfair">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-black tracking-wide">
            WE AIM : TO <span className="text-yellow-400">PREPARE THE STUDENT</span>
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-gray-500 text-lg leading-relaxed">
            To be intellectually competent to promote the development of
            intellectual skills and mastery of academic requirements.
          </p>
          <div className="w-16 h-[2px] bg-yellow-400 mx-auto mt-6" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* WE BELIEVE */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#DFF5F1] to-[#BFEAE1] p-10 shadow-lg hover:shadow-2xl transition">
            <FaLightbulb className=" animate-bounce absolute bottom-6 right-6 text-8xl text-[#1E7F74]/20" />

            <h3 className="text-2xl font-extrabold text-[#1E7F74] mb-4">
              WE BELIEVE
            </h3>
            <p className="text-[#355F5B] text-lg leading-relaxed font-semibold">
              In a holistic approach to education that fosters intellectual
              curiosity, emotional resilience, and respect for all individuals,
              enabling students to become thoughtful and responsible citizens.
            </p>

            <button className="mt-8 border border-[#1E7F74] px-6 py-2 rounded-full text-[#1E7F74] font-bold hover:bg-[#1E7F74] hover:text-white transition">
              ++
            </button>
          </div>

          {/* WE PLEDGE */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#ECEFF6] to-[#D6DEEE] p-10 shadow-lg hover:shadow-2xl transition">
            <FaHandshake className=" animate-bounce absolute bottom-6 right-6 text-8xl text-[#2C3E5C]/20" />

            <h3 className="text-2xl font-extrabold text-[#2C3E5C] mb-4">
              WE PLEDGE
            </h3>
            <p className="text-[#3E4B66] text-lg leading-relaxed font-semibold">
              To nurture students’ self-worth, dignity, and a strong sense of
              fairness. We encourage respect for diversity and empathy for all,
              creating a safe, inclusive, and supportive environment.
            </p>

            <button className="mt-8 border border-[#2C3E5C] px-6 py-2 rounded-full text-[#2C3E5C] font-bold hover:bg-[#2C3E5C] hover:text-white transition">
              ++
            </button>
          </div>

          {/* WE WANT */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#FFE6E6] to-[#FBCACA] p-10 shadow-lg hover:shadow-2xl transition ">
            <FaStar className=" animate-bounce absolute bottom-6 right-6 text-8xl text-[#B33636]/20" />

            <h3 className="text-2xl font-extrabold text-[#B33636] mb-4">
              WE WANT
            </h3>
            <p className="text-[#6B2A2A] text-lg leading-relaxed font-semibold">
              Our students to be confident, innovative, and kind. We aim to
              instill leadership qualities, social responsibility, and a
              lifelong love for learning.
            </p>

            <button className="mt-8 border border-[#B33636] px-6 py-2 rounded-full text-[#B33636] font-bold hover:bg-[#B33636] hover:text-white transition">
              ++
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AimSection;
