import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Schoolevents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://araybhat-1.onrender.com/api/events/all")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, []);

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-yellow-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            School Events{" "}
            <span className="text-yellow-500">& Activities</span>
          </h2>

          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg mt-6 leading-relaxed">
            Discover the vibrant moments of our school through educational,
            cultural, and sports events that shape our students’ future.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event._id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden shadow-lg"
            >

              {/* Image */}
              <img
                src={`https://araybhat-1.onrender.com/uploads/${event.image}`}
                alt={event.title}
                className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {event.title}
                </h3>

                <button className="bg-yellow-400 text-black px-4 py-1 rounded-lg text-sm w-fit hover:bg-yellow-300">
                  View Details
                </button>
              </div>

              {/* Bottom Card Content */}
              <div className="bg-white p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-700 group-hover:text-yellow-500 transition">
                  {event.title}
                </h3>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-4 left-4 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full shadow">
                Event
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Schoolevents;