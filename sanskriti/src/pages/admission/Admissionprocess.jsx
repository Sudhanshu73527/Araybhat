import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const steps = [
  {
    title: "Registration",
    desc: "Fill out the admission enquiry or registration form online or by visiting the school campus."
  },
  {
    title: "Document Submission",
    desc: "Submit required documents including Birth Certificate, Student Aadhaar Card, Parents' Aadhaar & PAN Card, Passport Size Photos, Address Proof, and Previous School Records (if applicable)."
  },
  {
    title: "Verification",
    desc: "Our admission team verifies all submitted documents. Parents may be contacted if any clarification is required."
  },
  {
    title: "Fee Payment",
    desc: "After approval, complete the admission fee payment to confirm the seat."
  },
  {
    title: "Admission Confirmation",
    desc: "Once payment is completed, an official admission confirmation letter will be issued."
  }
];

const Admissionprocess = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 py-24 px-6 md:px-20 text-white overflow-hidden">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Admission Process
        </h2>
        <p className="text-gray-300 text-lg">
          We follow a simple, transparent, and structured admission procedure
          to ensure a smooth enrollment experience for parents and students.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-indigo-600"></div>

        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`mb-16 flex flex-col md:flex-row items-start md:items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Content Card */}
            <div className="md:w-1/2 w-full md:px-12">
              <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl hover:scale-105 transition duration-300">
                <h3 className="text-2xl font-semibold mb-3">
                  Step {index + 1}: {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>

            {/* Circle */}
            <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-full border-4 border-slate-900 font-bold text-white md:mx-0 mx-4">
              {index + 1}
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <Link
          to="/online-registration"
          className="inline-block bg-purple-600 px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:scale-105 transition duration-300"
        >
          Apply for Admission
        </Link>
      </div>
    </section>
  );
};

export default Admissionprocess;