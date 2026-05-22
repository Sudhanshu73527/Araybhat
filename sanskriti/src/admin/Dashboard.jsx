// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaImages, FaBell, FaCalendarAlt, FaBars, FaMoneyBillWave, FaGraduationCap } from "react-icons/fa";
// import { MdEvent } from "react-icons/md";
// import { motion } from "framer-motion";

// const AdminDashboard = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const logout = () => {
//     localStorage.removeItem("adminToken");
//     window.location.href = "/login";
//   };

//   const menuItems = [
//     { title: "Dashboard", icon: <FaGraduationCap className="text-3xl text-white" />, link: "/admin-dashboard", description: "Overview of all admin tasks" },
//     { title: "Manage Notices", icon: <FaBell className="text-3xl text-white" />, link: "/admin-notices", description: "Add, edit or delete notices" },
//     { title: "Gallery", icon: <FaImages className="text-3xl text-white" />, link: "/admin-gallery", description: "Upload school photos" },
//     { title: "Event Images", icon: <MdEvent className="text-3xl text-white" />, link: "/admin-events", description: "Manage event photos" },
//     { title: "Upcoming Events", icon: <FaCalendarAlt className="text-3xl text-white" />, link: "/admin-upcoming-events", description: "Add upcoming events" },
//     { title: "Fee Management", icon: <FaMoneyBillWave className="text-3xl text-white" />, link: "/admin-fee", description: "Manage student fees" },
//     { title: "Update Admission", icon: <FaGraduationCap className="text-3xl text-white" />, link: "/admin/admission", description: "Update admission notifications" },
//     { title: "Update Infrastructure", icon: <FaGraduationCap className="text-3xl text-white" />, link: "/admin/infra", description: "Update Infrastructure Image" },
//     { title: "Enquiry", icon: <FaGraduationCap className="text-3xl text-white" />, link: "/admin/enq", description: "Check Enquiry" },
//     { title: "Update Moments", icon: <FaGraduationCap className="text-3xl text-white" />, link: "/admin/moments", description: "Update Moments" },
//     { title: "Manage Student Fee", icon: <FaGraduationCap className="text-3xl text-white" />, link: "/add", description: "Update Moments" },

//   ];

//   return (
//     <div className="flex min-h-screen bg-gray-100">

//       {/* Hamburger */}
//       <button
//         onClick={() => setSidebarOpen(!sidebarOpen)}
//         className="fixed top-4 left-4 z-[60] bg-green-800 text-white p-3 rounded-lg shadow-lg md:hidden lg:hidden"
//       >
//         <FaBars size={22} />
//       </button>

//       {/* Overlay */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black/40 z-40 md:hidden"
//           onClick={() => setSidebarOpen(false)}
//         ></div>
//       )}

//       {/* Sidebar */}
//       <div
//         className={`
//           fixed top-0 left-0 h-full w-64
//           bg-gradient-to-b from-green-800 to-green-900
//           text-white p-6 shadow-xl
//           z-50 transform transition-transform duration-300
//           ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
//           md:translate-x-0 md:static
//         `}
//       >
//         <h2 className="text-2xl font-bold mb-10">Admin Panel</h2>

//         <ul className="space-y-4">
//           {menuItems.map((item, index) => (
//             <li key={index}>
//               <Link
//                 to={item.link}
//                 className="flex items-center gap-3 p-2 hover:bg-green-700 rounded transition"
//                 onClick={() => setSidebarOpen(false)}
//               >
//                 {item.icon}
//                 <span>{item.title}</span>
//               </Link>
//             </li>
//           ))}

