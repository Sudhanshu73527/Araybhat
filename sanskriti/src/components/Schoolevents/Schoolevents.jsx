import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getImageUrl } from "../../utils/imageUrl";
import { Link } from "react-router-dom";

const Schoolevents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://araybhat-lrjj.onrender.com/api/events/all")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, []);

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-yellow-300 via-white to-yellow-100">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full font-semibold text-sm">
            SCHOOL LIFE
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-5">
            Events &<span className="text-yellow-500"> Activities</span>
          </h2>

          <p className="max-w-3xl mx-auto text-gray-500 mt-6 text-lg leading-8">
            Every celebration, competition and cultural programme inspires our
            students to learn, lead and create unforgettable memories together.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
    flex gap-6 overflow-x-auto pb-4
    lg:grid lg:grid-cols-3 lg:overflow-visible
    scrollbar-hide
  "
        >
          {events.map((event) => (
            <div
              key={event._id}
              className="
        min-w-[85%]
        sm:min-w-[48%]
        lg:min-w-0
        bg-white
        rounded-[28px]
        shadow-md
        border border-gray-100
        overflow-hidden
      "
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={getImageUrl(event.image)}
                  alt={event.title}
                  className="w-full h-64 object-cover"
                />

                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow">
                  <span className="text-yellow-600 text-xs font-semibold uppercase tracking-wide">
                    School Event
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 leading-8">
                  {event.title}
                </h3>

                <div className="w-12 h-1 bg-yellow-400 rounded-full mt-4 mb-4"></div>

                <p className="text-gray-500 leading-7 text-sm">
                  Our students actively participate in educational, cultural,
                  sports and co-curricular activities that help develop
                  confidence, creativity and leadership skills.
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* See More Button */}
        <div className="flex justify-center mt-12">
        <Link to={"/gallery"}>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300">
            See More
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Schoolevents;
