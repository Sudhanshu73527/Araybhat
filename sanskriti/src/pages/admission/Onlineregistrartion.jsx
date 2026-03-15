import React, { useState } from "react";
import { motion } from "framer-motion";

const Onlineregistrartion = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    studentAadhar: "",
    parentName: "",
    parentAadhar: "",
    parentProfession: "",
    address: "",
    contactNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      studentName,
      studentAadhar,
      parentName,
      parentAadhar,
      parentProfession,
      address,
      contactNumber,
    } = formData;

    const message = `
📌 *New Online Admission Registration*

👦 Student Name: ${studentName}
🆔 Student Aadhaar: ${studentAadhar}

👨 Parent Name: ${parentName}
🆔 Parent Aadhaar: ${parentAadhar}
💼 Profession: ${parentProfession}

📞 Contact Number: ${contactNumber}
🏠 Address: ${address}
    `;

    const phoneNumber = "919876543210"; // Replace with your WhatsApp number

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");

    setFormData({
      studentName: "",
      studentAadhar: "",
      parentName: "",
      parentAadhar: "",
      parentProfession: "",
      address: "",
      contactNumber: "",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 overflow-hidden">
      
      {/* Glow Background */}
      <div className="absolute w-96 h-96 bg-indigo-600 opacity-20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-purple-600 opacity-20 blur-3xl rounded-full bottom-10 right-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative w-full max-w-4xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-10 md:p-14 text-white"
      >
        <h2 className="text-4xl font-bold text-center mb-4">
          Online Admission Registration
        </h2>
        <p className="text-center text-gray-300 mb-10">
          Please fill in the required details carefully. Our admission team
          will contact you shortly after submission.
        </p>

        <form onSubmit={handleSubmit} className="space-y-10">

          {/* Student Details */}
          <div>
            <h3 className="text-xl font-semibold mb-6 border-b border-white/20 pb-2">
              Student Details
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="studentName"
                placeholder="Student Full Name"
                value={formData.studentName}
                onChange={handleChange}
                required
                className="inputStyle"
              />

              <input
                type="text"
                name="studentAadhar"
                placeholder="Student Aadhaar Number"
                value={formData.studentAadhar}
                onChange={handleChange}
                required
                maxLength={12}
                className="inputStyle"
              />
            </div>
          </div>

          {/* Parent Details */}
          <div>
            <h3 className="text-xl font-semibold mb-6 border-b border-white/20 pb-2">
              Parent Details
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="parentName"
                placeholder="Parent Full Name"
                value={formData.parentName}
                onChange={handleChange}
                required
                className="inputStyle"
              />

              <input
                type="text"
                name="parentAadhar"
                placeholder="Parent Aadhaar Number"
                value={formData.parentAadhar}
                onChange={handleChange}
                required
                maxLength={12}
                className="inputStyle"
              />

              <input
                type="text"
                name="parentProfession"
                placeholder="Parent Profession"
                value={formData.parentProfession}
                onChange={handleChange}
                required
                className="inputStyle"
              />

              <input
                type="tel"
                name="contactNumber"
                placeholder="Contact Number"
                value={formData.contactNumber}
                onChange={handleChange}
                required
                className="inputStyle"
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-xl font-semibold mb-6 border-b border-white/20 pb-2">
              Residential Address
            </h3>
            <textarea
              name="address"
              placeholder="Enter Full Address"
              value={formData.address}
              onChange={handleChange}
              required
              rows="3"
              className="inputStyle w-full"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-4">
            <motion.button
            //   whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-purple-600 px-12 py-4 rounded-full text-lg font-semibold shadow-xl hover:bg-green-500"
            >
              Submit 
            </motion.button>
          </div>

        </form>
      </motion.div>

      {/* Tailwind reusable input style */}
      <style>
        {`
          .inputStyle {
            background: rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.2);
            padding: 12px 16px;
            border-radius: 12px;
            outline: none;
            color: white;
            transition: 0.3s ease;
          }

          .inputStyle::placeholder {
            color: rgba(255,255,255,0.6);
          }

          .inputStyle:focus {
            border-color: #8b5cf6;
            box-shadow: 0 0 0 2px rgba(139,92,246,0.4);
          }
        `}
      </style>

    </section>
  );
};

export default Onlineregistrartion;