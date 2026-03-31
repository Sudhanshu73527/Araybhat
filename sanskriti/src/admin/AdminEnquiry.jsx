import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminEnquiry = () => {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://araybhat-1.onrender.com/api/enquiry/all"
      );
      setData(res.data.data);
    } catch (err) {
      setMessage("Failed to fetch data ❌");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ✅ UPDATE STATUS
  const handleStatus = async (id, status) => {
    try {
      await axios.put(
        `https://araybhat-1.onrender.com/api/enquiry/status/${id}`,
        { status }
      );

      setMessage("Status updated successfully ✅");
      fetchData();
      setTimeout(() => setMessage(""), 3000);
    } catch (err) {
      setMessage("Status update failed ❌");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  // ✅ DELETE
  const handleDelete = async (id) => {
    try {
      if (!window.confirm("Are you sure you want to delete?")) return;

      await axios.delete(
        `https://araybhat-1.onrender.com/api/enquiry/delete/${id}`
      );

      setMessage("Deleted successfully 🗑️");
      fetchData();
      setTimeout(() => setMessage(""), 3000);
    } catch (err) {
      setMessage("Delete failed ❌");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <div className="p-4 md:p-6">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
        Parent Enquiries
      </h2>

      {/* ✅ MESSAGE BOX */}
      {message && (
        <div
          className={`mb-4 p-3 rounded text-center font-medium ${
            message.includes("failed")
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {message}
        </div>
      )}

      {/* ✅ DESKTOP TABLE */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="p-3">Name</th>
              <th className="p-3">Mobile</th>
              <th className="p-3">Class</th>
              <th className="p-3">Message</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr
                key={item._id}
                className="text-center border-t hover:bg-gray-50 transition"
              >
                <td className="p-3">{item.parentName}</td>
                <td className="p-3">{item.mobile}</td>
                <td className="p-3">{item.studentClass}</td>
                <td className="p-3">{item.message}</td>

                <td className="p-3">
                  <select
                    className="border px-2 py-1 rounded"
                    value={item.status}
                    onChange={(e) =>
                      handleStatus(item._id, e.target.value)
                    }
                  >
                    <option>Pending</option>
                    <option>Contacted</option>
                  </select>
                </td>

                <td className="p-3">
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ MOBILE CARD VIEW */}
      <div className="md:hidden space-y-4">
        {data.map((item) => (
          <div
            key={item._id}
            className="bg-white shadow-md rounded-xl p-4 border"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-lg">
                {item.parentName}
              </h3>
              <span className="text-sm text-gray-500">
                {item.studentClass}
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-1">
              📞 {item.mobile}
            </p>

            <p className="text-sm text-gray-700 mb-3">
              {item.message}
            </p>

            <div className="flex gap-2">
              <select
                className="border px-2 py-1 rounded w-full"
                value={item.status}
                onChange={(e) =>
                  handleStatus(item._id, e.target.value)
                }
              >
                <option>Pending</option>
                <option>Contacted</option>
              </select>

              <button
                onClick={() => handleDelete(item._id)}
                className="bg-red-500 text-white px-3 py-1 rounded w-full"
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

export default AdminEnquiry;