// <Link to={"/login"}>
//           <li>
//             <button
//               onClick={logout}
//               className="flex items-center gap-3 w-full text-left hover:bg-red-600 p-2 rounded transition"
//             >
//               Logout
//             </button>
//           </li>
//           </Link>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6 md:p-10">
//         <h1 className="text-2xl md:text-3xl font-bold mb-8">
//           Hello Admin, happy to see you again!
//         </h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {menuItems.map((item, index) => (
//             <Link to={item.link} key={index}>
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-white shadow-lg p-6 rounded-2xl hover:shadow-2xl transition cursor-pointer"
//               >
//                 <div className="mb-4 flex justify-center">{item.icon}</div>
//                 <h3 className="text-lg font-bold text-green-700 text-center">{item.title}</h3>
//                 <p className="text-gray-600 mt-2 text-sm text-center">{item.description}</p>
//               </motion.div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;















import React, { useState } from "react";
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
} from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import { motion } from "framer-motion";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const logout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/login";
  };

  const menuItems = [
    { title: "Dashboard", icon: <FaSchool />, link: "/admin-dashboard", color: "from-indigo-500 to-blue-600", desc: "Overview & analytics" },
    { title: "Notices", icon: <FaBell />, link: "/admin-notices", color: "from-red-500 to-pink-500", desc: "Manage announcements" },
    { title: "Gallery", icon: <FaImages />, link: "/admin-gallery", color: "from-yellow-500 to-orange-500", desc: "Upload photos" },
    { title: "Events", icon: <MdEventAvailable />, link: "/admin-events", color: "from-purple-500 to-indigo-500", desc: "Manage events" },
    { title: "Upcoming", icon: <FaCalendarAlt />, link: "/admin-upcoming-events", color: "from-green-500 to-emerald-600", desc: "Future events" },
    { title: "Fees", icon: <FaMoneyBillWave />, link: "/admin-fee", color: "from-teal-500 to-cyan-600", desc: "Fee system" },
    { title: "Admission", icon: <FaUserGraduate />, link: "/admin/admission", color: "from-blue-500 to-indigo-600", desc: "Admissions" },
    { title: "Infrastructure", icon: <FaSchool />, link: "/admin/infra", color: "from-gray-500 to-gray-700", desc: "School infra" },
    { title: "Enquiry", icon: <FaClipboardList />, link: "/admin/enq", color: "from-pink-500 to-rose-500", desc: "User queries" },
    { title: "Moments", icon: <FaRegSmile />, link: "/admin/moments", color: "from-orange-500 to-red-500", desc: "Memories" },
    { title: "Update Payment details", icon: <FaRegSmile />, link: "/admin/payment", color: "from-orange-500 to-red-500", desc: "Update Payment Details" },
    { title: "Update Payment details", icon: <FaRegSmile />, link: "/admin/Library", color: "from-orange-500 to-red-500", desc: "Update Payment Details" },


  ]; 

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">

      {/* Mobile Menu */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 bg-indigo-600 text-white p-3 rounded-xl shadow-lg md:hidden"
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white/80 backdrop-blur-lg shadow-xl p-6 z-40 transition-transform duration-300 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>

        <h2 className="text-2xl font-bold mb-8 text-indigo-700">Admin Panel</h2>

        <ul className="space-y-3">
          {menuItems.map((item, i) => {
            const active = location.pathname === item.link;
            return (
              <li key={i}>
                <Link
                  to={item.link}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 p-3 rounded-xl transition-all
                  ${active ? "bg-indigo-600 text-white shadow-lg" : "hover:bg-indigo-100"}`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          onClick={logout}
          className="mt-10 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Main */}
      <div className="flex-1 md:ml-64 p-6">

        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

          <div className="flex items-center gap-4">
            <div className="bg-white px-4 py-2 rounded-lg shadow">
               Admin
            </div>
            <button
              onClick={logout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {["Students", "Fees", "Events", "Notices"].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-md">
              <h2 className="text-gray-500">{item}</h2>
              <p className="text-2xl font-bold mt-2">120+</p>
            </div>
          ))}
        </div> */}

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, i) => (
            <Link to={item.link} key={i}>
              <motion.div
                whileHover={{ scale: 1.07 }}
                className="rounded-2xl p-6 text-white shadow-lg relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`}></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.desc}</p>
                </div>

                {/* Glow */}
                <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition"></div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;