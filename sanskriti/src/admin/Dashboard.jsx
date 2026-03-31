import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaImages, FaBell, FaCalendarAlt, FaBars, FaMoneyBillWave, FaGraduationCap } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { motion } from "framer-motion";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/login";
  };

  const menuItems = [
    { title: "Dashboard", icon: <FaGraduationCap className="text-3xl text-white" />, link: "/admin-dashboard", description: "Overview of all admin tasks" },
    { title: "Manage Notices", icon: <FaBell className="text-3xl text-white" />, link: "/admin-notices", description: "Add, edit or delete notices" },
    { title: "Gallery", icon: <FaImages className="text-3xl text-white" />, link: "/admin-gallery", description: "Upload school photos" },
    { title: "Event Images", icon: <MdEvent className="text-3xl text-white" />, link: "/admin-events", description: "Manage event photos" },
    { title: "Upcoming Events", icon: <FaCalendarAlt className="text-3xl text-white" />, link: "/admin-upcoming-events", description: "Add upcoming events" },
    { title: "Fee Management", icon: <FaMoneyBillWave className="text-3xl text-white" />, link: "/admin-fee", description: "Manage student fees" },
    { title: "Update Admission", icon: <FaGraduationCap className="text-3xl text-white" />, link: "/admin/admission", description: "Update admission notifications" },
    { title: "Update Infrastructure", icon: <FaGraduationCap className="text-3xl text-white" />, link: "/admin/infra", description: "Update Infrastructure Image" },
    { title: "Enquiry", icon: <FaGraduationCap className="text-3xl text-white" />, link: "/admin/enq", description: "Check Enquiry" },
    { title: "Update Principal", icon: <FaGraduationCap className="text-3xl text-white" />, link: "/admin/principal", description: "Update Principal" },
    { title: "Update Chairmen", icon: <FaGraduationCap className="text-3xl text-white" />, link: "/admin/chairmen", description: "Update Chairmen" }


  ];

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Hamburger */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-[60] bg-green-800 text-white p-3 rounded-lg shadow-lg md:hidden lg:hidden"
      >
        <FaBars size={22} />
      </button>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full w-64
          bg-gradient-to-b from-green-800 to-green-900
          text-white p-6 shadow-xl
          z-50 transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:static
        `}
      >
        <h2 className="text-2xl font-bold mb-10">Admin Panel</h2>

        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                className="flex items-center gap-3 p-2 hover:bg-green-700 rounded transition"
                onClick={() => setSidebarOpen(false)}
              >
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}

<Link to={"/login"}>
          <li>
            <button
              onClick={logout}
              className="flex items-center gap-3 w-full text-left hover:bg-red-600 p-2 rounded transition"
            >
              Logout
            </button>
          </li>
          </Link>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-10">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">
          Hello Admin, happy to see you again!
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <Link to={item.link} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white shadow-lg p-6 rounded-2xl hover:shadow-2xl transition cursor-pointer"
              >
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-lg font-bold text-green-700 text-center">{item.title}</h3>
                <p className="text-gray-600 mt-2 text-sm text-center">{item.description}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;