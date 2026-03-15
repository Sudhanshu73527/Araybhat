import React, { useState } from "react";
import { FaUser, FaPhone, FaBook, FaPaperPlane } from "react-icons/fa";

const Parentsenquiry = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    mobile: "",
    studentClass: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { parentName, mobile, studentClass, message } = formData;

    const whatsappNumber = "91XXXXXXXXXX";

    const text = `📌 *New Parent Enquiry*  

👨‍👩‍👧 Parent Name: ${parentName}  
📞 Mobile: ${mobile}  
🎓 Student Class: ${studentClass}  
📝 Message: ${message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    // Reset Form
    setFormData({
      parentName: "",
      mobile: "",
      studentClass: "",
      message: "",
    });
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
            className="w-full flex items-center justify-center gap-2 bg-green-600 text-white p-3 rounded-xl hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            {/* <FaPaperPlane /> */}
            Submit Enquiry 
          </button>

        </form>
      </div>
    </div>
  );
};

export default Parentsenquiry;