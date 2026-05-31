import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import { motion } from "framer-motion";

import {
  FaBookOpen,
  FaUsers,
  FaGraduationCap,
} from "react-icons/fa";

const BASE_URL =
  "https://araybhat-lrjj.onrender.com";

const Library = () => {

  const [library, setLibrary] =
    useState(null);

  // ======================
  // FETCH LIBRARY
  // ======================

  const fetchLibrary = async () => {

    try {

      const res =
        await axios.get(
          `${BASE_URL}/api/library`
        );

      setLibrary(res.data);

    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {
    fetchLibrary();
  }, []);

  // ======================
  // LOADING
  // ======================

  if (!library) {

    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050816] text-white text-xl">
        Loading...
      </div>
    );
  }

  return (
    <section className="relative overflow-hidden bg-[#050816] text-white py-20">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-indigo-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-5">

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="text-center max-w-4xl mx-auto mb-16"
        >

          <span className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/10 text-sm tracking-wider text-indigo-300 backdrop-blur-xl mb-5">
            SCHOOL LIBRARY
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">

            {library.heading}

          </h2>

          <p className="mt-6 text-gray-300 leading-relaxed text-sm sm:text-base max-w-3xl mx-auto">

            {library.subHeading}

          </p>

        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="space-y-6"
          >

            {/* Description Card */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl">

              <h3 className="text-2xl font-semibold mb-5">
                Explore Knowledge Beyond Books
              </h3>

              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">

                {library.description}

              </p>

            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-5">

              {/* Card */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:scale-105 transition duration-300">

                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-4">

                  <FaBookOpen className="text-indigo-300 text-xl" />

                </div>

                <h4 className="font-semibold mb-2">
                  Rich Collection
                </h4>

                <p className="text-sm text-gray-400">
                  Academic and general books.
                </p>

              </div>

              {/* Card */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:scale-105 transition duration-300">

                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">

                  <FaUsers className="text-cyan-300 text-xl" />

                </div>

                <h4 className="font-semibold mb-2">
                  Peaceful Space
                </h4>

                <p className="text-sm text-gray-400">
                  Comfortable study atmosphere.
                </p>

              </div>

              {/* Card */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:scale-105 transition duration-300">

                <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mb-4">

                  <FaGraduationCap className="text-pink-300 text-xl" />

                </div>

                <h4 className="font-semibold mb-2">
                  Smart Learning
                </h4>

                <p className="text-sm text-gray-400">
                  Improves focus and creativity.
                </p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT IMAGES */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="grid grid-cols-2 gap-5"
          >

            {/* IMAGE 1 */}
            <div className="relative overflow-hidden rounded-3xl h-[500px] group">

              <img
                src={library.image1}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              <div className="absolute bottom-5 left-5">

                <h4 className="text-lg font-semibold">
                  Modern Reading Space
                </h4>

              </div>

            </div>

            {/* IMAGE 2 */}
            <div className="relative overflow-hidden rounded-3xl h-[500px] mt-12 group">

              <img
                src={library.image2}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              <div className="absolute bottom-5 left-5">

                <h4 className="text-lg font-semibold">
                  Smart Learning Zone
                </h4>

              </div>

            </div>

          </motion.div>

        </div>

        {/* Quote */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-20"
        >

          <div className="bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 border border-white/10 rounded-3xl p-10 text-center backdrop-blur-2xl">

            <h3 className="text-2xl sm:text-3xl font-semibold leading-relaxed max-w-4xl mx-auto">

              “{library.quote}”

            </h3>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Library;