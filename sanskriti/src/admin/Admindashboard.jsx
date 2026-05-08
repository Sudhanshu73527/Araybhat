import React from "react";
import { Link } from "react-router-dom";
import {
  FaBell,
  FaImages,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaUsers,
  FaChalkboardTeacher,
  FaGraduationCap,
} from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { motion } from "framer-motion";

const AdminDashboard = () => {

  const topStats = [
    {
      title: "Total Students",
      value: "520",
      color: "bg-green-50 text-green-600",
      icon: <FaUsers size={22} />,
    },
    {
      title: "Total Teachers",
      value: "35",
      color: "bg-blue-50 text-blue-600",
      icon: <FaChalkboardTeacher size={22} />,
    },
    {
      title: "Pending Fees",
      value: "₹1,25,000",
      color: "bg-orange-50 text-orange-600",
      icon: <FaMoneyBillWave size={22} />,
    },
    {
      title: "Upcoming Events",
      value: "12",
      color: "bg-purple-50 text-purple-600",
      icon: <FaCalendarAlt size={22} />,
    },
  ];

  const dashboardCards = [
    { title: "Manage Notices", icon: <FaBell />, link: "/admin-notices", color: "bg-red-50 text-red-500" },
    { title: "Gallery", icon: <FaImages />, link: "/admin-gallery", color: "bg-yellow-50 text-yellow-600" },
    { title: "Event Images", icon: <MdEvent />, link: "/admin-events", color: "bg-purple-50 text-purple-600" },
    { title: "Upcoming Events", icon: <FaCalendarAlt />, link: "/admin-upcoming-events", color: "bg-green-50 text-green-600" },
    { title: "Fee Management", icon: <FaMoneyBillWave />, link: "/admin-fee", color: "bg-blue-50 text-blue-600" },
    { title: "Update Admission", icon: <FaGraduationCap />, link: "/admin/admission", color: "bg-indigo-50 text-indigo-600" },
    { title: "Infrastructure", icon: <FaGraduationCap />, link: "/admin/infra", color: "bg-gray-100 text-gray-700" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8">

      {/* 🔷 Header */}
      <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800">
            Dashboard
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Monitor and manage your school activities
          </p>
        </div>

        <div className="mt-4 md:mt-0 bg-green-50 text-green-600 px-4 py-2 rounded-lg text-sm font-medium border border-green-100">
          ● System Active
        </div>
      </div>

      {/* 🔷 Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {topStats.map((item, index) => (
          <motion.div
            whileHover={{ y: -4 }}
            key={index}
            className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-500">{item.title}</p>
                <h2 className="text-2xl font-semibold text-gray-800 mt-1">
                  {item.value}
                </h2>
              </div>

              <div className={`p-3 rounded-lg ${item.color}`}>
                {item.icon}
              </div>

            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔷 Section Header */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-700">
          Quick Actions
        </h2>
        <span className="text-sm text-gray-400">
          Access important features
        </span>
      </div>

      {/* 🔷 Action Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {dashboardCards.map((card, index) => (
          <Link to={card.link} key={index}>
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-lg transition cursor-pointer"
            >
              <div className="flex items-start gap-4">

                {/* Icon */}
                <div className={`p-3 rounded-lg ${card.color}`}>
                  {card.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Manage and update {card.title.toLowerCase()}
                  </p>
                </div>

              </div>
            </motion.div>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default AdminDashboard;