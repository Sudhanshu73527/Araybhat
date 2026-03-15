import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

/* ===== IMPORT YOUR IMAGES ===== */

// Desktop Image
import desktopImg from "../../assets/bhat12.png";

// Mobile Images
import mobileImg1 from "../../assets/aryy1.png";
import mobileImg2 from "../../assets/aryy2.png";
import { Link } from "react-router-dom";

const desktopImages = [desktopImg];
const mobileImages = [mobileImg1, mobileImg2];

const classList = [
  "Nursery","LKG","UKG","Class 1","Class 2","Class 3",
  "Class 4","Class 5","Class 6","Class 7","Class 8",
  "Class 9","Class 10"
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
  "Class 10": "As per CBSE norms."
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
  "Class 10": "₹2800 / month"
};

const schoolFacilities = [
  "Smart Classrooms",
  "Well-stocked Library",
  "Science & Computer Labs",
  "Playground & Sports Facilities",
  "Safe & Secure Campus",
  "Experienced Teachers"
];

const Herosection = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [openChat, setOpenChat] = useState(false);
  const [chatStep, setChatStep] = useState("main");
  const [selectedClass, setSelectedClass] = useState("");

  /* ===== SCREEN DETECTION ===== */
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ===== IMAGE SLIDER ===== */
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
    <section className="relative w-full h-[90vh] overflow-hidden font-outfit">

      {/* IMAGE SLIDER */}
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={activeImages[current]}
          alt="School Campus"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* DARK OVERLAY (Improved for Mobile Readability) */}
      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-br from-black/85 via-black/60 to-black/30" />

      {/* HERO CONTENT */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 md:px-6">
        <div className="max-w-4xl text-center text-white">

          <span className="inline-block mb-4 px-5 py-2 text-xs sm:text-sm rounded-full bg-yellow-400/20 text-yellow-300 border border-yellow-400/30">
            Excellence in Education
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
            Welcome to <br />
            <span className="text-yellow-400 drop-shadow-lg">
              Aryabhatta National Public School
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-xl text-gray-200 max-w-xl mx-auto leading-relaxed">
            A modern learning environment focused on academic excellence,
            discipline, innovation, and holistic student development.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center w-full sm:w-auto">
          <Link to={"/admission-process"}>
            <button className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full shadow-lg w-full sm:w-auto cursor-pointer">
              View Admissions
            </button>
          </Link>
            
          <Link to={"/academics/prospectus"}>
            <button className="border border-white/40 text-white px-8 py-3 rounded-full w-full sm:w-auto backdrop-blur-sm">
              Download Prospectus
            </button>
          </Link>
            
          </div>

        </div>
      </div>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/917352205506"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-4 md:bottom-6 md:right-6 bg-green-500 text-white p-4 rounded-full shadow-xl z-50 scale-95 md:scale-100"
      >
        <FaWhatsapp size={26} />
      </a>

      {/* QUICK HELP BUTTON */}
      <button
        onClick={() => {
          setOpenChat(true);
          setChatStep("main");
          setSelectedClass("");
        }}
        className="fixed bottom-20 right-4 md:bottom-24 md:right-6 bg-yellow-400 text-white px-4 py-3 rounded-full shadow-xl z-50 font-semibold text-sm md:text-base"
      >
        Quick Help
      </button>

      {/* CHAT MODAL (UNCHANGED DESIGN) */}
      <AnimatePresence>
        {openChat && (
          <motion.div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
            <motion.div className="bg-white w-full max-w-md rounded-2xl shadow-2xl max-h-[80vh] flex flex-col overflow-hidden">

              <div className="bg-yellow-400 px-5 py-4 flex justify-between">
                <b>School Assistant</b>
                <button onClick={() => setOpenChat(false)}>✖</button>
              </div>

              <div className="p-4 overflow-y-auto flex-1 space-y-3 text-sm">
                <div className="bg-gray-100 p-3 rounded-xl">
                  <b>Namaste:</b><br />
                  Mai aapki kya madad kar sakta hoon?
                </div>

                {chatStep === "main" && (
                  <>
                    <button onClick={() => setChatStep("admission")} className="w-full border rounded-lg py-2">Admission Information</button>
                    <button onClick={() => setChatStep("fee")} className="w-full border rounded-lg py-2">Fee Structure</button>
                    <button onClick={() => setChatStep("facilities")} className="w-full border rounded-lg py-2">School Facilities</button>
                    <button onClick={() => setChatStep("executive")} className="w-full border rounded-lg py-2">Talk with Executive</button>
                  </>
                )}

                {(chatStep === "admission" || chatStep === "fee") &&
                  classList.map((cls) => (
                    <button key={cls} onClick={() => setSelectedClass(cls)} className="w-full border rounded-lg py-1">
                      {cls}
                    </button>
                  ))}

                {selectedClass && (
                  <div className="bg-gray-100 p-3 rounded-xl">
                    {chatStep === "admission"
                      ? admissionInfo[selectedClass]
                      : feeStructure[selectedClass]}
                  </div>
                )}

                {chatStep === "facilities" && (
                  <div className="bg-gray-100 p-3 rounded-xl">
                    <ul className="list-disc ml-4">
                      {schoolFacilities.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                  </div>
                )}

                {chatStep === "executive" && (
                  <div className="bg-gray-100 p-3 rounded-xl">
                    Call / WhatsApp: <b>7352205506</b>
                  </div>
                )}

                {chatStep !== "main" && (
                  <button
                    onClick={() => {
                      setChatStep("main");
                      setSelectedClass("");
                    }}
                    className="w-full border rounded-lg py-2"
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
