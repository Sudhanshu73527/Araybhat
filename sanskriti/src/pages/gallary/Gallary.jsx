import React, { useState, useEffect } from "react";

const Gallary = () => {

  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  // FETCH IMAGES FROM BACKEND
  useEffect(() => {

    fetch("https://araybhat-1.onrender.com//api/gallery/all")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.log(err));

  }, []);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            School <span className="text-yellow-400">Gallery</span>
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Explore memorable moments from our school activities, events,
            celebrations, and academic achievements. Our gallery reflects the
            vibrant learning environment and joyful experiences shared by our
            students and staff.
          </p>

        </div>


        {/* Image Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {images.map((img) => (

            <div
              key={img._id}
              onClick={() =>
                setSelectedImage(`https://araybhat-1.onrender.com//uploads/${img.image}`)
              }
              className="cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition duration-500 group"
            >

              <img
                src={`https://araybhat-1.onrender.com//uploads/${img.image}`}
                alt="School Gallery"
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />

            </div>

          ))}

        </div>


        {/* Lightbox Modal */}

        {selectedImage && (

          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">

            <div className="relative max-w-4xl w-full">

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-3xl font-bold"
              >
                ×
              </button>

              <img
                src={selectedImage}
                alt="Selected"
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />

            </div>

          </div>

        )}

      </div>

    </section>
  );
};

export default Gallary;