import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

/* ================= IMAGES ================= */

import desktopImg from "../../assets/bhat12.png";

import mobileImg1 from "../../assets/aryy1.png";
import mobileImg2 from "../../assets/aryy2.png";

const desktopImages = [desktopImg];
const mobileImages = [mobileImg1, mobileImg2];

/* ================= DATA ================= */

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

/* ================= PARTICLES ================= */

const particles = Array.from({ length: 25 });

/* ================= HERO ================= */

const Herosection = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const [openChat, setOpenChat] = useState(false);
  const [chatStep, setChatStep] = useState("main");
  const [selectedClass, setSelectedClass] = useState("");

  /* ================= SCREEN ================= */

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ================= SLIDER ================= */

  useEffect(() => {
    const activeImages = isMobile ? mobileImages : desktopImages;

    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === activeImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [isMobile]);

  const activeImages = isMobile ? mobileImages : desktopImages;

  return (
    <section className="relative w-full min-h-[92vh] overflow-hidden font-outfit">

      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}

      <AnimatePresence mode="wait">

        <motion.img
          key={`${isMobile}-${current}`}
          src={activeImages[current]}
          alt="Aryabhatta National Public School"
          initial={{
            opacity: 0,
            scale: 1.12,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.05,
          }}
          transition={{
            duration: 1.4,
            ease: "easeInOut",
          }}
          className="absolute inset-0 w-full h-full object-cover"
        />

      </AnimatePresence>


      {/* =====================================================
          CINEMATIC DARK OVERLAY
      ===================================================== */}

      <div className="absolute inset-0 bg-black/55" />

      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-black/80
          via-black/35
          to-black/75
        "
      />


      {/* =====================================================
          TRICOLOR LIGHT GLOW
      ===================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
            absolute
            -top-40
            -left-40
            w-[500px]
            h-[500px]
            rounded-full
            bg-orange-500/20
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -bottom-40
            -right-40
            w-[500px]
            h-[500px]
            rounded-full
            bg-green-500/20
            blur-[120px]
          "
        />

      </div>


      {/* =====================================================
          TOP TRICOLOR BAR
      ===================================================== */}

      <div className="absolute top-0 left-0 w-full z-30">

        <div className="h-1 bg-orange-500" />

        <div className="h-1 bg-white" />

        <div className="h-1 bg-green-600" />

      </div>


      {/* =====================================================
          FLOATING PARTICLES
      ===================================================== */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">

        {particles.map((_, index) => {

          const colors = [
            "bg-orange-400",
            "bg-white",
            "bg-green-400",
          ];

          return (
            <motion.span
              key={index}
              initial={{
                opacity: 0,
                y: "110vh",
                x: `${Math.random() * 100}vw`,
              }}
              animate={{
                opacity: [0, 0.8, 0],
                y: "-10vh",
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8 + Math.random() * 6,
                repeat: Infinity,
                delay: Math.random() * 6,
                ease: "linear",
              }}
              className={`
                absolute
                w-1.5
                h-1.5
                rounded-full
                ${colors[index % 3]}
              `}
            />
          );
        })}

      </div>


      {/* =====================================================
          FLYING BIRDS
      ===================================================== */}

      <motion.div
        initial={{ x: "-20vw", y: 50, opacity: 0 }}
        animate={{
          x: "120vw",
          y: -50,
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          top-[18%]
          left-0
          text-white/70
          text-xl
          tracking-[8px]
          z-10
        "
      >
        🕊️ 🕊️
      </motion.div>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-20
          min-h-[92vh]
          flex
          items-center
          justify-center
          px-4
          py-20
        "
      >

        <div className="w-full max-w-6xl mx-auto text-center text-white">


          {/* =================================================
              PREMIUM INDEPENDENCE DAY BADGE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: -30,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
            }}
            className="flex justify-center mb-5"
          >

            <div
              className="
                relative
                px-6
                py-2.5
                rounded-full
                bg-white/10
                backdrop-blur-xl
                border
                border-white/30
                shadow-[0_0_30px_rgba(255,255,255,0.12)]
                overflow-hidden
              "
            >

              {/* Animated shine */}

              <motion.div
                animate={{
                  x: ["-150%", "150%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
                className="
                  absolute
                  inset-0
                  w-1/2
                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent
                  skew-x-12
                "
              />

              <span className="relative z-10 text-xs sm:text-sm md:text-base font-bold tracking-wide">

                🇮🇳 &nbsp; 15 AUGUST • 79TH INDEPENDENCE DAY &nbsp; 🇮🇳

              </span>

            </div>

          </motion.div>


          {/* =================================================
              SCHOOL NAME
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.9,
            }}
          >

            <p
              className="
                text-xs
                sm:text-sm
                md:text-base
                uppercase
                tracking-[0.35em]
                text-gray-200
                font-medium
              "
            >
              Welcome to
            </p>


            <h1
              className="
                mt-3
                text-4xl
                sm:text-5xl
                md:text-7xl
                font-black
                leading-[1.05]
                tracking-tight
              "
            >

              <span className="text-white drop-shadow-2xl">
                Aryabhatta
              </span>

              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-orange-400
                  via-white
                  to-green-400
                  bg-clip-text
                  text-transparent
                  drop-shadow-lg
                "
              >
                National Public School
              </span>

            </h1>


            {/* LOCATION */}

            <p
              className="
                mt-3
                text-base
                sm:text-lg
                md:text-2xl
                font-semibold
                text-gray-200
              "
            >
              Semara Bargon Deoraj
            </p>

          </motion.div>


          {/* =================================================
              ASHOKA CHAKRA
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.4,
              duration: 0.8,
            }}
            className="flex justify-center my-5"
          >

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                w-12
                h-12
                sm:w-14
                sm:h-14
                rounded-full
                border-2
                border-blue-300/80
                flex
                items-center
                justify-center
                text-blue-200
                text-3xl
                shadow-[0_0_25px_rgba(96,165,250,0.25)]
              "
            >
              ☸
            </motion.div>

          </motion.div>


          {/* =================================================
              PATRIOTIC MESSAGE
          ================================================= */}

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
              delay: 0.5,
              duration: 0.8,
            }}
          >

            <h2
              className="
                text-xl
                sm:text-2xl
                md:text-3xl
                font-bold
              "
            >
              Celebrating the Spirit of{" "}

              <span className="text-orange-400">
                Freedom
              </span>
              ,{" "}

              <span className="text-white">
                Unity
              </span>{" "}
              &amp;{" "}

              <span className="text-green-400">
                Patriotism
              </span>
            </h2>


            <p
              className="
                mt-3
                max-w-2xl
                mx-auto
                text-sm
                sm:text-base
                md:text-lg
                text-gray-200
                leading-relaxed
              "
            >
              This Independence Day, let us inspire our students
              to dream bigger, learn better and contribute towards
              building a stronger and brighter India.
            </p>

          </motion.div>


          {/* =================================================
              TRICOLOR LINE
          ================================================= */}

          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: "180px",
            }}
            transition={{
              delay: 0.7,
              duration: 0.8,
            }}
            className="
              mx-auto
              mt-5
              h-1.5
              rounded-full
              overflow-hidden
              flex
            "
          >

            <div className="w-1/3 bg-orange-500" />
            <div className="w-1/3 bg-white" />
            <div className="w-1/3 bg-green-600" />

          </motion.div>


          {/* =================================================
              BUTTONS
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 0.8,
            }}
            className="
              mt-7
              flex
              flex-col
              sm:flex-row
              justify-center
              gap-3
            "
          >

            <Link to="/admission-process">

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 10px 35px rgba(249,115,22,0.35)",
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  w-full
                  sm:w-auto
                  px-8
                  py-3.5
                  rounded-full
                  font-bold
                  text-white
                  bg-gradient-to-r
                  from-orange-500
                  to-orange-400
                  shadow-xl
                  cursor-pointer
                "
              >
                🎓 View Admissions
              </motion.button>

            </Link>


            <Link to="/academics/prospectus">

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  w-full
                  sm:w-auto
                  px-8
                  py-3.5
                  rounded-full
                  font-semibold
                  text-white
                  border
                  border-white/40
                  bg-white/10
                  backdrop-blur-xl
                  hover:bg-white/20
                  transition
                "
              >
                📖 Download Prospectus
              </motion.button>

            </Link>

          </motion.div>


          {/* =================================================
              PATRIOTIC FOOTER TEXT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1,
              duration: 1,
            }}
            className="mt-7"
          >

            <p
              className="
                text-xs
                sm:text-sm
                md:text-base
                font-bold
                tracking-[0.12em]
              "
            >

              <span className="text-orange-400">
                JAI HIND
              </span>

              <span className="mx-2 text-white/60">
                •
              </span>

              <span className="text-white">
                VANDE MATARAM
              </span>

              <span className="mx-2 text-white/60">
                •
              </span>

              <span className="text-green-400">
                PROUD TO BE INDIAN
              </span>

            </p>

          </motion.div>

        </div>

      </div>


      {/* =====================================================
          DECORATIVE ASHOKA CHAKRA
      ===================================================== */}

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          hidden
          lg:flex
          right-[-100px]
          top-[15%]
          w-[300px]
          h-[300px]
          rounded-full
          border
          border-blue-300/10
          items-center
          justify-center
          text-[260px]
          text-blue-300/10
          z-10
        "
      >
        ☸
      </motion.div>


      {/* =====================================================
          BOTTOM TRICOLOR WAVE
      ===================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-20
          z-20
          pointer-events-none
        "
      >

        <div
          className="
            absolute
            bottom-0
            left-0
            w-full
            h-1
            bg-orange-500
          "
        />

        <div
          className="
            absolute
            bottom-1
            left-0
            w-full
            h-1
            bg-white
          "
        />

        <div
          className="
            absolute
            bottom-2
            left-0
            w-full
            h-1
            bg-green-600
          "
        />

      </div>


      {/* =====================================================
          WHATSAPP
      ===================================================== */}

      <motion.a
        href="https://wa.me/919931979868"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{
          scale: 1.1,
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
          bg-green-500
          text-white
          p-4
          rounded-full
          shadow-2xl
          z-50
        "
      >

        <FaWhatsapp size={26} />

      </motion.a>


      {/* =====================================================
          QUICK HELP
      ===================================================== */}

      <motion.button
        whileHover={{
          scale: 1.05,
        }}
        onClick={() => {
          setOpenChat(true);
          setChatStep("main");
          setSelectedClass("");
        }}
        className="
          fixed
          bottom-20
          right-4
          md:bottom-24
          md:right-6
          bg-gradient-to-r
          from-orange-500
          to-yellow-400
          text-white
          px-4
          py-3
          rounded-full
          shadow-xl
          z-50
          font-semibold
          text-sm
        "
      >
        Quick Help
      </motion.button>


      {/* =====================================================
          CHAT MODAL
      ===================================================== */}

      <AnimatePresence>

        {openChat && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              bg-black/70
              backdrop-blur-sm
              z-[100]
              flex
              items-center
              justify-center
              px-4
            "
          >

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 20,
              }}
              className="
                bg-white
                w-full
                max-w-md
                rounded-2xl
                shadow-2xl
                max-h-[80vh]
                flex
                flex-col
                overflow-hidden
              "
            >

              {/* TRICOLOR */}

              <div className="h-1 bg-orange-500" />
              <div className="h-1 bg-white" />
              <div className="h-1 bg-green-600" />


              {/* HEADER */}

              <div
                className="
                  bg-gradient-to-r
                  from-orange-500
                  to-yellow-400
                  px-5
                  py-4
                  flex
                  justify-between
                  text-white
                "
              >

                <b>
                  🇮🇳 School Assistant
                </b>

                <button
                  onClick={() => setOpenChat(false)}
                  className="hover:scale-110 transition"
                >
                  ✖
                </button>

              </div>


              {/* BODY */}

              <div
                className="
                  p-4
                  overflow-y-auto
                  flex-1
                  space-y-3
                  text-sm
                "
              >

                <div className="bg-gray-100 p-3 rounded-xl">

                  <b>Namaste 🙏</b>

                  <br />

                  Mai aapki kya madad kar sakta hoon?

                </div>


                {chatStep === "main" && (
                  <>

                    <button
                      onClick={() => setChatStep("admission")}
                      className="
                        w-full
                        border
                        rounded-lg
                        py-2.5
                        hover:bg-orange-50
                        transition
                      "
                    >
                      🎓 Admission Information
                    </button>

                    <button
                      onClick={() => setChatStep("fee")}
                      className="
                        w-full
                        border
                        rounded-lg
                        py-2.5
                        hover:bg-orange-50
                        transition
                      "
                    >
                      💰 Fee Structure
                    </button>

                    <button
                      onClick={() => setChatStep("facilities")}
                      className="
                        w-full
                        border
                        rounded-lg
                        py-2.5
                        hover:bg-green-50
                        transition
                      "
                    >
                      🏫 School Facilities
                    </button>

                    <button
                      onClick={() => setChatStep("executive")}
                      className="
                        w-full
                        border
                        rounded-lg
                        py-2.5
                        hover:bg-green-50
                        transition
                      "
                    >
                      📞 Talk with Executive
                    </button>

                  </>
                )}


                {(chatStep === "admission" ||
                  chatStep === "fee") && (

                  <div className="space-y-2">

                    {classList.map((cls) => (

                      <button
                        key={cls}
                        onClick={() =>
                          setSelectedClass(cls)
                        }
                        className="
                          w-full
                          border
                          rounded-lg
                          py-2
                          hover:bg-orange-50
                          transition
                        "
                      >
                        {cls}
                      </button>

                    ))}

                  </div>

                )}


                {selectedClass && (

                  <div
                    className="
                      bg-gray-100
                      p-4
                      rounded-xl
                      border-l-4
                      border-orange-500
                    "
                  >

                    {chatStep === "admission"
                      ? admissionInfo[selectedClass]
                      : feeStructure[selectedClass]}

                  </div>

                )}


                {chatStep === "facilities" && (

                  <div className="bg-gray-100 p-4 rounded-xl">

                    <ul className="list-disc ml-5 space-y-1">

                      {schoolFacilities.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}

                    </ul>

                  </div>

                )}


                {chatStep === "executive" && (

                  <div className="bg-gray-100 p-4 rounded-xl">

                    Call / WhatsApp:

                    <br />

                    <b className="text-green-600">
                      7352205506
                    </b>

                  </div>

                )}


                {chatStep !== "main" && (

                  <button
                    onClick={() => {
                      setChatStep("main");
                      setSelectedClass("");
                    }}
                    className="
                      w-full
                      border
                      rounded-lg
                      py-2.5
                      hover:bg-gray-100
                    "
                  >
                    ⬅ Back
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