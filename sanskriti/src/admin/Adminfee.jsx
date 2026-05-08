// ===============================
// AdminFee.jsx
// ===============================

import React, { useEffect, useState } from "react";

const AdminFee = () => {

  const [fees, setFees] = useState([]);

  const [editId, setEditId] = useState(null);

  const [message, setMessage] = useState("");



  const [form, setForm] = useState({
    className: "",
    tuition: "",
    activity: "",
    computer: "",
    totalPerMonth: "",
    regFee: "",
    development: "",
    admission: "",
    total: "",
  });






  // ===================================
  // FETCH FEES
  // ===================================
  const fetchFees = async () => {

    try {

      const res = await fetch(
        "http://localhost:5000/api/fees/all"
      );

      const data = await res.json();

      setFees(data);

    } catch (error) {

      console.log(error);
    }
  };



  useEffect(() => {
    fetchFees();
  }, []);







  // ===================================
  // HANDLE CHANGE
  // ===================================
  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };








  // ===================================
  // ADD OR UPDATE
  // ===================================
  const submitFee = async () => {

    try {

      // UPDATE
      if (editId) {

        await fetch(
          `http://localhost:5000/api/fees/update/${editId}`,
          {
            method: "PUT",

            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify(form),
          }
        );

        setMessage("Fee Updated Successfully");
      }



      // ADD
      else {

        await fetch(
          "http://localhost:5000/api/fees/add",
          {
            method: "POST",

            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify(form),
          }
        );

        setMessage("Fee Added Successfully");
      }







      // RESET FORM
      setForm({
        className: "",
        tuition: "",
        activity: "",
        computer: "",
        totalPerMonth: "",
        regFee: "",
        development: "",
        admission: "",
        total: "",
      });

      setEditId(null);

      fetchFees();

    } catch (error) {

      console.log(error);
    }
  };








  // ===================================
  // DELETE
  // ===================================
  const deleteFee = async (id) => {

    try {

      await fetch(
        `http://localhost:5000/api/fees/delete/${id}`,
        {
          method: "DELETE",
        }
      );

      setMessage("Fee Deleted Successfully");

      fetchFees();

    } catch (error) {

      console.log(error);
    }
  };








  // ===================================
  // EDIT
  // ===================================
  const editFee = (item) => {

    setEditId(item._id);

    setForm({
      className: item.className,
      tuition: item.tuition,
      activity: item.activity,
      computer: item.computer,
      totalPerMonth: item.totalPerMonth,
      regFee: item.regFee,
      development: item.development,
      admission: item.admission,
      total: item.total,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };








  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-7xl mx-auto">



        {/* HEADING */}
        <div className="mb-8 text-center">

          <h1 className="text-4xl font-bold text-gray-800">
            Fee Management
          </h1>

          <p className="text-gray-600 mt-2">
            Add, Update & Delete School Fees
          </p>

        </div>






        {/* MESSAGE */}
        {message && (

          <div className="bg-green-600 text-white p-3 rounded-xl mb-6 text-center">

            {message}

          </div>
        )}








        {/* FORM */}
        <div className="bg-white rounded-2xl shadow-lg p-6 grid md:grid-cols-3 gap-4">

          {Object.keys(form).map((key) => (

            <input
              key={key}
              type="text"
              name={key}
              placeholder={key}
              value={form[key]}
              onChange={handleChange}
              className="border p-3 rounded-xl outline-none"
            />
          ))}

        </div>








        {/* BUTTON */}
        <button
          onClick={submitFee}
          className={`mt-6 px-8 py-3 rounded-xl text-white font-semibold ${
            editId
              ? "bg-blue-600"
              : "bg-green-600"
          }`}
        >

          {editId
            ? "Update Fee"
            : "Add Fee"}

        </button>









        {/* FEES */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

          {fees.map((item) => (

            <div
              key={item._id}
              className="bg-white rounded-2xl shadow-lg p-5"
            >

              <h2 className="text-2xl font-bold text-gray-800">
                {item.className}
              </h2>






              <div className="mt-4 space-y-2 text-gray-600">

                <p>Tuition : ₹{item.tuition}</p>

                <p>Activity : ₹{item.activity}</p>

                <p>Computer : ₹{item.computer}</p>

                <p>Total/Month : ₹{item.totalPerMonth}</p>

                <p>Registration : ₹{item.regFee}</p>

                <p>Development : ₹{item.development}</p>

                <p>Admission : ₹{item.admission}</p>

                <p className="font-bold text-green-600">
                  Total : ₹{item.total}
                </p>

              </div>







              {/* BUTTONS */}
              <div className="flex gap-3 mt-6">

                <button
                  onClick={() => editFee(item)}
                  className="flex-1 bg-blue-600 text-white py-2 rounded-xl"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteFee(item._id)}
                  className="flex-1 bg-red-600 text-white py-2 rounded-xl"
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

export default AdminFee;