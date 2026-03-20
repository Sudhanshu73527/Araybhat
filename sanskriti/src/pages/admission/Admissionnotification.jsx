import React, { useState, useEffect } from "react";
import { FaCalendarAlt, FaUserGraduate, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

const AdmissionNotification = () => {
  const [data, setData] = useState(null); // initially null
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://araybhat-1.onrender.com//api/admission/get");
        if (!response.ok) throw new Error("Failed to fetch admission data");
        const result = await response.json();

        // Ensure result is an object
        setData(result || {});
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Loading state
  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold text-gray-600">Loading Admission Details...</p>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold text-red-600">Error: {error}</p>
      </section>
    );
  }

  // If data is empty, fallback
  const {
    title = "Admission Notification",
    description = "Check out our latest admission details and apply online.",
    hurryMessage,
    startDate = "-",
    lastDate = "-",
    classes = "-"
  } = data || {};

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-700">
            {title}
          </h2>
          <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
            {description}
          </p>
          {hurryMessage && (
            <div className="mt-6 inline-block bg-red-600 text-white px-8 py-3 rounded-full font-semibold shadow-xl animate-bounce">
              {hurryMessage}
            </div>
          )}
        </div>

        {/* Info Cards */}
        <div className="bg-white shadow-xl rounded-3xl p-10 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <FaCalendarAlt className="text-5xl text-green-600 mx-auto mb-4" />
            <h3 className="font-bold">Admission Starts</h3>
            <p>{startDate}</p>
          </div>

          <div className="text-center">
            <FaClock className="text-5xl text-red-500 mx-auto mb-4" />
            <h3 className="font-bold">Last Date</h3>
            <p>{lastDate}</p>
          </div>

          <div className="text-center">
            <FaUserGraduate className="text-5xl text-yellow-600 mx-auto mb-4" />
            <h3 className="font-bold">Classes Available</h3>
            <p>{classes}</p>
          </div>
        </div>

        {/* Apply Button */}
        <div className="text-center mt-16">
          <MotionLink
            to="/online-registration"
            whileHover={{ scale: 1.08 }}
            className="bg-yellow-500 text-white px-12 py-5 rounded-full text-xl font-bold shadow-2xl"
          >
            Apply Now
          </MotionLink>
        </div>
      </div>
    </section>
  );
};

export default AdmissionNotification;