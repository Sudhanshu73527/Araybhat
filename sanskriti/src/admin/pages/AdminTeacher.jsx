import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminTeacher = () => {
  const [teachers, setTeachers] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    experience: "",
    image: "",
  });

  // ======================
  // Handle Input
  // ======================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ======================
  // Fetch Teachers
  // ======================
  const fetchTeachers = async () => {
    try {
      const res = await axios.get("https://araybhat-1.onrender.com/api/teachers/all");

      setTeachers(res.data.teachers);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  // ======================
  // Add Teacher
  // ======================
  const addTeacher = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://araybhat-1.onrender.com/api/teachers/add", formData);

      alert("Teacher Added Successfully");

      setFormData({
        name: "",
        subject: "",
        experience: "",
        image: "",
      });

      fetchTeachers();
    } catch (error) {
      console.log(error);
    }
  };

  // ======================
  // Delete Teacher
  // ======================
  const deleteTeacher = async (id) => {
    try {
      await axios.delete(`https://araybhat-1.onrender.com/api/teachers/delete/${id}`);

      alert("Teacher Deleted");

      fetchTeachers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Teacher Admin Panel
          </h1>

          <p className="text-gray-600 mt-2">
            Manage all teacher details from here
          </p>
        </div>

        {/* Add Teacher Form */}
        <form
          onSubmit={addTeacher}
          className="bg-white shadow-lg rounded-2xl p-6 mb-10"
        >
          <div className="grid md:grid-cols-2 gap-5">
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Teacher Name"
              value={formData.name}
              onChange={handleChange}
              className="border p-3 rounded-xl outline-none"
              required
            />

            {/* Subject */}
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="border p-3 rounded-xl outline-none"
              required
            />

            {/* Experience */}
            <input
              type="text"
              name="experience"
              placeholder="Experience"
              value={formData.experience}
              onChange={handleChange}
              className="border p-3 rounded-xl outline-none"
              required
            />

            {/* Image URL */}
            <input
              type="text"
              name="image"
              placeholder="Teacher Image URL"
              value={formData.image}
              onChange={handleChange}
              className="border p-3 rounded-xl outline-none"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="mt-6 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer"
          >
            Add Teacher
          </button>
        </form>

        {/* Teacher List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher) => (
            <div
              key={teacher._id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Image */}
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-full h-72 object-cover"
              />

              {/* Content */}
              <div className="p-5">
                <h2 className="text-2xl font-bold text-gray-800">
                  {teacher.name}
                </h2>

                <p className="text-gray-600 mt-2">
                  Subject : {teacher.subject}
                </p>

                <p className="text-gray-600">
                  Experience : {teacher.experience}
                </p>

                {/* Delete Button */}
                <button
                  onClick={() => deleteTeacher(teacher._id)}
                  className="mt-5 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer"
                >
                  Delete Teacher
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminTeacher;
