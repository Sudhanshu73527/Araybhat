import React from "react";
import { Link } from "react-router-dom";
import {
  FaBell,
  FaImages,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaUsers,
  FaChalkboardTeacher,
  FaGraduationCap
} from "react-icons/fa";
import { MdEvent } from "react-icons/md";

const AdminDashboard = () => {

  const topStats = [
    {
      title: "Total Students",
      value: "520",
      gradient: "from-green-500 to-green-400",
      icon: <FaUsers size={26} />
    },
    {
      title: "Total Teachers",
      value: "35",
      gradient: "from-blue-500 to-blue-400",
      icon: <FaChalkboardTeacher size={26} />
    },
    {
      title: "Pending Fees",
      value: "₹1,25,000",
      gradient: "from-orange-500 to-yellow-400",
      icon: <FaMoneyBillWave size={26} />
    },
    {
      title: "Upcoming Events",
      value: "12",
      gradient: "from-purple-600 to-pink-500",
      icon: <FaCalendarAlt size={26} />
    }
  ];

  const dashboardCards = [
    { title: "Manage Notices", icon: <FaBell />, link: "/admin-notices" },
    { title: "Gallery", icon: <FaImages />, link: "/admin-gallery" },
    { title: "Event Images", icon: <MdEvent />, link: "/admin-events" },
    { title: "Upcoming Events", icon: <FaCalendarAlt />, link: "/admin-upcoming-events" },
    { title: "Fee Management", icon: <FaMoneyBillWave />, link: "/admin-fee" },
    { title: "Update Admission", icon: <FaGraduationCap />, link: "/admin/admission" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 p-6">

      {/* 🔥 Header */}
      <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome Back, Admin
          </h1>
          <p className="text-gray-500">
            Here's what's happening in your school today
          </p>
        </div>

        {/* Small Badge */}
        <div className="mt-4 md:mt-0 bg-green-100 text-green-700 px-4 py-2 rounded-xl text-sm font-medium shadow-sm">
          ● System Active
        </div>
      </div>

      {/* 🔥 Top Stats (Premium Gradient Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {topStats.map((item, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r ${item.gradient} text-white p-6 rounded-3xl shadow-xl flex justify-between items-center relative overflow-hidden`}
          >
            {/* Glow Effect */}
            <div className="absolute w-32 h-32 bg-white/10 rounded-full -top-10 -right-10"></div>

            <div>
              <p className="text-sm opacity-80">{item.title}</p>
              <h2 className="text-2xl font-bold mt-1">{item.value}</h2>
            </div>

            <div className="text-white/80">{item.icon}</div>
          </div>
        ))}
      </div>

      {/* 🔥 Section Title */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-700">
          Quick Actions
        </h2>
        <span className="text-sm text-gray-400">Manage everything easily</span>
      </div>

      {/* 🔥 Modern Action Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboardCards.map((card, index) => (
          <Link to={card.link} key={index}>
            <div className="bg-white/70 backdrop-blur-lg border border-white/40 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer relative overflow-hidden">

              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-green-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>

              <div className="relative flex items-center gap-4">
                
                {/* Icon */}
                <div className="p-4 rounded-xl bg-gray-100 text-gray-700 group-hover:bg-green-500 group-hover:text-white transition">
                  {card.icon}
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-semibold text-gray-800 group-hover:text-green-700">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Manage {card.title.toLowerCase()}
                  </p>
                </div>

              </div>

            </div>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default AdminDashboard;