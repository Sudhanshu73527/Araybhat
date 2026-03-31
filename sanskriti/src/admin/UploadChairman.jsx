import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const UploadChairman = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle Image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  // Upload
  const handleUpload = async () => {
    if (!image) {
      setMessage("⚠️ Please select an image");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("image", image);

      await axios.post(
        "https://araybhat-1.onrender.com/api/chairman/update",
        formData
      );

      setMessage("✅ Chairman image updated successfully!");
      setImage(null);
      setPreview("");
    } catch (error) {
      setMessage("❌ Upload failed. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617] p-4">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl"
      >

        {/* Title */}
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Update Chairman Image
        </h2>

        {/* Upload Box */}
        <label className="block border-2 border-dashed border-gray-400 rounded-2xl p-6 text-center cursor-pointer hover:border-amber-400 transition">

          <input
            type="file"
            onChange={handleImageChange}
            className="hidden"
          />

          {!preview ? (
            <p className="text-gray-300">
              📁 Click or Drag Image Here
            </p>
          ) : (
            <img
              src={preview}
              alt="preview"
              className="w-full h-56 object-cover rounded-xl"
            />
          )}
        </label>

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          disabled={loading}
          className="mt-6 w-full bg-amber-400 text-black py-3 rounded-xl font-semibold hover:bg-amber-300 transition shadow-lg"
        >
          {loading ? "Uploading..." : "Update Chairman"}
        </button>

        {/* Message */}
        {message && (
          <p className="mt-4 text-center text-sm text-gray-200">
            {message}
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default UploadChairman;