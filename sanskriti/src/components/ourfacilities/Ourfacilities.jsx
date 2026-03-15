import React from "react";
import {
  FaChalkboardTeacher,
  FaRunning,
  FaBus,
  FaUtensils,
  FaHeart,
  FaLaptop,
} from "react-icons/fa";

const facilities = [
  {
    title: "Experienced Teachers",
    desc: "Highly qualified educators who focus on concept clarity, discipline and individual student growth.",
    icon: <FaChalkboardTeacher />,
    color: "bg-[#F4C542]",
    tag: "Qualified & Dedicated",
  },
  {
    title: "Physical Activity",
    desc: "Daily sports and fitness activities to ensure a healthy body, active mind and positive energy.",
    icon: <FaRunning />,
    color: "bg-[#9CCC65]",
    tag: "Healthy Lifestyle",
  },
  {
    title: "Transportation",
    desc: "GPS enabled safe transportation system covering all major routes with trained staff.",
    icon: <FaBus />,
    color: "bg-[#EF6C63]",
    tag: "Safe & Reliable",
  },
  {
    title: "Hostel Facility",
    desc: "Comfortable, hygienic and secure hostel facilities for students from distant locations.",
    icon: <FaUtensils />,
    color: "bg-[#7EC8E3]",
    tag: "Safe Living",
  },
  {
    title: "Love & Care",
    desc: "Every child receives personal attention, emotional care and a nurturing school environment.",
    icon: <FaHeart />,
    color: "bg-[#9C8ADE]",
    tag: "Personal Attention",
  },
  {
    title: "Digital Class",
    desc: "Smart classrooms with digital boards, modern tools and interactive learning methods.",
    icon: <FaLaptop />,
    color: "bg-[#F48FB1]",
    tag: "Smart Learning",
  },
];

const OurFacilities = () => {
  return (
    <section className="py-24 px-6 md:px-16 bg-gradient-to-b from-white to-blue-50">
      {/* Heading */}
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="w-12 h-[2px] bg-sky-400"></span>
          <h2 className="text-3xl md:text-5xl font-bold text-black">
            Our <span className="text-yellow-400">Facilities</span>
          </h2>
          <span className="w-12 h-[2px] bg-sky-400"></span>
        </div>
        <p className="text-gray-600 text-lg">
          We provide a safe, modern and caring environment where your child
          learns, grows and succeeds with confidence.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        {facilities.map((item, index) => (
          <div
            key={index}
            className="group text-center transition-all duration-300 hover:-translate-y-4"
          >
            {/* Icon */}
            <div className="relative w-28 h-28 mx-auto mb-6">
              <div
                className={`absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition ${item.color}`}
              />
              <div
                className={`relative w-28 h-28 rounded-full flex items-center justify-center text-white text-4xl shadow-2xl ${item.color}`}
              >
                {item.icon}
              </div>
            </div>

            {/* Tag */}
            <span className="inline-block mb-2 px-4 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-600">
              {item.tag}
            </span>

            {/* Content */}
            <h3 className="text-xl font-semibold mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed px-6">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurFacilities;
