import React from "react";
import { FaSchool, FaArrowRight } from "react-icons/fa";

const SchoolHighlight = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-5">

        {/* MAIN CONTENT */}

        <div className="text-center">

          {/* TOP LABEL */}

          <div className="flex items-center justify-center gap-4 mb-5">

            <span className="hidden sm:block w-16 h-px bg-gray-200" />

            <div className="flex items-center gap-2">

              <FaSchool className="text-yellow-500 text-sm" />

              <span
                className="
                  text-xs
                  md:text-sm
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-yellow-600
                "
              >
                Aryabhatta National Public School
              </span>

            </div>

            <span className="hidden sm:block w-16 h-px bg-gray-200" />

          </div>

          {/* MAIN HEADING */}

          <h2
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-bold
              tracking-tight
              text-gray-900
              leading-tight
            "
          >
            Where Learning Meets{" "}

            <span className="relative inline-block text-yellow-500">

              Excellence

              {/* Yellow underline */}

              <span
                className="
                  absolute
                  left-0
                  -bottom-1
                  w-full
                  h-[3px]
                  bg-yellow-400
                  rounded-full
                "
              />

            </span>

          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              max-w-2xl
              mx-auto
              mt-5
              text-sm
              sm:text-base
              md:text-lg
              leading-relaxed
              text-gray-500
            "
          >
            Aryabhatta National Public School is committed to creating
            a positive and inspiring environment where every student
            can learn, grow and build a confident future.
          </p>

          {/* BOTTOM INFO */}

          <div
            className="
              mt-8
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-8
              gap-y-4
            "
          >

            {/* LOCATION */}

            <div className="flex items-center gap-2">

              <span
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-yellow-400
                "
              />

              <span className="text-sm text-gray-600">
                Semara Bargon Deoraj
              </span>

            </div>

            {/* DIVIDER */}

            <span className="hidden sm:block w-px h-5 bg-gray-200" />

            {/* CBSE */}

            <div className="flex items-center gap-2">

              <span
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-yellow-400
                "
              />

              <span className="text-sm text-gray-600">
                CBSE Curriculum
              </span>

            </div>

            {/* DIVIDER */}

            <span className="hidden sm:block w-px h-5 bg-gray-200" />

            {/* EDUCATION */}

            <div className="flex items-center gap-2">

              <span
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-yellow-400
                "
              />

              <span className="text-sm text-gray-600">
                Holistic Education
              </span>

            </div>

          </div>

        </div>

        {/* BOTTOM LINE */}

        <div className="mt-12 flex items-center justify-center gap-3">

          <span className="w-20 h-px bg-gray-200" />

          <span
            className="
              w-2
              h-2
              rounded-full
              bg-yellow-400
            "
          />

          <span className="w-20 h-px bg-gray-200" />

        </div>

      </div>
    </section>
  );
};

export default SchoolHighlight;