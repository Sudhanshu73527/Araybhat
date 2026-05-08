import React, { useEffect, useState } from "react";
import { FaBookOpen, FaAward } from "react-icons/fa";
import axios from "axios";

const Teacherdetails = () => {
  const [teachers, setTeachers] = useState([]);

  // Fetch Teachers
  const fetchTeachers = async () => {
    try {
      const res = await axios.get("https://araybhat-1.onrender.com/api/teachers/all");

      setTeachers(res.data.teachers);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-100">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-300/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full bg-green-100 text-green-700 font-semibold text-sm tracking-wide shadow-sm">
            Our Dedicated Faculty
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mt-5 leading-tight">
            Meet Our Expert Teachers
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto text-lg leading-relaxed">
            Our highly qualified and passionate teachers inspire students
            through innovation, dedication, and academic excellence.
          </p>
        </div>

        {/* Teacher Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teachers.map((teacher) => (
            <div
              key={teacher._id}
              className="bg-white/90 backdrop-blur-lg border border-white/40 rounded-[30px] overflow-hidden shadow-xl"
            >
              {/* Top Border */}
              {/* <div className="h-1 bg-gradient-to-r from-green-500 via-emerald-400 to-lime-400"></div> */}

              {/* Image */}
              <div className="relative">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-80 object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Badge */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-black text-sm font-medium">
                  Faculty
                </div>

                {/* Teacher Info */}
                <div className="absolute bottom-5 left-5 text-white">
                  <h3 className="text-2xl font-bold tracking-wide">
                    {teacher.name}
                  </h3>

                  <p className="text-green-200 font-medium mt-1">
                    {teacher.subject}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Subject */}
                <div className="flex items-center gap-4 bg-green-50 rounded-2xl p-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center text-white shadow-md">
                    <FaBookOpen className="text-lg" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Subject</p>

                    <h4 className="font-semibold text-gray-800">
                      {teacher.subject}
                    </h4>
                  </div>
                </div>

                {/* Experience */}
                <div className="flex items-center gap-4 bg-yellow-50 rounded-2xl p-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500 flex items-center justify-center text-white shadow-md">
                    <FaAward className="text-lg" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Experience</p>

                    <h4 className="font-semibold text-gray-800">
                      {teacher.experience}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teacherdetails;
