import React from "react";
import { Eye, Target } from "lucide-react";

const Visionmission = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-300/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-yellow-700 text-sm font-semibold mb-3">
            Our Foundation
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Vision & Mission
          </h2>
          <div className="w-20 h-1 bg-yellow-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Vision Card */}
          <div className="group bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-xl hover:shadow-2xl transition duration-500 border border-yellow-100">

            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-yellow-100 mb-6 group-hover:scale-110 transition">
              <Eye className="text-yellow-700 w-7 h-7" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-relaxed text-lg">
              At ANPS, we foster an environment where a child has natural desire to learn and experience creative journey 
of self-exploration. We are a school with an Indian mind, an Indian heart and an Indian soul; a school that celebrates 
the culture of excellence and is an embodiment of values. We believe that a curriculum of excellence with child
centric academic and co-curricular is key to the education of children to face the challenges with confidence and 
strength of character.
            </p>
          </div>

          {/* Mission Card */}
          <div className="group bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-xl hover:shadow-2xl transition duration-500 border border-yellow-100">

            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-yellow-100 mb-6 group-hover:scale-110 transition">
              <Target className="text-yellow-700 w-7 h-7" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-relaxed text-lg">
             The ANPS believe that the pursuit of excellence rests on the positive belief to develop the qualities of 
integrity, honesty, trust and a culture of academic excellence, therefore; our Mission is to provide a learning 
environment that encourages children to bring out the best in themselves and enables their all-round development 
through the joy of learning, enduring values and the celebration of diversity.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Visionmission;
