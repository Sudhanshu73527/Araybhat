import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const BASE_URL = "https://araybhat-1.onrender.com";

const UploadInfra = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [images, setImages] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔹 Fetch all images
  const fetchImages = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/api/infrastructure/all`
      );

      setImages(res.data.data); // ✅ FIXED
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // 🔹 Handle Image Change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  // 🔹 Upload
  const handleUpload = async () => {
    if (!image) {
      setMessage("⚠️ Select an image first");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("image", image);

      await axios.post(
        `${BASE_URL}/api/infrastructure/add`,
        formData
      );

      setMessage("✅ Uploaded successfully!");
      setImage(null);
      setPreview(null);

      fetchImages(); // refresh
    } catch (error) {
      setMessage("❌ Upload failed");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `${BASE_URL}/api/infrastructure/delete/${id}`
      );

      setMessage("🗑 Deleted successfully!");

      // instant UI update (no reload needed)
      setImages((prev) => prev.filter((img) => img._id !== id));
    } catch (error) {
      setMessage("❌ Delete failed");
    }
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-green-100 min-h-screen">
      
      {/* Upload Section */}
      <div className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4 text-center">
          Upload Infrastructure
        </h2>

        <input type="file" onChange={handleImageChange} />

        {preview && (
          <img
            src={preview}
            alt="preview"
            className="mt-3 rounded-lg h-40 w-full object-cover"
          />
        )}

        <button
          onClick={handleUpload}
          className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg"
        >
          {loading ? "Uploading..." : "Upload"}
        </button>

        {message && (
          <p className="mt-3 text-center text-sm">{message}</p>
        )}
      </div>

      {/* Gallery Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Uploaded Images
        </h2>

        {images.length === 0 ? (
          <p className="text-center text-gray-500">
            No images uploaded yet
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((img) => {
              const imageUrl = `${BASE_URL}/uploads/${img.image}`;

              return (
                <motion.div
                  key={img._id}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-3 rounded-xl shadow"
                >
                  <img
                    src={imageUrl} // ✅ FIXED
                    alt="infra"
                    className="w-full h-48 object-cover rounded-lg"
                  />

                  <button
                    onClick={() => handleDelete(img._id)}
                    className="mt-3 w-full bg-red-500 text-white py-1 rounded-lg hover:bg-red-600"
                  >
                    Delete
                  </button>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadInfra;