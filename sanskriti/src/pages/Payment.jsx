import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaMobileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

const Payment = () => {

  // =========================
  // PAYMENT STATE
  // =========================
  const [payment, setPayment] = useState({
    description: "",
    registrationFee: "",
    bankName: "",
    accountName: "",
    accountNumber: "",
    ifscCode: "",
    upiId: "",
  });

  const [loading, setLoading] = useState(true);





  // =========================
  // FETCH PAYMENT DETAILS
  // =========================
  const fetchPayment = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/payment/get"
      );

      if (res.data.payment) {

        setPayment(res.data.payment);

      }

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };





  useEffect(() => {

    fetchPayment();

  }, []);







  // =========================
  // LOADING UI
  // =========================
  if (loading) {

    return (

      <div className="min-h-screen flex items-center justify-center bg-gray-100">

        <h1 className="text-2xl font-semibold text-gray-700">
          Loading Payment Details...
        </h1>

      </div>

    );
  }







  return (

    <section className="min-h-screen bg-gray-100 py-10 px-4 flex items-center justify-center">

      <div className="w-full max-w-6xl">




        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >

          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">

            Complete Your Registration

          </h1>

          <p className="text-gray-600 mt-4 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">

            Kindly complete your admission payment using the payment details
            provided below to confirm your registration successfully.

          </p>

        </motion.div>








        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >




          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-10">




            {/* LEFT SIDE */}
            <div className="flex flex-col justify-center">

              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-5">

                Registration Payment

              </h2>






              {/* DESCRIPTION */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">

                <p className="text-gray-600 leading-8 text-[15px]">

                  {payment?.description ||
                    "Payment details will be updated soon."}

                </p>

              </div>







              {/* FEE BOX */}
              <div className="mt-8 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-8 text-white shadow-lg">

                <h3 className="text-lg md:text-xl font-semibold mb-3">

                  Registration Fee

                </h3>

                <h1 className="text-5xl md:text-6xl font-bold">

                  ₹{payment?.registrationFee || "0"}

                </h1>

                <p className="mt-3 text-green-100 text-sm">

                  One Time Admission Registration Fee

                </p>

              </div>

            </div>









            {/* RIGHT SIDE */}
            <div className="flex flex-col gap-6 justify-center">




              {/* BANK DETAILS */}
              <div className="border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300">

                <div className="flex items-center gap-3 mb-6">

                  <div className="bg-blue-100 p-3 rounded-xl">

                    <FaUniversity className="text-blue-600 text-2xl" />

                  </div>

                  <h2 className="text-2xl font-bold text-gray-800">

                    Bank Details

                  </h2>

                </div>






                <div className="space-y-4 text-gray-700">

                  <div className="flex justify-between gap-4">

                    <span className="font-semibold">
                      Bank Name :
                    </span>

                    <span className="text-right">
                      {payment?.bankName || "N/A"}
                    </span>

                  </div>






                  <div className="flex justify-between gap-4">

                    <span className="font-semibold">
                      Account Name :
                    </span>

                    <span className="text-right">
                      {payment?.accountName || "N/A"}
                    </span>

                  </div>






                  <div className="flex justify-between gap-4">

                    <span className="font-semibold">
                      Account Number :
                    </span>

                    <span className="text-right break-all">
                      {payment?.accountNumber || "N/A"}
                    </span>

                  </div>






                  <div className="flex justify-between gap-4">

                    <span className="font-semibold">
                      IFSC Code :
                    </span>

                    <span className="text-right">
                      {payment?.ifscCode || "N/A"}
                    </span>

                  </div>

                </div>

              </div>









              {/* UPI DETAILS */}
              <div className="border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300">

                <div className="flex items-center gap-3 mb-6">

                  <div className="bg-green-100 p-3 rounded-xl">

                    <FaMobileAlt className="text-green-600 text-2xl" />

                  </div>

                  <h2 className="text-2xl font-bold text-gray-800">

                    UPI Payment

                  </h2>

                </div>






                <div className="bg-green-50 border border-green-100 rounded-2xl p-6 text-center">

                  <p className="text-gray-500 text-sm mb-3">

                    UPI ID

                  </p>

                  <h3 className="text-2xl md:text-3xl font-bold text-green-600 break-all">

                    {payment?.upiId || "N/A"}

                  </h3>

                </div>






                <p className="text-gray-500 text-sm mt-5 text-center leading-6">

                  Pay securely using Google Pay, PhonePe,
                  Paytm, BHIM or any UPI supported application.

                </p>

              </div>

            </div>

          </div>









          {/* BUTTON */}
          <div className="border-t border-gray-200 p-6 flex justify-center">

            <Link to={"/Paymentdetails"}>

              <button className="bg-green-600 hover:bg-green-700 text-white px-8 md:px-12 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-lg hover:scale-105">

                Submit Details After Payment

              </button>

            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Payment;