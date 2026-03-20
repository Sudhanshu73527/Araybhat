import React, { useState, useEffect } from "react";

const AdminFee = () => {

  const [fees, setFees] = useState([]);
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
    total: ""
  });

  // 🔥 Auto hide message
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  // FETCH
  const fetchFees = async () => {
    try {
      const res = await fetch("https://araybhat-1.onrender.com/api/fees/all");
      const data = await res.json();
      setFees(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchFees();
  }, []);

  // INPUT CHANGE
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // ADD FEE
  const submitFee = async () => {
    try {

      await fetch("https://araybhat-1.onrender.com/api/fees/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      setMessage("✅ Fee Added Successfully!");

      setForm({
        className: "",
        tuition: "",
        activity: "",
        computer: "",
        totalPerMonth: "",
        regFee: "",
        development: "",
        admission: "",
        total: ""
      });

      fetchFees();

    } catch (err) {
      console.log(err);
      setMessage("❌ Error adding fee");
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
        Fee Management
      </h2>

      {/* 🔥 FORM */}
      <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

        {Object.keys(form).map((key) => (
          <input
            key={key}
            name={key}
            placeholder={key}
            value={form[key]}
            onChange={handleChange}
            className="border p-3 rounded-xl"
          />
        ))}

      </div>

      <button
        onClick={submitFee}
        className="bg-green-600 text-white px-6 py-3 mt-6 rounded-xl w-full md:w-auto"
      >
        Add Fee
      </button>

      {/* 🔥 MOBILE VIEW (CARDS) */}
      <div className="mt-10 grid gap-4 md:hidden">

        {fees.map((item) => (
          <div key={item._id} className="bg-white p-4 rounded-2xl shadow-md">

            <h3 className="font-bold text-lg text-gray-800">
              {item.className}
            </h3>

            <div className="text-sm text-gray-600 mt-2 space-y-1">
              <p>Tuition: ₹{item.tuition}</p>
              <p>Activity: {item.activity}</p>
              <p>Computer: {item.computer}</p>
              <p className="font-semibold text-green-600">
                Total: ₹{item.total}
              </p>
            </div>

          </div>
        ))}

      </div>

      {/* 🔥 DESKTOP TABLE */}
      <div className="mt-10 overflow-x-auto hidden md:block">

        <table className="min-w-full border text-center bg-white rounded-xl overflow-hidden shadow">

          <thead className="bg-green-600 text-white">
            <tr>
              <th className="p-3">Class</th>
              <th className="p-3">Tuition</th>
              <th className="p-3">Activity</th>
              <th className="p-3">Computer</th>
              <th className="p-3">Total</th>
            </tr>
          </thead>

          <tbody>
            {fees.map((item) => (
              <tr key={item._id} className="border-t">
                <td className="p-3">{item.className}</td>
                <td className="p-3">₹{item.tuition}</td>
                <td className="p-3">{item.activity}</td>
                <td className="p-3">{item.computer}</td>
                <td className="p-3 font-bold text-green-600">
                  ₹{item.total}
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
};

export default AdminFee;