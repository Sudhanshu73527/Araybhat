import React, { useState } from "react";

const sectionsData = [
  {
    id: "preprimary",
    title: "Pre-Primary",
    subtitle: "Play • Learn • Grow",
    image: "/pre.jpg",
    description:
      "A joyful and caring environment where young learners begin their educational journey through play-based learning and creativity.",
    points: [
      "Activity-based learning",
      "Safe & nurturing environment",
      "Motor & communication skills",
    ],
  },
  {
    id: "primary",
    title: "Primary",
    subtitle: "Strong Foundations",
    image: "/primary.avif",
    description:
      "Building strong academic foundations while encouraging curiosity, confidence, and independent thinking.",
    points: [
      "Concept-based learning",
      "Experienced teachers",
      "Academics + activities balance",
    ],
  },
  {
    id: "secondary",
    title: "Secondary",
    subtitle: "Skill • Discipline • Growth",
    image: "/secondary.jpg",
    description:
      "Focused academics combined with discipline and responsibility to prepare students for higher challenges.",
    points: [
      "Advanced subject knowledge",
      "Regular assessments",
      "Personality development",
    ],
  },
  {
    id: "senior",
    title: "Senior Secondary",
    subtitle: "Future Ready",
    image: "/senior.jpg",
    description:
      "Preparing students for higher education and careers through excellence and career guidance.",
    points: [
      "Career-oriented learning",
      "Board exam preparation",
      "Counselling & mentorship",
    ],
  },
];

const SchoolSections = () => {
  const [active, setActive] = useState(sectionsData[0]);

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#f7faff] to-white overflow-hidden">

      {/* glow */}
      <div className="absolute top-20 left-0 w-60 h-60 bg-blue-400/10 blur-3xl rounded-full" />
      <div className="absolute bottom-20 right-0 w-60 h-60 bg-indigo-400/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-7xl font-semibold text-black mb-4">
            Our <span className="text-yellow-400">School Sections</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Academic stages designed to nurture confidence, curiosity, and success.
          </p>
          <div className="w-20 h-[3px] bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mt-5 rounded-full" />
        </div>

        {/* Tabs (Mobile scrollable) */}
        <div className="flex md:justify-center gap-4 overflow-x-auto pb-4 mb-14 scrollbar-hide">
          {sectionsData.map((section) => (
            <button
              key={section.id}
              onClick={() => setActive(section)}
              className={`flex-shrink-0 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300
                ${
                  active.id === section.id
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 border hover:bg-blue-50"
                }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 md:gap-20 items-center">

          {/* Image */}
          <div className="relative order-1 lg:order-none">
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-2xl rounded-3xl" />
            <img
              src={active.image}
              alt={active.title}
              className="relative rounded-3xl shadow-2xl object-cover w-full h-[260px] sm:h-[320px] md:h-[420px]"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-black/20 to-transparent" />
          </div>

          {/* Text */}
          <div className="text-center lg:text-left">
            <span className="inline-block mb-3 text-blue-600 font-semibold tracking-widest uppercase text-xs">
              {active.subtitle}
            </span>

            <h3 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-5">
              {active.title} Section
            </h3>

            <p className="text-gray-600 leading-relaxed mb-8">
              {active.description}
            </p>

            <ul className="space-y-4 mb-10 max-w-md mx-auto lg:mx-0">
              {active.points.map((point, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-700">
                  <span className="mt-2 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
                  {point}
                </li>
              ))}
            </ul>

            <button className="w-full sm:w-auto inline-flex justify-center items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-xl hover:scale-105 transition">
              Explore Curriculum →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SchoolSections;
