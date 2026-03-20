import React, { useEffect, useState } from "react";

const AdminNotices = () => {

  const [notices, setNotices] = useState([]);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState("");

  // 🔥 Auto hide message
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  // FETCH
  const fetchNotices = async () => {
    const res = await fetch("https://araybhat-1.onrender.com/api/notices/all");
    const data = await res.json();
    setNotices(data);
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  // ADD
  const addNotice = async () => {
    await fetch("https://araybhat-1.onrender.com/api/notices/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title, date, description })
    });

    setTitle("");
    setDate("");
    setDescription("");
    setMessage("✅ Notice Added Successfully!");

    fetchNotices();
  };

  // DELETE
  const deleteNotice = async (id) => {
    await fetch(`https://araybhat-1.onrender.com/api/notices/delete/${id}`, {
      method: "DELETE"
    });

    setMessage("🗑️ Notice Deleted Successfully!");
    fetchNotices();
  };

  // EDIT
  const editNotice = (notice) => {
    setEditId(notice._id);
    setTitle(notice.title);
    setDate(notice.date);
    setDescription(notice.description);
  };

  // UPDATE
  const updateNotice = async () => {
    await fetch(`https://araybhat-1.onrender.com/api/notices/update/${editId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title, date, description })
    });

    setEditId(null);
    setTitle("");
    setDate("");
    setDescription("");
    setMessage("✏️ Notice Updated Successfully!");

    fetchNotices();
  };

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">

      {/* 🔥 Success Message */}
      {message && (
        <div className="mb-4 bg-green-500 text-white px-4 py-3 rounded-xl shadow-md text-center font-semibold">
          {message}
        </div>
      )}

      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
        Manage Notices
      </h1>

      {/* 🔥 FORM (Responsive) */}
      <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md mb-6 flex flex-col gap-4 md:flex-row md:flex-wrap">

        <input
          value={title}
          placeholder="Title"
          className="border p-3 rounded-xl w-full md:w-[30%]"
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          value={date}
          placeholder="Date"
          type="date"
          className="border p-3 rounded-xl w-full md:w-[30%]"
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          value={description}
          placeholder="Description"
          className="border p-3 rounded-xl w-full md:w-[30%]"
          onChange={(e) => setDescription(e.target.value)}
        />

        {editId ? (
          <button
            onClick={updateNotice}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl w-full md:w-auto"
          >
            Update Notice
          </button>
        ) : (
          <button
            onClick={addNotice}
            className="bg-green-600 text-white px-6 py-3 rounded-xl w-full md:w-auto"
          >
            Add Notice
          </button>
        )}
      </div>

      {/* 🔥 NOTICE LIST */}
      <div className="grid gap-4">

        {notices.map((n) => (
          <div
            key={n._id}
            className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="font-bold text-lg text-gray-800">
              {n.title}
            </h3>

            <p className="text-sm text-gray-500">{n.date}</p>

            <p className="text-gray-700 mt-2">
              {n.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-4">

              <button
                onClick={() => editNotice(n)}
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg w-full sm:w-auto"
              >
                Edit
              </button>

              <button
                onClick={() => deleteNotice(n._id)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg w-full sm:w-auto"
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

export default AdminNotices;