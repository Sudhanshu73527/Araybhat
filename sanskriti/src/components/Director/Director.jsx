import React from "react";
import {
  FaGraduationCap,
  FaUsers,
  FaLightbulb,
  FaQuoteLeft,
} from "react-icons/fa";

const features = [
  {
    icon: <FaGraduationCap />,
    title: "Academic Excellence",
  },
  {
    icon: <FaUsers />,
    title: "Leadership",
  },
  
];

const Director = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="text-blue-600 font-semibold tracking-widest uppercase">
            Leadership
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mt-3">
            Message From
            <span className="text-blue-600"> Director</span>
          </h2>

          <div className="w-24 h-1 bg-blue-600 rounded-full mx-auto mt-5"></div>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}

          <div className="relative">

            <div className="overflow-hidden">

              <img
                src="/dir.jpeg"
                alt="Director"
                className="w-half h-130 object-cover transition duration-700"
              />

            </div>

            <div className="absolute bottom-6 left-6 bg-white rounded-3xl shadow-xl px-6 py-5">

              <h3 className="text-3xl font-bold text-blue-600">
                15+
              </h3>

              <p className="text-gray-600">
                Years of Educational Excellence
              </p>

            </div>

          </div>

          {/* Content */}

          <div>

            <FaQuoteLeft className="text-5xl text-blue-600 opacity-20 mb-6" />

            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Building Future Leaders Through Quality Education
            </h3>

            <p className="text-gray-600 leading-8 text-lg mb-6">

              At Aryabhatt National Public School, education is more than
              academics. It is about nurturing confident minds, developing
              strong character, and inspiring young learners to become
              responsible citizens who contribute positively to society.

            </p>

            <p className="text-gray-600 leading-8 text-lg mb-10">

              We remain committed to providing a safe, innovative, and
              inspiring learning environment where every student discovers
              their true potential.

            </p>

            {/* Features */}

            <div className="grid md:grid-cols-3 gap-5 mb-10">

              {features.map((item, index) => (

                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition"
                >

                  <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 text-2xl mb-4">

                    {item.icon}

                  </div>

                  <h4 className="font-semibold text-slate-800">
                    {item.title}
                  </h4>

                </div>

              ))}

            </div>

            <div className="border-l-4 border-blue-600 pl-5">

              <h2 className="text-2xl font-bold text-slate-900">
                Mr. S.K Pathak
              </h2>

              <p className="text-blue-600 mt-1">
                Director, Aryabhatt National Public School
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Director;