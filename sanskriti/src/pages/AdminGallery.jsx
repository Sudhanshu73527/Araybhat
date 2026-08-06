import React, { useState, useEffect } from "react";
import { getImageUrl } from "../utils/imageUrl";

const AdminGallery = () => {
  const [images, setImages] = useState([]);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState(false);
  // 🔥 Auto hide message
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  // FETCH
  const fetchImages = async () => {
    const res = await fetch(
      "https://araybhat-lrjj.onrender.com/api/gallery/all"
    );
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

    try {
      setUploading(true);

      const formData = new FormData();
      formData.append("image", file);

      const res = await fetch(
        "https://araybhat-lrjj.onrender.com/api/gallery/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) {
        throw new Error("Upload Failed");
      }

      setFile(null);
      setPreview(null);
      setMessage("✅ Image Uploaded Successfully!");

      fetchImages();
    } catch (error) {
      setMessage("❌ Upload Failed!");
    } finally {
      setUploading(false);
    }
  };

  // DELETE IMAGE
  const deleteImage = async (id) => {
    try {
      const res = await fetch(
        `https://araybhat-lrjj.onrender.com/api/gallery/delete/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) {
        throw new Error("Delete Failed");
      }

      setMessage("🗑️ Image Deleted Successfully!");
      fetchImages();
    } catch (error) {
      console.error(error);
      setMessage("❌ Failed to delete image!");
    }
  };

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      {/* 🔥 Message */}
      {message && (
        <div className="mb-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-5 py-3 rounded-xl shadow-lg text-center font-semibold">
          {message}
        </div>
      )}

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-black">
            Gallery Dashboard
          </h1>

          <p className="text-yellow-500 mt-1">
            Upload and manage your gallery images.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl px-6 py-4">
          <p className="text-gray-500 text-sm">Total Images</p>

          <h2 className="text-3xl font-bold text-indigo-600">
            {images.length}
          </h2>
        </div>
      </div>

      {/* 🔥 Upload Section */}
      <div className="bg-white rounded-3xl shadow-xl p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <input
            type="file"
            className="border-2 border-dashed border-indigo-400 rounded-xl p-3 w-full"
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
            disabled={uploading}
            className={`px-8 py-3 rounded-xl shadow-lg text-white font-semibold transition-all duration-300
    ${
      uploading
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-105"
    }`}
          >
            {uploading ? (
              <div className="flex items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>

                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                Please Wait...
              </div>
            ) : (
              "Upload"
            )}
          </button>
        </div>
      </div>

      {/* 🔥 Preview */}
      {preview && (
        <div className="mb-8">
          <h2 className="font-bold mb-3">Preview</h2>

          <img
            src={preview}
            className="w-52 h-52 rounded-2xl object-cover shadow-xl border-4 border-white"
          />
        </div>
      )}

      {/* 🔥 Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img) => (
          <div
            key={img._id}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group"
          >
            <div className="overflow-hidden">
              <img
                src={getImageUrl(img.image)}
                className="w-full h-48 object-cover group-hover:scale-110 duration-500"
              />
            </div>

            <div className="p-4">
              <button
                onClick={() => deleteImage(img._id)}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl font-semibold transition"
              >
                🗑 Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminGallery;
