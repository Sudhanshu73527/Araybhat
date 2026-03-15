import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBell, FaImages, FaCalendarAlt, FaMoneyBillWave, FaUsers, FaChalkboardTeacher } from "react-icons/fa";
import { MdEvent } from "react-icons/md";

const AdminDashboard = () => {
  // Dashboard cards (links + icons)
  const dashboardCards = [
    { title: "Manage Notices", icon: <FaBell className="text-4xl text-yellow-600" />, link: "/admin-notices", description: "Add, edit or delete notices" },
    { title: "Gallery", icon: <FaImages className="text-4xl text-blue-600" />, link: "/admin-gallery", description: "Upload school photos" },
    { title: "Event Images", icon: <MdEvent className="text-4xl text-purple-600" />, link: "/admin-events", description: "Manage event photos" },
    { title: "Upcoming Events", icon: <FaCalendarAlt className="text-4xl text-pink-600" />, link: "/admin-upcoming-events", description: "Add upcoming events" },
    { title: "Fee Management", icon: <FaMoneyBillWave className="text-4xl text-red-600" />, link: "/admin-fee", description: "Manage student fees" },
    { title: "Update Admission", icon: <FaGraduationCap className="text-4xl text-green-700" />, link: "/admin/admission", description: "Update admission notifications" }
  ];

  // Static school info + stats
  const stats = [
    { title: "School Name", value: "Deoraj Public English School", icon: <FaGraduationCap className="text-green-600 text-3xl" /> },
    { title: "Total Students", value: 520, icon: <FaUsers className="text-blue-500 text-3xl" /> },
    { title: "Total Teachers", value: 35, icon: <FaChalkboardTeacher className="text-purple-500 text-3xl" /> },
    { title: "Pending Fees", value: "₹1,25,000", icon: <FaMoneyBillWave className="text-red-500 text-3xl" /> },
    { title: "Upcoming Events", value: 12, icon: <FaCalendarAlt className="text-pink-500 text-3xl" /> },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Hello Admin, happy to see you again!</h1>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-6 rounded-2xl flex items-center gap-4 hover:shadow-2xl transition cursor-pointer"
          >
            <div className="p-3 bg-gray-100 rounded-full">{stat.icon}</div>
            <div>
              <p className="text-gray-500">{stat.title}</p>
              <p className="text-2xl font-semibold text-gray-800">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dashboard cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboardCards.map((card, index) => (
          <Link to={card.link} key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg p-6 rounded-2xl hover:shadow-2xl transition cursor-pointer flex flex-col items-center gap-4"
            >
              {card.icon}
              <h3 className="text-xl font-bold text-gray-800 text-center">{card.title}</h3>
              <p className="text-gray-500 text-center">{card.description}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;