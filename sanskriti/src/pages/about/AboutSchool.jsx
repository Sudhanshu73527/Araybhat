import React from "react";

const AboutSchool = () => {
  return (
    <div className="bg-white text-gray-800 overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left Content */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <p className="uppercase tracking-[3px] text-xs sm:text-sm text-yellow-600 font-semibold mb-4">
              About Our School
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              Inspiring Excellence <br className="hidden sm:block" />
              Shaping The Future
            </h1>

            <div className="w-16 md:w-24 h-1 bg-yellow-600 rounded-full mb-6 md:mb-8 mx-auto md:mx-0"></div>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-5">
              Our school stands as a symbol of academic excellence and strong
              values. We provide a progressive learning environment that
              encourages students to think independently, act responsibly,
              and achieve confidently.
            </p>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Through dedicated faculty, modern facilities, and a nurturing
              atmosphere, we prepare students not just for exams — but for life.
            </p>

            {/* <button className="mt-8 md:mt-10 bg-green-800 hover:bg-green-900 text-white px-6 sm:px-8 py-3 rounded-lg shadow-lg transition duration-300">
              Learn More
            </button> */}
          </div>

          {/* Right Image */}
          <div className="relative order-1 md:order-2">
            <div className="absolute -top-4 -left-4 w-full h-full bg-yellow-200 rounded-2xl md:rounded-3xl"></div>

            <img
              src="/bhat12.png"
              alt="School Campus"
              className="relative w-full h-[280px] sm:h-[350px] md:h-[500px] object-cover rounded-2xl md:rounded-3xl shadow-2xl"
            />

            {/* Floating Card */}
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-5 py-4 md:px-6 md:py-5 rounded-xl shadow-lg">
              <h3 className="text-lg md:text-xl font-bold text-yellow-700">
                14+ Years
              </h3>
              <p className="text-gray-600 text-xs md:text-sm">
                Of Academic Excellence
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* STATS SECTION */}
      {/* <section className="py-12 md:py-20 bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">

          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-600 mb-2">
              1200+
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">Students</p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-600 mb-2">
              80+
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Qualified Teachers
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-600 mb-2">
              30+
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Smart Classrooms
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-600 mb-2">
              100%
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Board Results
            </p>
          </div>

        </div>
      </section> */}

      {/* CONTENT SECTION */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8">
            A Legacy of Learning & Leadership
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-5">
            We believe education is not limited to classrooms. Our approach
            blends academics with innovation, discipline with creativity,
            and knowledge with character building.
          </p>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Every student who walks through our gates becomes part of a
            community that values growth, respect, and excellence.
          </p>

        </div>
      </section>

    </div>
  );
};

export default AboutSchool;
