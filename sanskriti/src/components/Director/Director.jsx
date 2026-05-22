import React from "react";
import {
  FaQuoteLeft,
  FaGraduationCap,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";

const Director = () => {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Message From The
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Director
            </span>
          </h1>

          <div className="w-28 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Main Card */}
        <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-[40px] shadow-2xl overflow-hidden">
          
          {/* Decorative Glow */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full"></div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 md:p-16">
            
            {/* Left Image Section */}
            <div className="relative flex justify-center">
              <div className="relative group">
                <img
                  src="/dir.jpeg"
                  alt="Director"
                  className="w-[320px] md:w-[400px] rounded-3xl object-cover shadow-2xl border-4 border-white/20 group-hover:scale-105 transition duration-500"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-4 rounded-2xl shadow-xl">
                  <h3 className="font-bold text-lg">15+ Years</h3>
                  <p className="text-sm opacity-90">Educational Excellence</p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="text-white relative z-10">
              <FaQuoteLeft className="text-5xl text-cyan-400 mb-6 opacity-80" />

              <p className="text-lg md:text-xl leading-9 text-slate-200 mb-8">
                At our institution, we believe that education is not just about
                gaining knowledge — it is about building character, inspiring
                creativity, and shaping the leaders of tomorrow. Our mission is
                to create a learning environment where every student feels
                motivated, confident, and empowered to achieve greatness.
              </p>

              <p className="text-lg md:text-xl leading-9 text-slate-300 mb-10">
                We are committed to academic excellence, innovation, and moral
                values that prepare students to face the challenges of the
                modern world with courage and wisdom.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
                
                <div className="bg-white/10 border border-white/10 rounded-2xl p-5 text-center hover:bg-cyan-500/20 transition duration-300">
                  <FaGraduationCap className="text-3xl text-cyan-400 mx-auto mb-3" />
                  <h4 className="font-semibold">Excellence</h4>
                </div>

                <div className="bg-white/10 border border-white/10 rounded-2xl p-5 text-center hover:bg-cyan-500/20 transition duration-300">
                  <FaUsers className="text-3xl text-cyan-400 mx-auto mb-3" />
                  <h4 className="font-semibold">Leadership</h4>
                </div>

                <div className="bg-white/10 border border-white/10 rounded-2xl p-5 text-center hover:bg-cyan-500/20 transition duration-300">
                  <FaLightbulb className="text-3xl text-cyan-400 mx-auto mb-3" />
                  <h4 className="font-semibold">Innovation</h4>
                </div>
              </div>

              {/* Director Name */}
              <div className="border-l-4 border-cyan-400 pl-5">
                <h2 className="text-2xl font-bold">
                  Mr. S.K Pathak
                </h2>
                <p className="text-cyan-300 text-lg">
                  Director, Aryabhatt National Public School
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Director;