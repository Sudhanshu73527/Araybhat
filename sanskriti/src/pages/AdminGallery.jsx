import React, { useState, useEffect } from "react";

const AdminGallery = () => {

  const [images, setImages] = useState([]);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState("");

  // 🔥 Auto hide message
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  // FETCH
  const fetchImages = async () => {
    const res = await fetch("https://araybhat-1.onrender.com/api/gallery/all");
    const data = await res.json();
    setImages(data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // UPLOAD
  const uploadImage = async () => {
    if (!file) {
      setMessage("⚠️ Please select an image first");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    await fetch("https://araybhat-1.onrender.com/api/gallery/upload", {
      method: "POST",
      body: formData
    });

    setFile(null);
    setPreview(null);
    setMessage("✅ Image Uploaded Successfully!");

    fetchImages();
  };

  // DELETE
  const deleteImage = async (id) => {
    await fetch(`https://araybhat-1.onrender.com/api/gallery/delete/${id}`, {
      method: "DELETE"
    });

    setMessage("🗑️ Image Deleted Successfully!");
    fetchImages();
  };

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">

      {/* 🔥 Message */}
      {message && (
        <div className="mb-4 bg-green-500 text-white px-4 py-3 rounded-xl text-center font-semibold shadow">
          {message}
        </div>
      )}

      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
        Manage Gallery
      </h1>

      {/* 🔥 Upload Section */}
      <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md mb-8 flex flex-col gap-4 md:flex-row md:items-center">

        <input
          type="file"
          className="border p-2 rounded-lg w-full md:w-auto"
          onChange={(e) => {
            const selected = e.target.files[0];
            setFile(selected);
            if (selected) {
              setPreview(URL.createObjectURL(selected));
            }
          }}
        />

        <button
          onClick={uploadImage}
          className="bg-green-600 text-white px-6 py-2 rounded-lg w-full md:w-auto"
        >
          Upload Image
        </button>

      </div>

      {/* 🔥 Preview */}
      {preview && (
        <div className="mb-6">
          <p className="text-gray-600 mb-2">Preview:</p>
          <img
            src={preview}
            className="w-40 h-40 object-cover rounded-xl shadow"
          />
        </div>
      )}

      {/* 🔥 Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

        {images.map((img) => (
          <div
            key={img._id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >

            <img
              src={`https://araybhat-1.onrender.com/uploads/${img.image}`}
              className="w-full h-32 sm:h-40 object-cover"
            />

            <div className="p-3">
              <button
                onClick={() => deleteImage(img._id)}
                className="bg-red-600 text-white px-3 py-1 rounded-lg w-full"
              >
                Delete
              </button>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default AdminGallery;