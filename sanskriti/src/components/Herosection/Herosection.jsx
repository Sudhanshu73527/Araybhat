import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWhatsapp,
  FaArrowRight,
  FaGraduationCap,
  FaPhone,
  FaCheck,
} from "react-icons/fa";
import { Link } from "react-router-dom";

/* =========================================================
   IMAGES
========================================================= */

import desktopImg from "../../assets/bhat12.png";
import mobileImg1 from "../../assets/aryy1.png";
import mobileImg2 from "../../assets/aryy2.png";

const desktopImages = [desktopImg];
const mobileImages = [mobileImg1, mobileImg2];

/* =========================================================
   ADMISSION DATA
========================================================= */

const classList = [
  "Nursery",
  "LKG",
  "UKG",
  "Class 1",
  "Class 2",
  "Class 3",
  "Class 4",
  "Class 5",
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
];

const admissionInfo = {
  Nursery: "Age 3+ required. Birth certificate & Aadhaar needed.",
  LKG: "Age 4+. No TC required.",
  UKG: "Age 5+. Basic interaction.",
  "Class 1": "TC required. Basic assessment.",
  "Class 2": "TC + Report card mandatory.",
  "Class 3": "Limited seats available.",
  "Class 4": "Admission on availability.",
  "Class 5": "Written assessment required.",
  "Class 6": "Written + Oral test.",
  "Class 7": "Subject-wise test.",
  "Class 8": "Limited intake.",
  "Class 9": "Board syllabus assessment.",
  "Class 10": "As per CBSE norms.",
};

const feeStructure = {
  Nursery: "₹1200 / month",
  LKG: "₹1300 / month",
  UKG: "₹1400 / month",
  "Class 1": "₹1500 / month",
  "Class 2": "₹1600 / month",
  "Class 3": "₹1700 / month",
  "Class 4": "₹1800 / month",
  "Class 5": "₹1900 / month",
  "Class 6": "₹2000 / month",
  "Class 7": "₹2100 / month",
  "Class 8": "₹2200 / month",
  "Class 9": "₹2500 / month",
  "Class 10": "₹2800 / month",
};

const schoolFacilities = [
  "Smart Classrooms",
  "Well-stocked Library",
  "Science & Computer Labs",
  "Playground & Sports Facilities",
  "Safe & Secure Campus",
  "Experienced Teachers",
];

/* =========================================================
   HERO SECTION
========================================================= */

