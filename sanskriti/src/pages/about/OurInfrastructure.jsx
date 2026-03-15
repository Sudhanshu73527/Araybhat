import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// ===== IMPORT YOUR IMAGES =====
import img1 from "../../assets/bhat12.png";
import img2 from "../../assets/bhat11.jpeg";
import img3 from "../../assets/bhat10.jpeg";
import img4 from "../../assets/aryy4.png";
import img5 from "../../assets/aryy1.png";
import img6 from "../../assets/aryy2.png";
import img7 from "../../assets/aryy3.png";
// import img8 from "../../assets/bhat5.jpeg";
// import img9 from "../../assets/bhat4.jpeg";
// import img10 from "../../assets/bhat3.jpeg";

const images = [
  img1, img2, img3, img4, img5,
  img6, img7
];

const OurInfrastructure = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="relative py-24 bg-gradient-to-br from-white via-gray-50 to-gray-100 font-outfit overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-yellow-400/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400/20 blur-3xl rounded-full"></div>

      {/* ===== HEADER ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto text-center px-6 mb-16"
      >
        <span className="text-yellow-500 font-semibold tracking-widest uppercase text-sm">
          Our Campus
        </span>

        <h2 className="text-4xl md:text-6xl font-bold mt-4 text-gray-800">
          Modern Infrastructure
        </h2>

        <p className="mt-5 text-gray-600 max-w-2xl mx-auto text-lg">
          A safe, innovative and inspiring environment designed to nurture
          excellence, creativity and holistic development.
        </p>
      </motion.div>

      {/* ===== IMAGE GRID ===== */}
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 cursor-pointer bg-white"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img}
              alt={`Infrastructure ${index + 1}`}
              className="w-full h-72 object-cover transition duration-700 group-hover:scale-110"
            />

            {/* Modern Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-5">
              <div className="backdrop-blur-md bg-white/10 text-white px-4 py-2 rounded-xl text-sm font-medium">
                View Image
              </div>
            </div>
          </motion.div>
        ))}

      </div>

      {/* ===== LIGHTBOX ===== */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Preview"
                className="w-full max-h-[85vh] object-contain rounded-3xl shadow-2xl"
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-5 -right-5 bg-white text-black p-3 rounded-full shadow-lg hover:scale-110 transition"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default OurInfrastructure;
