import React, { useEffect, useState } from "react";
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaNewspaper,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";
import { MdSchool } from "react-icons/md";

const InfoCards = () => {
  const [notices, setNotices] = useState([]);

  // FETCH NOTICES
  useEffect(() => {
    fetch("https://araybhat-1.onrender.com/api/notices/all")
      .then((res) => res.json())
      .then((data) => setNotices(data))
      .catch((err) => console.log(err));
  }, []);

  const cardData = [
    {
      title: "Academic Calendar",
      subtitle: "Session 2026-27",
      icon: <FaCalendarAlt />,
      gradient: "from-[#2563eb] to-[#4f46e5]",
      points: [
        "Holidays and vacations",
        "Examination periods",
        "Annual functions & events",
      ],
      buttonText: "Explore Calendar",
      buttonBg: "bg-blue-600",
      iconBg: "bg-blue-100 text-blue-600",
    },

    {
      title: "Latest News",
      subtitle: "School Updates",
      icon: <FaNewspaper />,
      gradient: "from-[#059669] to-[#0f766e]",
      items: notices,
      buttonBg: "bg-green-600",
      iconBg: "bg-green-100 text-green-600",
    },

    {
      title: "Student Council",
      subtitle: "Leadership Program",
      icon: <FaUsers />,
      gradient: "from-[#f59e0b] to-[#ea580c]",
      content: `Empowering students with leadership,
      confidence, responsibility and teamwork through
      activities, elections and programs.`,
      buttonText: "Coming Soon",
      buttonBg: "bg-orange-500",
      iconBg: "bg-orange-100 text-orange-500",
    },
  ];

  return (
    <section className="relative py-20 bg-[#f8fafc] overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>

      {/* Heading */}
      <div className="text-center mb-16 px-4 relative z-10">
        <span className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide">
          INFORMATION CENTER
        </span>

        <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          School <span className="text-blue-600">Highlights</span>
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
          Stay updated with school announcements, academic schedules, student
          activities and important information.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 relative z-10">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-[30px] overflow-hidden border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
          >
            {/* Top Header */}
            <div className={`bg-gradient-to-r ${card.gradient} p-7 relative`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>

              <div className="relative flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm font-medium">
                    {card.subtitle}
                  </p>

                  <h3 className="text-2xl font-bold text-white mt-1">
                    {card.title}
                  </h3>
                </div>

                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white text-3xl shadow-lg">
                  {card.icon}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-7 h-[430px] flex flex-col">
              {/* Academic Calendar */}
              {card.points && (
                <>
                  <div className="space-y-4 flex-1">
                    {card.points.map((point, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-4"
                      >
                        <div
                          className={`min-w-[42px] h-[42px] rounded-xl flex items-center justify-center ${card.iconBg}`}
                        >
                          <FaCheckCircle />
                        </div>

                        <div>
                          <p className="text-gray-700 font-medium text-sm leading-relaxed">
                            {point}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    className={`mt-6 ${card.buttonBg} text-white rounded-2xl py-3 font-semibold flex items-center justify-center gap-2`}
                  >
                    {card.buttonText}
                    <FaArrowRight />
                  </button>
                </>
              )}

              {/* News */}
              {card.items && (
                <div className="space-y-4 overflow-y-auto pr-2 flex-1">
                  {card.items.length === 0 && (
                    <div className="h-full flex items-center justify-center text-gray-500">
                      No notices available
                    </div>
                  )}

                  {card.items.map((item) => (
                    <div
                      key={item._id}
                      className="bg-[#f9fafb] border border-gray-100 rounded-2xl p-4"
                    >
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-green-500 text-white flex items-center justify-center shadow-md">
                          <MdSchool className="text-xl" />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold text-gray-800 text-sm">
                              {item.title}
                            </h4>

                            <span className="text-[10px] font-semibold px-2 py-1 rounded-full bg-green-100 text-green-600">
                              NEW
                            </span>
                          </div>

                          <p className="text-xs text-gray-400 mb-2">
                            {item.date}
                          </p>

                          <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Student Council */}
              {card.content && (
                <div className="flex flex-col items-center justify-center text-center flex-1">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-white text-5xl shadow-xl mb-6">
                    <FaUsers />
                  </div>

                  <h4 className="text-2xl font-bold text-gray-800 mb-3">
                    Coming Soon
                  </h4>

                  <p className="text-gray-600 leading-relaxed mb-8 text-sm">
                    {card.content}
                  </p>

                  <button
                    className={`${card.buttonBg} text-white px-7 py-3 rounded-2xl font-semibold`}
                  >
                    {card.buttonText}
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoCards;
