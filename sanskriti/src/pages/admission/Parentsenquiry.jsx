import React, { useState } from "react";
import { FaUser, FaPhone, FaBook } from "react-icons/fa";
import axios from "axios";

const BASE_URL = "https://araybhat-1.onrender.com";

const Parentsenquiry = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    mobile: "",
    studentClass: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ SUBMIT TO BACKEND
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setSuccessMsg("");
      setErrorMsg("");

      await axios.post(
        `${BASE_URL}/api/enquiry/add`,
        formData
      );

      setSuccessMsg("✅ Enquiry submitted successfully!");
      
      // Reset form
      setFormData({
        parentName: "",
        mobile: "",
        studentClass: "",
        message: "",
      });

    } catch (error) {
      setErrorMsg("❌ Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 p-4">
      
      <div className="backdrop-blur-lg bg-white/70 shadow-2xl rounded-3xl p-8 w-full max-w-lg border border-white/40">
        
        <h2 className="text-3xl font-bold text-center text-green-700 mb-2">
          Parents Enquiry
        </h2>

        <p className="text-center text-gray-600 mb-6">
          Fill the form below and our team will contact you soon.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Parent Name */}
          <div className="relative">
            <FaUser className="absolute top-4 left-3 text-gray-500" />
            <input
              type="text"
              name="parentName"
              placeholder="Parent Name"
              value={formData.parentName}
              onChange={handleChange}
              required
              className="w-full pl-10 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none transition"
            />
          </div>

          {/* Mobile */}
          <div className="relative">
            <FaPhone className="absolute top-4 left-3 text-gray-500" />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full pl-10 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none transition"
            />
          </div>

          {/* Class */}
          <div className="relative">
            <FaBook className="absolute top-4 left-3 text-gray-500" />
            <select
              name="studentClass"
              value={formData.studentClass}
              onChange={handleChange}
              required
              className="w-full pl-10 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none transition bg-white"
            >
              <option value="">Select Class</option>
              <option>Nursery</option>
              <option>LKG</option>
              <option>UKG</option>
              <option>Class 1</option>
              <option>Class 2</option>
              <option>Class 3</option>
              <option>Class 4</option>
              <option>Class 5</option>
              <option>Class 6</option>
              <option>Class 7</option>
              <option>Class 8</option>
              <option>Class 9</option>
              <option>Class 10</option>
            </select>
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Write your enquiry..."
            value={formData.message}
            onChange={handleChange}
            required
            rows="3"
            className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none transition"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-green-600 text-white p-3 rounded-xl hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Enquiry"}
          </button>

          {/* Success Message */}
          {successMsg && (
            <p className="text-green-600 text-center text-sm">
              {successMsg}
            </p>
          )}

          {/* Error Message */}
          {errorMsg && (
            <p className="text-red-500 text-center text-sm">
              {errorMsg}
            </p>
          )}

        </form>
      </div>
    </div>
  );
};

export default Parentsenquiry;