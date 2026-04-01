import React, { useState, useEffect } from "react";
import axios from "axios";

const UploadMoments = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await axios.get("https://araybhat-1.onrender.com/api/moments");
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Image Preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!title || !image) {
      alert("Please fill all fields");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);

    await axios.post(
      "https://araybhat-1.onrender.com/api/moments/add",
      formData
    );

    alert("Uploaded Successfully ✅");
    setTitle("");
    setImage(null);
    setPreview(null);
    fetchData();
  };

  const handleDelete = async (id) => {
    await axios.delete(`https://araybhat-1.onrender.com/api/moments/${id}`);
    alert("Deleted Successfully ❌");
    fetchData();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Manage School Moments
        </h2>

        {/* Upload Card */}
        <div className="bg-white p-6 rounded-2xl shadow-md mb-10">
          <h3 className="text-xl font-semibold mb-4">Upload New Moment</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Enter Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="file"
              onChange={handleImageChange}
              className="border p-2 rounded-lg w-full"
            />
          </div>

          {/* Preview */}
          {preview && (
            <div className="mt-4">
              <p className="text-sm text-gray-500 mb-2">Preview:</p>
              <img
                src={preview}
                alt="preview"
                className="w-40 h-28 object-cover rounded-lg shadow"
              />
            </div>
          )}

          <button
            onClick={handleUpload}
            className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow"
          >
            Upload
          </button>
        </div>

        {/* Gallery Section */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <img
                src={`https://araybhat-1.onrender.com/uploads/${item.image}`}
                alt={item.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h4 className="font-semibold text-gray-700 mb-2">
                  {item.title}
                </h4>

                <button
                  onClick={() => handleDelete(item._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default UploadMoments;