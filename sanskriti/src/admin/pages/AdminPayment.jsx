import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminPayment = () => {
  const [paymentId, setPaymentId] = useState("");

  const [formData, setFormData] = useState({
    registrationFee: "",

    description: "",

    bankName: "",

    accountName: "",

    accountNumber: "",

    ifscCode: "",

    upiId: "",
  });

  // ======================
  // HANDLE CHANGE
  // ======================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ======================
  // FETCH PAYMENT DETAILS
  // ======================
  const fetchPayment = async () => {
    try {
      const res = await axios.get("https://araybhat-lrjj.onrender.com/api/payment/get");

      if (res.data.payment) {
        setPaymentId(res.data.payment._id);

        setFormData(res.data.payment);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPayment();
  }, []);

  // ======================
  // SAVE / UPDATE
  // ======================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (paymentId) {
        await axios.put(
          `https://araybhat-lrjj.onrender.com/api/payment/update/${paymentId}`,
          formData
        );

        alert("Payment Details Updated");
      } else {
        await axios.post("https://araybhat-lrjj.onrender.com/api/payment/add", formData);

        alert("Payment Details Added");
      }

      fetchPayment();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Payment Admin Panel
        </h1>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">
          <input
            type="text"
            name="registrationFee"
            placeholder="Registration Fee"
            value={formData.registrationFee}
            onChange={handleChange}
            className="border p-3 rounded-xl"
          />

          <input
            type="text"
            name="upiId"
            placeholder="UPI ID"
            value={formData.upiId}
            onChange={handleChange}
            className="border p-3 rounded-xl"
          />

          <input
            type="text"
            name="bankName"
            placeholder="Bank Name"
            value={formData.bankName}
            onChange={handleChange}
            className="border p-3 rounded-xl"
          />

          <input
            type="text"
            name="accountName"
            placeholder="Account Name"
            value={formData.accountName}
            onChange={handleChange}
            className="border p-3 rounded-xl"
          />

          <input
            type="text"
            name="accountNumber"
            placeholder="Account Number"
            value={formData.accountNumber}
            onChange={handleChange}
            className="border p-3 rounded-xl"
          />

          <input
            type="text"
            name="ifscCode"
            placeholder="IFSC Code"
            value={formData.ifscCode}
            onChange={handleChange}
            className="border p-3 rounded-xl"
          />

          <textarea
            name="description"
            placeholder="Registration Payment Description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="border p-3 rounded-xl md:col-span-2"
          ></textarea>

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold md:col-span-2"
          >
            Save Payment Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPayment;
