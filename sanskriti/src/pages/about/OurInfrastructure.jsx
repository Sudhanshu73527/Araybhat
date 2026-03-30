import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import axios from "axios";

const BASE_URL = "https://araybhat-1.onrender.com/";

const OurInfrastructure = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/api/infrastructure/all`
      );

      console.log("API RESPONSE:", res.data); // 🔍 DEBUG

      // ✅ MAIN FIX
      setImages(res.data.data || []);
    } catch (error) {
      console.log("Error fetching images:", error);
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-white via-gray-50 to-gray-100 font-outfit overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-yellow-400/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400/20 blur-3xl rounded-full"></div>

      {/* HEADER */}
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

      {/* IMAGE GRID */}
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        
        {images.length > 0 ? (
          images.map((img, index) => {
            const imageUrl = `${BASE_URL}/uploads/${img.image}`;

            return (
              <motion.div
                key={img._id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 cursor-pointer bg-white"
                onClick={() => setSelectedImage(imageUrl)}
              >
                <img
                  src={imageUrl}
                  alt="Infrastructure"
                  onError={(e) => {
                    e.target.src =
                      "https://araybhat-1.onrender.com/300x200?text=Image+Not+Found";
                  }}
                  className="w-full h-72 object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-5">
                  <div className="backdrop-blur-md bg-white/10 text-white px-4 py-2 rounded-xl text-sm font-medium">
                    View Image
                  </div>
                </div>
              </motion.div>
            );
          })
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No Images Found
          </p>
        )}
      </div>

      {/* LIGHTBOX */}
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