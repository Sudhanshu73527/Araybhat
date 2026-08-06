import React, { useState, useEffect } from "react";
import { getImageUrl } from "../utils/imageUrl";

const AdminEvents = () => {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState("");
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
  const fetchEvents = async () => {
    const res = await fetch(
      "https://araybhat-lrjj.onrender.com/api/events/all"
    );
    const data = await res.json();
    setEvents(data);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // UPLOAD
  const uploadEvent = async () => {
    if (!title || !file) {
      setMessage("⚠️ Please fill all fields");
      return;
    }

    try {
      setUploading(true);

      const formData = new FormData();
      formData.append("title", title);
      formData.append("image", file);

      const res = await fetch(
        "https://araybhat-lrjj.onrender.com/api/events/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) {
        throw new Error("Upload Failed");
      }

      setTitle("");
      setFile(null);
      setPreview(null);

      setMessage("✅ Event Uploaded Successfully!");

      fetchEvents();
    } catch (error) {
      console.error(error);
      setMessage("❌ Upload Failed!");
    } finally {
      setUploading(false);
    }
  };

  // DELETE
  const deleteEvent = async (id) => {
    await fetch(`https://araybhat-lrjj.onrender.com/api/events/delete/${id}`, {
      method: "DELETE",
    });

    setMessage("🗑️ Event Deleted Successfully!");
    fetchEvents();
  };

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      {/* 🔥 Message */}
      {message && (
        <div className="mb-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-3 rounded-2xl shadow-lg text-center font-semibold">
          {message}
        </div>
      )}

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-black">
            Event Dashboard
          </h1>

          <p className="text-gray-500">Upload and manage school events.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg px-6 py-4">
          <p className="text-sm text-gray-500">Total Events</p>

          <h2 className="text-3xl font-bold text-indigo-600">
            {events.length}
          </h2>
        </div>
      </div>

      {/* 🔥 FORM */}
      <div className="bg-white rounded-3xl shadow-xl p-6 mb-8">
        <div className="grid md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Enter Event Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="file"
            className="border-2 border-dashed border-indigo-400 rounded-xl p-3"
            onChange={(e) => {
              const selected = e.target.files[0];
              setFile(selected);

              if (selected) {
                setPreview(URL.createObjectURL(selected));
              }
            }}
          />

          <button
            onClick={uploadEvent}
            disabled={uploading}
            className={`rounded-xl text-white font-semibold py-3 transition-all duration-300 ${
              uploading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-105"
            }`}
          >
            {uploading ? "⏳ Please Wait..." : "🚀 Upload Event"}
          </button>
        </div>
      </div>

      {/* 🔥 Preview */}
      {preview && (
        <div className="mb-8">
          <h2 className="font-bold mb-3">Preview</h2>

          <img
            src={preview}
            className="w-56 h-56 object-cover rounded-2xl shadow-xl border-4 border-white"
          />
        </div>
      )}

      {/* 🔥 EVENTS GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {events.map((event) => (
          <div
            key={event._id}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group"
          >
            <img
              src={getImageUrl(event.image)}
              className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="p-3">
              <h3 className="font-bold text-gray-800 text-center text-lg">
                {event.title}
              </h3>

              <button
                onClick={() => deleteEvent(event._id)}
                className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl transition"
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

export default AdminEvents;
