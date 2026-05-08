// ===============================
// models/FeeModel.js
// ===============================

import mongoose from "mongoose";

const feeSchema = new mongoose.Schema(
  {
    className: {
      type: String,
      required: true,
    },

    tuition: {
      type: Number,
      required: true,
    },

    activity: {
      type: Number,
      default: 0,
    },

    computer: {
      type: Number,
      default: 0,
    },

    totalPerMonth: {
      type: Number,
      required: true,
    },

    regFee: {
      type: Number,
      required: true,
    },

    development: {
      type: Number,
      required: true,
    },

    admission: {
      type: Number,
      required: true,
    },

    total: {
      type: Number,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

const Fee = mongoose.model("Fee", feeSchema);

export default Fee;