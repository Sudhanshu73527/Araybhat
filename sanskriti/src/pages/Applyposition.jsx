import React, { useState } from "react";
import {
  FaUserGraduate,
  FaBookOpen,
  FaPhoneAlt,
  FaEnvelope,
  FaBriefcase,
  FaSchool,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Applyposition = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    qualification: "",
    experience: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  // HANDLE CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // SEND TO WHATSAPP
  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "919876543210"; // Your WhatsApp Number

    const text = `
📌 *Teacher Job Application*

👤 Full Name: ${formData.fullName}

📚 Subject: ${formData.subject}

🎓 Qualification: ${formData.qualification}

💼 Experience: ${formData.experience}

📞 Phone: ${formData.phone}

📧 Email: ${formData.email}

🏠 Address: ${formData.address}

📝 Message: ${formData.message}
    `;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="w-full py-16 px-4 md:px-10 bg-gradient-to-br from-[#f5fff8] via-white to-[#ecfff3] overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              APPLY NOW
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-5 leading-tight">
              Join Our <br /> Teaching Team
            </h1>

            <p className="text-gray-600 mt-5 text-lg leading-relaxed">
              We are looking for passionate and talented teachers who can
              inspire students and create a positive learning environment.
              Apply now and become part of our educational journey.
            </p>
          </div>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              <div className="bg-green-100 w-14 h-14 flex items-center justify-center rounded-xl text-green-600 text-2xl mb-4">
                <FaBookOpen />
              </div>

              <h3 className="font-bold text-lg text-gray-800">
                Multiple Subjects
              </h3>

              <p className="text-gray-600 mt-2 text-sm">
                Apply for Science, Math, English, Computer, and more.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              <div className="bg-green-100 w-14 h-14 flex items-center justify-center rounded-xl text-green-600 text-2xl mb-4">
                <FaSchool />
              </div>

              <h3 className="font-bold text-lg text-gray-800">
                Friendly Environment
              </h3>

              <p className="text-gray-600 mt-2 text-sm">
                Work in a professional and student-friendly atmosphere.
              </p>
            </div>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white shadow-2xl rounded-3xl p-8 md:p-10 relative"
        >
          {/* GLOW */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-green-200 blur-3xl opacity-30 rounded-full"></div>

          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Teacher Application Form
          </h2>

          <p className="text-gray-500 mb-8">
            Fill your details and send your application directly on WhatsApp.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* NAME */}
            <div className="relative">
              <FaUserGraduate className="absolute top-5 left-4 text-green-600" />

              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                required
                onChange={handleChange}
                className="w-full pl-12 border border-gray-200 focus:border-green-500 outline-none px-5 py-4 rounded-xl bg-gray-50"
              />
            </div>

            {/* SUBJECT */}
            <div className="relative">
              <FaBookOpen className="absolute top-5 left-4 text-green-600" />

              <input
                type="text"
                name="subject"
                placeholder="Subject Applying For"
                required
                onChange={handleChange}
                className="w-full pl-12 border border-gray-200 focus:border-green-500 outline-none px-5 py-4 rounded-xl bg-gray-50"
              />
            </div>

            {/* QUALIFICATION */}
            <div className="relative">
              <FaSchool className="absolute top-5 left-4 text-green-600" />

              <input
                type="text"
                name="qualification"
                placeholder="Qualification"
                required
                onChange={handleChange}
                className="w-full pl-12 border border-gray-200 focus:border-green-500 outline-none px-5 py-4 rounded-xl bg-gray-50"
              />
            </div>

            {/* EXPERIENCE */}
            <div className="relative">
              <FaBriefcase className="absolute top-5 left-4 text-green-600" />

              <input
                type="text"
                name="experience"
                placeholder="Teaching Experience"
                required
                onChange={handleChange}
                className="w-full pl-12 border border-gray-200 focus:border-green-500 outline-none px-5 py-4 rounded-xl bg-gray-50"
              />
            </div>

            {/* PHONE */}
            <div className="relative">
              <FaPhoneAlt className="absolute top-5 left-4 text-green-600" />

              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                required
                onChange={handleChange}
                className="w-full pl-12 border border-gray-200 focus:border-green-500 outline-none px-5 py-4 rounded-xl bg-gray-50"
              />
            </div>

            {/* EMAIL */}
            <div className="relative">
              <FaEnvelope className="absolute top-5 left-4 text-green-600" />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                onChange={handleChange}
                className="w-full pl-12 border border-gray-200 focus:border-green-500 outline-none px-5 py-4 rounded-xl bg-gray-50"
              />
            </div>

            {/* ADDRESS */}
            <textarea
              name="address"
              placeholder="Full Address"
              rows="3"
              required
              onChange={handleChange}
              className="w-full border border-gray-200 focus:border-green-500 outline-none px-5 py-4 rounded-xl bg-gray-50 resize-none"
            ></textarea>

            {/* MESSAGE */}
            <textarea
              name="message"
              placeholder="Write Something About Yourself..."
              rows="4"
              onChange={handleChange}
              className="w-full border border-gray-200 focus:border-green-500 outline-none px-5 py-4 rounded-xl bg-gray-50 resize-none"
            ></textarea>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-green-700 hover:scale-[1.02] transition duration-300 text-white font-semibold py-4 rounded-xl shadow-lg"
            >
              Apply Now
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Applyposition;