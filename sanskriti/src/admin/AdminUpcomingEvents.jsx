import React, { useState, useEffect } from "react";

const AdminUpcomingEvents = () => {

  const [events, setEvents] = useState([]);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
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
  const fetchEvents = async () => {
    const res = await fetch("https://araybhat-1.onrender.com/api/upcoming-events/all");
    const data = await res.json();
    setEvents(data);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // ADD EVENT
  const addEvent = async () => {
    if (!title || !date || !description || !file) {
      setMessage("⚠️ Please fill all fields");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("date", date);
    formData.append("description", description);
    formData.append("image", file);

    await fetch("https://araybhat-1.onrender.com/api/upcoming-events/add", {
      method: "POST",
      body: formData
    });

    setTitle("");
    setDate("");
    setDescription("");
    setFile(null);
    setPreview(null);

    setMessage("✅ Event Added Successfully!");
    fetchEvents();
  };

  // DELETE
  const deleteEvent = async (id) => {
    await fetch(`https://araybhat-1.onrender.com/api/upcoming-events/delete/${id}`, {
      method: "DELETE"
    });

    setMessage("🗑️ Event Deleted Successfully!");
    fetchEvents();
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
        Upcoming Events Manager
      </h1>

      {/* 🔥 FORM */}
      <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md mb-8 flex flex-col gap-4 md:flex-row md:flex-wrap">

        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-3 rounded-xl w-full md:w-[30%]"
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-3 rounded-xl w-full md:w-[30%]"
        />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-3 rounded-xl w-full md:w-[30%]"
        />

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
          onClick={addEvent}
          className="bg-green-600 text-white px-6 py-3 rounded-xl w-full md:w-auto"
        >
          Add Event
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

      {/* 🔥 EVENTS GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

        {events.map((event) => (
          <div
            key={event._id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >

            <img
              src={`https://araybhat-1.onrender.com/uploads/${event.image}`}
              className="w-full h-32 sm:h-40 object-cover"
            />

            <div className="p-3">
              <h3 className="font-semibold text-gray-800 text-sm">
                {event.title}
              </h3>

              <p className="text-xs text-gray-500">
                {event.date}
              </p>

              <button
                onClick={() => deleteEvent(event._id)}
                className="bg-red-600 text-white px-3 py-1 rounded-lg w-full mt-3"
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

export default AdminUpcomingEvents;