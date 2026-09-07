import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  FaImages,
  FaBell,
  FaCalendarAlt,
  FaBars,
  FaMoneyBillWave,
  FaUserGraduate,
  FaSchool,
  FaClipboardList,
  FaRegSmile,
  FaUsers,
} from "react-icons/fa";

import { MdEventAvailable } from "react-icons/md";
import { motion } from "framer-motion";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [visitors, setVisitors] = useState(0);
  const [loadingVisitors, setLoadingVisitors] = useState(true);

  const location = useLocation();

  // ===============================
  // FETCH TOTAL WEBSITE VISITORS
  // ===============================
  useEffect(() => {
    const getVisitors = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/visitors"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch visitors");
        }

        const data = await response.json();

        setVisitors(data.count || 0);
      } catch (error) {
        console.error("Visitor API Error:", error);
      } finally {
        setLoadingVisitors(false);
      }
    };

    getVisitors();
  }, []);

  // ===============================
  // LOGOUT
  // ===============================
  const logout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/login";
  };

  // ===============================
  // SIDEBAR MENU
  // ===============================
  const menuItems = [
    {
      title: "Dashboard",
      icon: <FaSchool />,
      link: "/admin-dashboard",
      color: "from-indigo-500 to-blue-600",
      desc: "Overview & analytics",
    },

    {
      title: "Notices",
      icon: <FaBell />,
      link: "/admin-notices",
      color: "from-red-500 to-pink-500",
      desc: "Manage announcements",
    },

    {
      title: "Gallery",
      icon: <FaImages />,
      link: "/admin-gallery",
      color: "from-yellow-500 to-orange-500",
      desc: "Upload photos",
    },

    {
      title: "Events",
      icon: <MdEventAvailable />,
      link: "/admin-events",
      color: "from-purple-500 to-indigo-500",
      desc: "Manage events",
    },

    {
      title: "Upcoming",
      icon: <FaCalendarAlt />,
      link: "/admin-upcoming-events",
      color: "from-green-500 to-emerald-600",
      desc: "Future events",
    },

    {
      title: "Fees",
      icon: <FaMoneyBillWave />,
      link: "/admin-fee",
      color: "from-teal-500 to-cyan-600",
      desc: "Fee system",
    },

    {
      title: "Admission",
      icon: <FaUserGraduate />,
      link: "/admin/admission",
      color: "from-blue-500 to-indigo-600",
      desc: "Admissions",
    },

    {
      title: "Infrastructure",
      icon: <FaSchool />,
      link: "/admin/infra",
      color: "from-gray-500 to-gray-700",
      desc: "School infra",
    },

    {
      title: "Enquiry",
      icon: <FaClipboardList />,
      link: "/admin/enq",
      color: "from-pink-500 to-rose-500",
      desc: "User queries",
    },

    {
      title: "Moments",
      icon: <FaRegSmile />,
      link: "/admin/moments",
      color: "from-orange-500 to-red-500",
      desc: "Memories",
    },

    {
      title: "Payment details",
      icon: <FaMoneyBillWave />,
      link: "/admin/payment",
      color: "from-orange-500 to-red-500",
      desc: "Update payment details",
    },

    {
      title: "Update Library",
      icon: <FaSchool />,
      link: "/admin/Library",
      color: "from-cyan-500 to-blue-600",
      desc: "Update library",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">

      {/* ===============================
          MOBILE MENU BUTTON
      =============================== */}

      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 bg-indigo-600 text-white p-3 rounded-xl shadow-lg md:hidden"
      >
        <FaBars />
      </button>

      {/* ===============================
          MOBILE OVERLAY
      =============================== */}

      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
        />
      )}

      {/* ===============================
          SIDEBAR
      =============================== */}

      <div
        className={`
          fixed top-0 left-0 h-full w-64
          bg-white/90 backdrop-blur-lg
          shadow-xl p-6 z-40
          transition-transform duration-300
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
          md:translate-x-0
        `}
      >

        <h2 className="text-2xl font-bold mb-8 text-indigo-700">
          Admin Panel
        </h2>

        <ul className="space-y-3">

          {menuItems.map((item, i) => {

            const active =
              location.pathname === item.link;

            return (
              <li key={i}>

                <Link
                  to={item.link}
                  onClick={() => setSidebarOpen(false)}
                  className={`
                    flex items-center gap-3
                    p-3 rounded-xl
                    transition-all
                    ${
                      active
                        ? "bg-indigo-600 text-white shadow-lg"
                        : "hover:bg-indigo-100"
                    }
                  `}
                >

                  <span className="text-xl">
                    {item.icon}
                  </span>

                  <span>
                    {item.title}
                  </span>

                </Link>

              </li>
            );
          })}

        </ul>

        <button
          onClick={logout}
          className="mt-10 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>

      </div>

      {/* ===============================
          MAIN CONTENT
      =============================== */}

      <div className="flex-1 md:ml-64 p-6">

        {/* ===============================
            TOP BAR
        =============================== */}

        <div className="flex justify-between items-center mb-8">

          <h1 className="text-3xl font-bold text-gray-800">
            Dashboard
          </h1>

          <div className="flex items-center gap-4">

            <div className="bg-white px-4 py-2 rounded-lg shadow">
              Admin
            </div>

            <button
              onClick={logout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>

          </div>

        </div>

        {/* ===============================
            VISITOR CARD
        =============================== */}

        <div className="mb-8">

          <div className="relative overflow-hidden bg-white rounded-2xl shadow-lg p-6">

            {/* Decorative background */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-indigo-100 rounded-full opacity-60" />

            <div className="relative flex items-center justify-between">

              <div>

                <p className="text-gray-500 text-sm font-medium">
                  Total Website Visitors
                </p>

                <h2 className="text-4xl font-bold text-indigo-600 mt-2">

                  {loadingVisitors
                    ? "..."
                    : visitors.toLocaleString()}

                </h2>

                <p className="text-gray-400 text-sm mt-2">
                  Visitors till now
                </p>

              </div>

              <div className="bg-indigo-100 text-indigo-600 p-5 rounded-2xl">

                <FaUsers className="text-3xl" />

              </div>

            </div>

          </div>

        </div>

        {/* ===============================
            ADMIN MENU CARDS
        =============================== */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {menuItems.map((item, i) => (

            <Link to={item.link} key={i}>

              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -5,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="rounded-2xl p-6 text-white shadow-lg relative overflow-hidden"
              >

                {/* Background */}
                <div
                  className={`
                    absolute inset-0
                    bg-gradient-to-br
                    ${item.color}
                  `}
                />

                {/* Content */}
                <div className="relative z-10">

                  <div className="text-3xl mb-3">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="text-sm opacity-90">
                    {item.desc}
                  </p>

                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition" />

              </motion.div>

            </Link>

          ))}

        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;