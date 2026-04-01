import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";

const BASE_URL = "https://araybhat-1.onrender.com";

const Schoolmoments = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchMoments();
  }, []);

  const fetchMoments = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/moments`);
      setImages(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const featured = images[0];
  const restImages = images.slice(1);

  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-white py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            Our School <span className="text-yellow-500">Moments</span>
          </h2>
          <p className="text-gray-500 mt-2 md:mt-3 text-sm md:text-lg">
            Capturing memories that inspire learning & growth
          </p>
        </div>

        {/* Featured Image */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-xl mb-6 md:mb-10 group"
          >
            <img
              src={`${BASE_URL}/uploads/${featured.image}`}
              alt={featured.title}
              className="w-full h-[220px] sm:h-[300px] md:h-[450px] object-cover group-hover:scale-105 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4 md:p-6">
              <h3 className="text-white text-lg md:text-3xl font-semibold">
                {featured.title}
              </h3>
            </div>
          </motion.div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {restImages.map((img, index) => (
            <motion.div
              key={img._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
              className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-sm md:shadow-md group cursor-pointer active:scale-95"
            >
              <img
                src={`${BASE_URL}/uploads/${img.image}`}
                alt={img.title}
                className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 md:flex hidden items-center justify-center transition">
                <p className="text-white text-sm font-medium px-2 text-center">
                  {img.title}
                </p>
              </div>

              {/* Mobile Title (Always visible) */}
              <div className="md:hidden absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-1 text-center">
                {img.title}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
        <Link to={"/gallery"}>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 md:px-8 md:py-3 rounded-full shadow-md transition">
            View Full Gallery 
          </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Schoolmoments;