import React from "react";

const provideData = [
  {
    title: "Safety & Security",
    image: "/safty.jpg",
    description:
      "Student safety is our top priority. 24x7 CCTV surveillance, controlled entry points and trained staff ensure a secure and protected campus for every child.",
  },
  {
    title: "Health & Wellness",
    image: "/health.jpg",
    description:
      "Regular health check-ups, first-aid support and professional counselling services focus on both physical and emotional well-being of students.",
  },
  {
    title: "Hygiene&Cleanliness",
    image: "/hygine.avif",
    description:
      "A clean and hygienic campus with daily sanitization routines, purified drinking water and well-maintained washrooms for boys and girls.",
  },
];

const WhatWeProvide = () => {
  return (
    <section className="py-32 px-4 bg-gradient-to-b from-slate-50 via-white to-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl sm:text-7xl font-semibold text-black mb-5">
        <span className="text-yellow-400">What We </span>Provide
          </h2>
          <div className="w-28 h-[3px] bg-gradient-to-r from-yellow-400 to-yelow-400 mx-auto mb-6" />
          <p className="text-gray-600 text-lg leading-relaxed">
            A thoughtfully designed environment that prioritizes safety,
            health and cleanliness to support your child’s holistic growth.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {provideData.map((item, index) => (
            <div
              key={index}
              className="
                group relative
                rounded-[2.8rem]
                bg-white
                border border-gray-200
                shadow-[0_25px_60px_rgba(0,0,0,0.08)]
                hover:shadow-[0_45px_90px_rgba(0,0,0,0.18)]
                transition-all duration-700
                hover:-translate-y-3
              "
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden rounded-t-[2.8rem]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-1000
                    group-hover:scale-110
                  "
                />

                {/* Soft overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                {/* Floating title */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                  <span className="
                    px-6 py-2
                    rounded-full
                    bg-black/90 backdrop-blur-md
                    text-yellow-300 text-sm font-semibold
                    shadow-lg
                  ">
                    {item.title}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-10 text-center">
                <p className="text-gray-600 text-[16px] leading-relaxed mb-8">
                  {item.description}
                </p>

                <button
                  className="
                    inline-flex items-center gap-2
                    px-8 py-3
                    rounded-full
                    text-sm font-semibold
                    text-white
                    bg-gradient-to-r from-yellow-400 to-yellow-400
                    hover:from-yellow-700 hover:to-yellow-700
                    transition-all duration-300
                    shadow-md
                  "
                >
                  Learn More
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatWeProvide;
