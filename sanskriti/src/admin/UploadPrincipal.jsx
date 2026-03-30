import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const UploadPrincipal = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!image) {
      setMessage("⚠️ Please select an image first");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const formData = new FormData();
      formData.append("image", image);

      await axios.post(
        "https://araybhat-1.onrender.com/api/principal/update",
        formData
      );

      setMessage("✅ Principal image updated successfully!");
      setImage(null);
      setPreview(null);
    } catch (error) {
      console.error(error);
      setMessage("❌ Update failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
          Update Principal Image
        </h2>

        {/* File Upload */}
        <label className="block border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-indigo-500 transition">
          <input
            type="file"
            onChange={handleImageChange}
            className="hidden"
          />
          <p className="text-gray-500">Click to select image</p>
        </label>

        {/* Preview */}
        {preview && (
          <div className="mt-4">
            <img
              src={preview}
              alt="Preview"
              className="w-full h-52 object-cover rounded-lg shadow"
            />
          </div>
        )}

        {/* Button */}
        <button
          onClick={handleUpload}
          disabled={loading}
          className="mt-5 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition font-semibold"
        >
          {loading ? "Updating..." : "Update Image"}
        </button>

        {/* Message */}
        {message && (
          <p className="mt-4 text-center text-sm font-medium text-gray-700">
            {message}
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default UploadPrincipal;