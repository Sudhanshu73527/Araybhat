import React, { useState } from "react";

const NoticeManager = () => {

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const addNotice = async () => {

    await fetch("http://localhost:5000/api/notices/add", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        title,
        date,
        description
      })

    });

    alert("Notice Added");

  };

  return (

    <div className="p-10">

      <h1 className="text-2xl font-bold mb-6">
        Add Notice
      </h1>

      <input
        placeholder="Notice Title"
        className="border p-2 block mb-4"
        onChange={(e)=>setTitle(e.target.value)}
      />

      <input
        placeholder="Date"
        className="border p-2 block mb-4"
        onChange={(e)=>setDate(e.target.value)}
      />

      <textarea
        placeholder="Description"
        className="border p-2 block mb-4"
        onChange={(e)=>setDescription(e.target.value)}
      />

      <button
        onClick={addNotice}
        className="bg-green-700 text-white px-5 py-2"
      >
        Add Notice
      </button>

    </div>

  );

};

export default NoticeManager;