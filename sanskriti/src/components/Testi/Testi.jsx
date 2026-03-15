import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Parent",
    feedback:
      "This school has transformed my child’s learning experience!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Verma",
    role: "Student",
    feedback:
      "The teachers here are so supportive and encouraging. I love coming to school ",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Ravi Kumar",
    role: "Alumni",
    feedback:
      "This school prepared me for life, not just exams. Best decision ever.",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Neha Gupta",
    role: "Parent",
    feedback:
      "Amazing infrastructure, great activities, and a safe environment for kids.",
    image: "https://randomuser.me/api/portraits/women/67.jpg",
  },
  {
    name: "Suresh Singh",
    role: "Parent",
    feedback:
      "I’ve seen tremendous improvement in my child’s confidence and academics.",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "Anjali Mehta",
    role: "Student",
    feedback:
      "The extra-curricular activities are awesome! I’ve learned skills.",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-6xl font-bold text-yellow-400 mb-8">
          What Our Students<span className="text-black">& Parents Say</span> 
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full mb-4 border-4 border-gray-500"
                />
                <p className="text-gray-600 italic mb-4">“{t.feedback}”</p>
                <h3 className="text-lg font-semibold text-gray-700">
                  {t.name}
                </h3>
                <span className="text-sm text-gray-500">{t.role}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;