import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLock,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/araylogo.png";
import { Link, Links } from "react-router-dom";
import { label, path } from "framer-motion/client";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const navItems = [
    { name: "HOME", path: "/" },
    {
      name: "ABOUT US",
      subItems: [
        { label: "About School", path: "/about-school" },
        { label: "Our Philosophy", path: "OurPhilosophy"},
        { label: "Vision&Mission", path: "/visionmission" },
        { label: "Our Infrastructure", path: "/Infrastructure" },
        { label: "Our Faculty", path: "/teacher" },
        { label: "RTE", path: "/rte" },
      ],
    },
    {
      name: "ACADEMICS",
      subItems: [
        { label: "School-Section", path: "/academics/section" },
        { label: "Procpectus", path: "/academics/prospectus" },
      ],
    },
    {
      name: "ADMISSION",
      subItems: [
        { label: "Admission Process", path: "/admission-process" },
        { label: "Online Registration", path: "/online-registration" },
        { label: "Admission Notification", path: "/notification" },
        { label: "Parents Enquiry Form", path: "/enquiry-form" },
      ],
    },
    {
      name: "FACILITIES",
      subItems: [
        { label: "Library", path: "/facilities/library" },
        { label: "Transport", path: "/facilities/transport" },
        { label: "Sports", path: "/facilities/sports" },
      ],
    },
    { name: "GALLERY", path: "/gallery" },
    {
      name: "EXTRA CURRICULUM",
      subItems: [
        { label: "Music", path: "/extra-curriculum/music" },
        { label: "Dance", path: "/extra-curriculum/dance" },
        { label: "Yoga", path: "/extra-curriculum/yoga" },
      ],
    },
    {
      name: "MANDATORY DETAILS",
      subItems: [
        { label: "CBSE Info", path: "/mandatory/cbse-info" },
        { label: "Fee Structure", path: "/mandatory/fee" },
        { label: "Student Details", path: "/mandatory/student"}

      ],
    },
  ];

  return (
    <header className="w-full shadow-md font-outfit top-0 z-50">

      {/* Top Bar */}
      <div className="bg-yellow-500 text-white text-xs md:text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-2">
              <FaPhoneAlt className="text-yellow-400" />
              <span>+91-99319 79868</span>
            </span>
            <span className="flex items-center space-x-2">
              <FaEnvelope className="text-yellow-400" />
              <span>araybhatnationalSchool@.in</span>
            </span>
          </div>

          <div className="flex items-center space-x-6">
          <Link to={"/online-registration"}>
             <span className="cursor-pointer hover:text-yellow-400 transition">
              CBSE
            </span>
          </Link>
          
            <Link to="/login">
  <span className="flex items-center space-x-2 cursor-pointer hover:text-yellow-400 transition">
    <FaLock /> <span>Login</span>
  </span>
</Link>
            <Link to={"/online-registration"}>
               <button className="bg-yellow-400 text-white font-semibold px-5 py-1 rounded-sm hover:bg-yellow-300 transition">
              APPLY NOW
            </button>
            </Link>
           
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2 md:gap-3 min-w-0">
          <Link to={"/"}>
            <img src={logo} alt="logo" className="h-14 md:h-20 w-auto" />
            </Link>
            <h1 className="text-sm font-bold text-green-800 uppercase md:hidden truncate">
              Aryabhatta National Public School
            </h1>
          </div>

          <div className="text-center flex-1 hidden md:block">
            <h1 className="text-3xl font-extrabold text-green-800 uppercase">
              Aryabhatta National Public School
            </h1>
            <h2 className="text-xl font-bold text-purple-800">
              Inspire to Dream Learn to Lead with Excellence

            </h2>
          </div>

          <button
            className="lg:hidden text-green-800 text-2xl"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Desktop Navbar */}
      <nav className="bg-gradient-to-r from-green-800 via-green-700 to-green-900 hidden lg:block">
        <ul className="max-w-7xl mx-auto flex justify-between px-4 text-white font-semibold">
          {navItems.map((item, i) => (
            <li key={i} className="px-3 py-3 relative group">
              {item.path ? (
                <Link to={item.path}>{item.name}</Link>
              ) : (
                item.name
              )}

              {item.subItems && (
                <ul className="absolute top-full left-0 mt-3 bg-white text-gray-800 shadow-xl rounded-xl min-w-[240px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  {item.subItems.map((sub, idx) => (
                    <li key={idx} className="px-5 py-3 text-sm hover:bg-green-50">
                      <Link to={sub.path}>{sub.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.35 }}
              className="fixed top-0 left-0 w-full bg-white z-50 rounded-b-3xl lg:hidden"
            >
              <div className="flex items-center gap-2 px-4 py-4 border-b">
                <img src={logo} alt="logo" className="h-11 w-auto" />
                <h2 className="font-semibold text-green-800 text-sm flex-1 truncate">
                  Araybhat National Public School
                </h2>
                <button onClick={() => setMenuOpen(false)}>
                  <FaTimes className="text-xl text-green-800" />
                </button>
              </div>

              <ul className="divide-y">
                {navItems.map((item, i) => (
                  <li key={i} className="px-5 py-4">
                    {item.path ? (
                      <Link
                        to={item.path}
                        onClick={() => setMenuOpen(false)}
                        className="block font-semibold text-gray-800"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <>
                        <div
                          className="flex justify-between items-center font-semibold"
                          onClick={() =>
                            setOpenSubmenu(openSubmenu === i ? null : i)
                          }
                        >
                          {item.name}
                          <span>
                            {openSubmenu === i ? "−" : "+"}
                          </span>
                        </div>

                        {item.subItems && openSubmenu === i && (
                          <ul className="mt-3 ml-4 space-y-3">
                            {item.subItems.map((sub, idx) => (
                              <li key={idx}>
                                <Link
                                  to={sub.path}
                                  onClick={() => setMenuOpen(false)}
                                  className="text-sm text-gray-700 hover:text-green-700"
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    )}
                  </li>
                ))}
              </ul>

              <div className="p-4">
              <Link to={"/login"}>
                <button className="w-full bg-green-800 text-white py-3 rounded-xl font-semibold">
                  Admin LogIn
                </button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
