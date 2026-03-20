import React, { useState, useEffect } from "react";

const AdminAdmission = () => {

  const [form, setForm] = useState({
    title: "",
    description: "",
    startDate: "",
    lastDate: "",
    classes: "",
    hurryMessage: ""
  });

  const [message, setMessage] = useState("");

  // 🔥 Auto hide message
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  // FETCH DATA
  useEffect(() => {
    fetch("https://araybhat-1.onrender.com/api/admission/get")
      .then(res => res.json())
      .then(data => {
        if (data) {
          setForm(data);
        }
      });
  }, []);

  // HANDLE INPUT
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // SAVE DATA
  const saveData = async () => {
    try {
      await fetch("https://araybhat-1.onrender.com/api/admission/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      setMessage("✅ Admission Updated Successfully!");

    } catch (err) {
      console.log(err);
      setMessage("❌ Error updating admission");
    }
  };

  return (
    <div className="p-4 md:p-10 bg-gray-100 min-h-screen">

      {/* 🔥 Message */}
      {message && (
        <div className="mb-4 bg-green-500 text-white px-4 py-3 rounded-xl text-center font-semibold shadow">
          {message}
        </div>
      )}

      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
        Admission Notification Management
      </h2>

      {/* 🔥 FORM CARD */}
      <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md grid grid-cols-1 sm:grid-cols-2 gap-4">

        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="border p-3 rounded-xl"
        />

        <input
          name="classes"
          placeholder="Classes Available"
          value={form.classes}
          onChange={handleChange}
          className="border p-3 rounded-xl"
        />

        <input
          type="date"
          name="startDate"
          value={form.startDate}
          onChange={handleChange}
          className="border p-3 rounded-xl"
        />

        <input
          type="date"
          name="lastDate"
          value={form.lastDate}
          onChange={handleChange}
          className="border p-3 rounded-xl"
        />

        <input
          name="hurryMessage"
          placeholder="Hurry Message"
          value={form.hurryMessage}
          onChange={handleChange}
          className="border p-3 rounded-xl col-span-1 sm:col-span-2"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="border p-3 rounded-xl col-span-1 sm:col-span-2 h-28"
        />

      </div>

      {/* 🔥 BUTTON */}
      <button
        onClick={saveData}
        className="bg-green-600 text-white px-6 py-3 mt-6 rounded-xl w-full md:w-auto"
      >
        Update Admission
      </button>

    </div>
  );
};

export default AdminAdmission;