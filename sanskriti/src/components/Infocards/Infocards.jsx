import React, { useEffect, useState } from "react";
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaNewspaper,
  FaUsers,
} from "react-icons/fa";
import { MdSchool } from "react-icons/md";

const InfoCards = () => {

  const [notices, setNotices] = useState([]);

  // FETCH NOTICES FROM BACKEND
  useEffect(() => {

    fetch("https://araybhat-1.onrender.com/api/notices/all")
      .then((res) => res.json())
      .then((data) => setNotices(data))
      .catch((err) => console.log(err));

  }, []);


  const cardData = [
    {
      title: "Academic Calendar 2026-27",
      icon: <FaCalendarAlt className="text-3xl" />,
      gradient: "from-blue-500 via-indigo-500 to-purple-600",
      textColor: "text-blue-500",
      points: [
        "Term starts and ends",
        "Holidays and vacations",
        "Examination periods",
        "Events and celebrations",
      ],
      buttonText: "View Full Calendar",
      buttonColor: "border-blue-500 text-blue-500",
    },

    {
      title: "News & Updates",
      icon: <FaNewspaper className="text-3xl" />,
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      items: notices,
    },

    {
      title: "Student Council",
      icon: <FaUsers className="text-3xl" />,
      gradient: "from-yellow-400 via-amber-500 to-orange-500",
      content: `Our Student Council empowers students with leadership skills,
      responsibility, and pride. Elections, campaigns, and activities
      will soon be launched.`,
      buttonText: "Program Details",
      buttonColor: "border-yellow-500 text-yellow-500",
    },
  ];

  return (
    <div className="relative bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 py-16">

      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4 relative z-10">

        {cardData.map((card, index) => (

          <div
            key={index}
            className="backdrop-blur-xl bg-white/80 rounded-2xl shadow-lg border border-white/40 overflow-hidden flex flex-col h-full"
          >

            {/* Header */}

            <div
              className={`bg-gradient-to-r ${card.gradient} text-white p-5 flex items-center gap-3 text-xl font-bold shadow-lg`}
            >
              {card.icon}
              <span>{card.title}</span>
            </div>


            {/* Content */}

            <div className="p-6 flex flex-col flex-1">


              {/* Calendar Section */}

              {card.points && (
                <>
                  <p className="mb-4 text-gray-700 font-medium">
                    Stay informed about important dates:
                  </p>

                  <ul className="space-y-3 mb-6">

                    {card.points.map((point, i) => (

                      <li
                        key={i}
                        className="flex items-center gap-2 text-gray-600"
                      >
                        <FaCheckCircle
                          className={`${card.textColor} text-lg`}
                        />

                        {point}

                      </li>

                    ))}

                  </ul>

                  <a
                    href="#"
                    className={`mt-auto border px-5 py-2 rounded-full text-sm font-semibold ${card.buttonColor}`}
                  >
                    {card.buttonText}
                  </a>
                </>
              )}


              {/* News Section */}

              {card.items && (

                <div
                  className="space-y-6 overflow-y-auto flex-1 pr-2"
                  style={{ maxHeight: "300px" }}
                >

                  {card.items.length === 0 && (
                    <p className="text-gray-500 text-sm">
                      No notices available
                    </p>
                  )}

                  {card.items.map((item) => (

                    <div
                      key={item._id}
                      className="flex gap-4 p-3 rounded-lg"
                    >

                      <div
                        className="bg-green-500 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg"
                      >
                        <MdSchool className="text-xl" />
                      </div>

                      <div>

                        <h4 className="font-bold text-gray-800">
                          {item.title}
                        </h4>

                        <p className="text-xs text-gray-500">
                          {item.date}
                        </p>

                        <p className="text-sm text-gray-600">
                          {item.description}
                        </p>

                      </div>

                    </div>

                  ))}

                </div>

              )}


              {/* Student Council */}

              {card.content && (

                <div className="flex flex-col flex-1 text-center justify-center">

                  <div className="text-yellow-500 text-6xl mb-4 flex justify-center">
                    <FaUsers />
                  </div>

                  <h4 className="font-bold text-lg mb-2 text-gray-800">
                    Coming Soon!
                  </h4>

                  <p className="text-sm text-gray-600 mb-4">
                    {card.content}
                  </p>

                  <p className="font-semibold mb-6 text-gray-700">
                    Stay tuned for updates!
                  </p>

                  <a
                    href="#"
                    className={`border px-5 py-2 rounded-full text-sm font-semibold ${card.buttonColor}`}
                  >
                    {card.buttonText}
                  </a>

                </div>

              )}

            </div>

          </div>

        ))}

      </div>

    </div>
  );

};

export default InfoCards;