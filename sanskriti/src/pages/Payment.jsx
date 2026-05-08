import React from "react";
import { motion } from "framer-motion";
import {
  FaUniversity,
  FaMobileAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Payment = () => {

  const handleSubmit = () => {

    alert("Payment Details Submitted Successfully");

  };




  return (

    <section className="min-h-screen bg-gray-100 py-14 px-4">

      <div className="max-w-5xl mx-auto">




        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >

          <h1 className="text-4xl font-bold text-gray-800">

            Complete Your Registration

          </h1>

          <p className="text-gray-600 mt-3 text-lg">

            Kindly complete your admission payment using the details below
            to confirm your registration successfully.

          </p>

        </motion.div>









        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-xl rounded-3xl overflow-hidden"
        >



          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-10">



            {/* Left Side */}
            <div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">

                Registration Payment

              </h2>






              <div className="space-y-4 text-gray-600 leading-relaxed">

                <p>
                  Please make the payment using the bank account
                  or UPI details provided.
                </p>

                <p>
                  After successful payment, your admission
                  registration will be verified by the school administration.
                </p>

                <p>
                  Keep your payment screenshot or transaction ID
                  safe for future verification.
                </p>

              </div>







              {/* Fee Box */}
              <div className="mt-8 bg-green-50 border border-green-100 rounded-2xl p-6">

                <h3 className="text-xl font-semibold text-gray-800 mb-3">

                  Registration Fee

                </h3>

                <p className="text-5xl font-bold text-green-600">

                  ₹2,500

                </p>

                <p className="text-sm text-gray-500 mt-2">

                  One Time Admission Registration Fee

                </p>

              </div>

            </div>












            {/* Right Side */}
            <div className="space-y-6">


              {/* Bank Details */}
              <div className="border rounded-2xl p-6">

                <div className="flex items-center gap-3 mb-5">

                  <FaUniversity className="text-blue-600 text-2xl" />

                  <h2 className="text-2xl font-bold text-gray-800">

                    Bank Details

                  </h2>

                </div>






                <div className="space-y-3 text-gray-600">

                  <p>
                    <span className="font-semibold text-gray-800">
                      Bank Name :
                    </span>{" "}
                    State Bank of India
                  </p>

                  <p>
                    <span className="font-semibold text-gray-800">
                      Account Name :
                    </span>{" "}
                    Aryabhatta National Public School
                  </p>

                  <p>
                    <span className="font-semibold text-gray-800">
                      Account Number :
                    </span>{" "}
                    123456789012
                  </p>

                  <p>
                    <span className="font-semibold text-gray-800">
                      IFSC Code :
                    </span>{" "}
                    SBIN0001234
                  </p>

                </div>

              </div>









              {/* UPI Details */}
              <div className="border rounded-2xl p-6">

                <div className="flex items-center gap-3 mb-5">

                  <FaMobileAlt className="text-green-600 text-2xl" />

                  <h2 className="text-2xl font-bold text-gray-800">

                    UPI Payment

                  </h2>

                </div>






                <div className="bg-gray-100 rounded-xl p-5 text-center">

                  <p className="text-gray-500 text-sm mb-2">

                    UPI ID

                  </p>

                  <h3 className="text-2xl font-bold text-green-600 break-all">

                    schoolpayment@upi

                  </h3>

                </div>






                <p className="text-gray-500 text-sm mt-4 text-center">

                  Pay using Google Pay, PhonePe, Paytm, BHIM, etc.

                </p>

              </div>

            </div>

          </div>









          {/* Submit Button */}
          <div className="border-t p-6 text-center">
          
          <Link to={"/Paymentdetails"}>
            <button
              onClick={handleSubmit}
              className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg"
            >

              Submit Details After Complete Payment

            </button>
            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Payment;