import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({

  registrationFee: {
    type: Number,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  bankName: {
    type: String,
    required: true,
  },

  accountName: {
    type: String,
    required: true,
  },

  accountNumber: {
    type: String,
    required: true,
  },

  ifscCode: {
    type: String,
    required: true,
  },

  upiId: {
    type: String,
    required: true,
  },

}, { timestamps: true });

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;