const Herosection = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const [openChat, setOpenChat] = useState(false);
  const [chatStep, setChatStep] = useState("main");
  const [selectedClass, setSelectedClass] = useState("");

  /* =======================================================
     SCREEN SIZE
  ======================================================= */

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* =======================================================
     ACTIVE IMAGES
  ======================================================= */

  const activeImages = isMobile ? mobileImages : desktopImages;

  /* =======================================================
     RESET SLIDER
  ======================================================= */

  useEffect(() => {
    setCurrent(0);
  }, [isMobile]);

  /* =======================================================
     IMAGE SLIDER
  ======================================================= */

  useEffect(() => {
    if (activeImages.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === activeImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [isMobile]);

  /* =======================================================
     CHAT FUNCTIONS
  ======================================================= */

  const openQuickHelp = () => {
    setOpenChat(true);
    setChatStep("main");
    setSelectedClass("");
  };

  const closeQuickHelp = () => {
    setOpenChat(false);
    setChatStep("main");
    setSelectedClass("");
  };

  const goBack = () => {
    setChatStep("main");
    setSelectedClass("");
  };

  /* =======================================================
     JSX
  ======================================================= */

  return (
    <section className="relative w-full min-h-[88vh] h-[88vh] overflow-hidden font-outfit bg-black">

      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}

      <AnimatePresence mode="wait">
        <motion.img
          key={`${isMobile}-${current}`}
          src={activeImages[current]}
          alt="Aryabhatta National Public School Campus"
          initial={{
            opacity: 0,
            scale: 1.05,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* =====================================================
          SIMPLE DARK OVERLAY
      ===================================================== */}

      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20" />

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div className="relative z-10 min-h-[88vh] h-full flex items-center">

        <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="max-w-3xl text-white">

            {/* SMALL LABEL */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="mb-5"
            >
              <span className="inline-flex items-center gap-2 text-sm font-medium text-yellow-300">

                <span className="w-7 h-[2px] bg-yellow-400" />

                Excellence in Education

              </span>
            </motion.div>

            {/* HEADING */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.1,
                duration: 0.7,
              }}
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                font-bold
                leading-[1.05]
                tracking-tight
              "
            >

              Shaping Young Minds
              <br />

              <span className="text-yellow-400">
                Building Bright Futures.
              </span>

            </motion.h1>

            {/* SCHOOL NAME */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.7,
              }}
              className="mt-5"
            >

              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">

                Aryabhatta National Public School

              </h2>

              <p className="mt-1 text-sm sm:text-base text-white/70">

                Semara Bargon Deoraj

              </p>

            </motion.div>

            {/* DESCRIPTION */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
                duration: 0.7,
              }}
              className="
                mt-6
                max-w-2xl
                text-sm
                sm:text-base
                md:text-lg
                leading-relaxed
                text-white/80
              "
            >
              We provide a nurturing and modern learning environment
              where students grow with knowledge, confidence,
              discipline and creativity.
            </motion.p>

            {/* BUTTONS */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.45,
                duration: 0.7,
              }}
              className="
                mt-8
                flex
                flex-col
                sm:flex-row
                gap-3
              "
            >

              {/* ADMISSION */}

              <Link to="/admission-process">

                <motion.button
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    w-full
                    sm:w-auto
                    flex
                    items-center
                    justify-center
                    gap-3
                    px-7
                    py-3.5
                    rounded-lg
                    bg-yellow-400
                    hover:bg-yellow-300
                    text-black
                    font-semibold
                    shadow-lg
                    transition
                    cursor-pointer
                  "
                >

                  <FaGraduationCap />

                  View Admissions

                  <FaArrowRight className="text-xs" />

                </motion.button>

              </Link>

              {/* PROSPECTUS */}

              <Link to="/academics/prospectus">

                <motion.button
                  whileHover={{
                    y: -2,
                    backgroundColor: "rgba(255,255,255,0.12)",
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    w-full
                    sm:w-auto
                    px-7
                    py-3.5
                    rounded-lg
                    border
                    border-white/30
                    bg-white/5
                    backdrop-blur-sm
                    text-white
                    font-semibold
                    transition
                    cursor-pointer
                  "
                >

                  Download Prospectus

                </motion.button>

              </Link>

            </motion.div>

            {/* TRUST POINTS */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.7,
                duration: 0.8,
              }}
              className="
                mt-8
                flex
                flex-wrap
                gap-x-6
                gap-y-3
                text-xs
                sm:text-sm
                text-white/70
              "
            >

              <span className="flex items-center gap-2">
                <FaCheck className="text-yellow-400" />
                Academic Excellence
              </span>

              <span className="flex items-center gap-2">
                <FaCheck className="text-yellow-400" />
                Experienced Faculty
              </span>

              <span className="flex items-center gap-2">
                <FaCheck className="text-yellow-400" />
                Holistic Development
              </span>

            </motion.div>

          </div>

        </div>

      </div>

      {/* =====================================================
          SLIDER INDICATORS
      ===================================================== */}

      {activeImages.length > 1 && (
        <div className="absolute bottom-8 left-5 sm:left-8 lg:left-12 z-20 flex gap-2">

          {activeImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`
                h-1 rounded-full transition-all duration-300
                ${
                  current === index
                    ? "w-8 bg-yellow-400"
                    : "w-3 bg-white/50"
                }
              `}
            />
          ))}

        </div>
      )}

      {/* =====================================================
          WHATSAPP
      ===================================================== */}

      <motion.a
        href="https://wa.me/919931979868"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className="
          fixed
          bottom-5
          right-4
          md:bottom-6
          md:right-6
          w-14
          h-14
          flex
          items-center
          justify-center
          bg-green-500
          hover:bg-green-600
          text-white
          rounded-full
          shadow-2xl
          z-50
          transition
        "
        aria-label="Contact us on WhatsApp"
      >

        <FaWhatsapp size={27} />

      </motion.a>

      {/* =====================================================
          QUICK HELP
      ===================================================== */}

      <motion.button
        whileHover={{
          y: -2,
        }}
        whileTap={{
          scale: 0.96,
        }}
        onClick={openQuickHelp}
        className="
          fixed
          bottom-[84px]
          right-4
          md:bottom-24
          md:right-6
          bg-yellow-400
          hover:bg-yellow-300
          text-black
          px-4
          py-2.5
          rounded-lg
          shadow-xl
          z-50
          font-semibold
          text-sm
          transition
          cursor-pointer
        "
      >

        Quick Help

      </motion.button>

      {/* =====================================================
          QUICK HELP MODAL
      ===================================================== */}

      <AnimatePresence>

        {openChat && (

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              fixed
              inset-0
              z-[100]
              bg-black/70
              backdrop-blur-sm
              flex
              items-center
              justify-center
              px-4
            "
            onClick={closeQuickHelp}
          >

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 15,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 15,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={(e) => e.stopPropagation()}
              className="
                bg-white
                w-full
                max-w-md
                rounded-2xl
                overflow-hidden
                shadow-2xl
                max-h-[85vh]
                flex
                flex-col
              "
            >

              {/* MODAL HEADER */}

              <div className="bg-yellow-400 px-5 py-4 flex items-center justify-between">

                <div>

                  <p className="text-xs text-black/60 uppercase tracking-wider">
                    School Assistant
                  </p>

                  <h3 className="text-lg font-bold text-black">
                    How can we help?
                  </h3>

                </div>

                <button
                  onClick={closeQuickHelp}
                  className="
                    w-9
                    h-9
                    rounded-full
                    bg-black/10
                    hover:bg-black/20
                    transition
                  "
                >
                  ✕
                </button>

              </div>

              {/* MODAL BODY */}

              <div className="p-4 overflow-y-auto space-y-3">

                <div className="bg-gray-100 rounded-xl p-4 text-gray-700">

                  <b>Namaste 🙏</b>

                  <br />

                  Mai aapki kya madad kar sakta hoon?

                </div>

                {/* MAIN */}

                {chatStep === "main" && (

                  <div className="space-y-2">

                    <button
                      onClick={() => setChatStep("admission")}
                      className="
                        w-full
                        p-3
                        rounded-xl
                        border
                        border-gray-200
                        text-left
                        hover:bg-yellow-50
                        hover:border-yellow-300
                        transition
                      "
                    >
                      🎓 Admission Information
                    </button>

                    <button
                      onClick={() => setChatStep("fee")}
                      className="
                        w-full
                        p-3
                        rounded-xl
                        border
                        border-gray-200
                        text-left
                        hover:bg-yellow-50
                        hover:border-yellow-300
                        transition
                      "
                    >
                      💰 Fee Structure
                    </button>

                    <button
                      onClick={() => setChatStep("facilities")}
                      className="
                        w-full
                        p-3
                        rounded-xl
                        border
                        border-gray-200
                        text-left
                        hover:bg-yellow-50
                        hover:border-yellow-300
                        transition
                      "
                    >
                      🏫 School Facilities
                    </button>

                    <button
                      onClick={() => setChatStep("executive")}
                      className="
                        w-full
                        p-3
                        rounded-xl
                        border
                        border-gray-200
                        text-left
                        hover:bg-yellow-50
                        hover:border-yellow-300
                        transition
                      "
                    >
                      📞 Talk with Executive
                    </button>

                  </div>
                )}

                {/* CLASS SELECTION */}

                {(chatStep === "admission" ||
                  chatStep === "fee") && (

                  <div className="grid grid-cols-2 gap-2">

                    {classList.map((cls) => (

                      <button
                        key={cls}
                        onClick={() => setSelectedClass(cls)}
                        className="
                          p-2.5
                          rounded-xl
                          border
                          border-gray-200
                          hover:bg-yellow-50
                          hover:border-yellow-300
                          transition
                        "
                      >
                        {cls}
                      </button>

                    ))}

                  </div>
                )}

                {/* RESULT */}

                {selectedClass && (

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="
                      p-4
                      bg-gray-50
                      rounded-xl
                      border
                      border-yellow-200
                    "
                  >

                    <p className="font-bold text-gray-900">
                      {selectedClass}
                    </p>

                    <p className="mt-1 text-gray-600 text-sm">
                      {chatStep === "admission"
                        ? admissionInfo[selectedClass]
                        : feeStructure[selectedClass]}
                    </p>

                  </motion.div>
                )}

                {/* FACILITIES */}

                {chatStep === "facilities" && (

                  <div className="bg-gray-50 rounded-xl p-4">

                    <ul className="space-y-2">

                      {schoolFacilities.map((facility, index) => (

                        <li
                          key={index}
                          className="flex items-center gap-2 text-gray-700"
                        >

                          <span className="text-green-500">
                            <FaCheck size={12} />
                          </span>

                          {facility}

                        </li>

                      ))}

                    </ul>

                  </div>
                )}

                {/* EXECUTIVE */}

                {chatStep === "executive" && (

                  <div className="bg-gray-50 rounded-xl p-4">

                    <p className="text-xs text-gray-500 uppercase">
                      Contact School Executive
                    </p>

                    <p className="text-xl font-bold mt-1">
                      7352205506
                    </p>

                    <div className="grid grid-cols-2 gap-2 mt-4">

                      <a
                        href="tel:7352205506"
                        className="
                          flex
                          items-center
                          justify-center
                          gap-2
                          bg-black
                          text-white
                          py-2.5
                          rounded-lg
                          font-semibold
                        "
                      >
                        <FaPhone size={13} />
                        Call
                      </a>

                      <a
                        href="https://wa.me/917352205506"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex
                          items-center
                          justify-center
                          gap-2
                          bg-green-500
                          text-white
                          py-2.5
                          rounded-lg
                          font-semibold
                        "
                      >
                        <FaWhatsapp size={16} />
                        WhatsApp
                      </a>

                    </div>

                  </div>
                )}

                {/* BACK */}

                {chatStep !== "main" && (

                  <button
                    onClick={goBack}
                    className="
                      w-full
                      border
                      border-gray-200
                      rounded-xl
                      py-2.5
                      text-gray-600
                      hover:bg-gray-50
                      transition
                    "
                  >
                    ← Back
                  </button>

                )}

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
};

export default Herosection;