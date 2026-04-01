import React from "react";
import {
  FaChalkboardTeacher,
  FaGraduationCap,
  FaSchool,
  FaUsers
} from "react-icons/fa";
import { Link } from "react-router-dom";

const cards = [
  {
    title: "Best Teachers",
    desc: "At RCIS, students learn from experienced, passionate, and highly qualified educators.",
    icon: <FaChalkboardTeacher />,
    bg: "from-[#FFD54F] to-[#FFC107]",
    tag: "Expert Faculty"
  },
  {
    title: "Academic Excellence",
    desc: "A curriculum designed to challenge young minds and prepare students for global success.",
    icon: <FaGraduationCap />,
    bg: "from-[#B71C1C] to-[#A30000]",
    tag: "Top Results"
  },
  {
    title: "Infrastructure",
    desc: "Smart classrooms, modern labs, digital learning tools, library, and sports facilities.",
    icon: <FaSchool />,
    bg: "from-[#145A32] to-[#0B3D2E]",
    tag: "Smart Campus"
  },
  {
    title: "Holistic Development",
    desc: "We nurture leadership, creativity, confidence, values, and character beyond academics.",
    icon: <FaUsers />,
    bg: "from-[#1A237E] to-[#0B0F3F]",
    tag: "Beyond Books"
  }
];

const RCISSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1B1464] leading-snug mb-5">
            Aryabhatta National <br />  
            Public School <br />
            <span className="text-[#2563EB]">Semra Ramnagar</span>
          </h2>

          <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-7 max-w-xl mx-auto lg:mx-0">
            Aryabhatta National Public School boasts state-of-the-art infrastructure
            essential for delivering quality education. The school emphasizes moral
            values, discipline, and human ethics, focusing on comprehensive
            personality development alongside a strong academic curriculum.
          </p>

<Link to={"/about-school"}>
          <button className="bg-[#3B82F6] hover:bg-[#2563EB] transition-all duration-300 
          text-white px-7 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl">
            Learn More
          </button>
          </Link>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl p-7 sm:p-8 text-white 
              bg-gradient-to-br ${card.bg}
              shadow-lg transition-all duration-500 
              hover:-translate-y-1 hover:shadow-2xl group
              text-center sm:text-left`}
            >
              {/* Glow overlay */}
              <div className="absolute inset-0 bg-white/10 opacity-0 
              group-hover:opacity-100 transition"></div>

              {/* Icon */}
              <div className="relative z-10 w-14 h-14 mx-auto sm:mx-0 mb-4 
              flex items-center justify-center rounded-full 
              bg-white/20 backdrop-blur-md text-3xl shadow-md">
                {card.icon}
              </div>

              {/* Tag */}
              <span className="relative z-10 text-xs uppercase tracking-widest opacity-90 mb-2 block">
                {card.tag}
              </span>

              {/* Title */}
              <h3 className="relative z-10 text-lg lg:text-xl font-bold mb-3">
                {card.title}
              </h3>

              {/* Divider */}
              <div className="relative z-10 w-10 h-[2px] bg-white/40 mb-4 mx-auto sm:mx-0"></div>

              {/* Description */}
              <p className="relative z-10 text-sm leading-relaxed opacity-95">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RCISSection;
