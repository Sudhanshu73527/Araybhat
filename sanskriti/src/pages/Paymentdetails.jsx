import React, { useState } from "react";

const Paymentdetails = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    paymentMethod: "",
    paymentName: "",
    paymentDone: false,
  });

  // =========================
  // HANDLE CHANGE
  // =========================
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // =========================
  // HANDLE SUBMIT
  // =========================
  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp Message
    const message = `
📌 Payment Details Submitted

👤 Parent Name: ${formData.parentName}

💳 Payment Method: ${formData.paymentMethod}

🧾 Payment Sent From Name: ${formData.paymentName}

✅ Payment Completed: ${formData.paymentDone ? "Yes" : "No"}
    `;

    // WhatsApp Number
    const phoneNumber = "919931979868";

    // WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    alert("Payment Details Submitted Successfully");

    // Reset Form
    setFormData({
      parentName: "",
      paymentMethod: "",
      paymentName: "",
      paymentDone: false,
    });
  };

  return (
    <section className="min-h-screen bg-gray-100 py-14 px-4">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Payment Details Form
          </h1>

          <p className="text-gray-600 mt-2">
            Kindly submit your payment details for verification.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Parent Name */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Parent Name
            </label>

            <input
              type="text"
              name="parentName"
              placeholder="Enter Parent Name"
              value={formData.parentName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:border-green-500"
            />
          </div>

          {/* Payment Method */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Payment Method
            </label>

            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:border-green-500"
            >
              <option value="">Select Payment Method</option>

              <option value="UPI">UPI</option>

              <option value="Bank Account">Bank Account</option>
            </select>
          </div>

          {/* Payment Sent Name */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Payment Sent From Name
            </label>

            <input
              type="text"
              name="paymentName"
              placeholder="Enter Name Used During Payment"
              value={formData.paymentName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:border-green-500"
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="paymentDone"
              checked={formData.paymentDone}
              onChange={handleChange}
              className="w-5 h-5"
            />

            <label className="text-gray-700 font-medium">
              Payment Completed
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition-all duration-300"
          >
            Submit Payment Details
          </button>
        </form>
      </div>
    </section>
  );
};

export default Paymentdetails;
