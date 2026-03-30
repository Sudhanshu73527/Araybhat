import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminEnquiry = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/enquiry/all"
    );
    setData(res.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // UPDATE STATUS
  const handleStatus = async (id, status) => {
    await axios.put(
      `http://localhost:5000/api/enquiry/status/${id}`,
      { status }
    );
    fetchData();
  };

  // DELETE
  const handleDelete = async (id) => {
    await axios.delete(
      `http://localhost:5000/api/enquiry/delete/${id}`
    );
    fetchData();
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Parent Enquiries</h2>

      <div className="overflow-x-auto">
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th>Name</th>
              <th>Mobile</th>
              <th>Class</th>
              <th>Message</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={item._id} className="text-center border-t">
                <td>{item.parentName}</td>
                <td>{item.mobile}</td>
                <td>{item.studentClass}</td>
                <td>{item.message}</td>

                <td>
                  <select
                    value={item.status}
                    onChange={(e) =>
                      handleStatus(item._id, e.target.value)
                    }
                  >
                    <option>Pending</option>
                    <option>Contacted</option>
                  </select>
                </td>

                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminEnquiry;