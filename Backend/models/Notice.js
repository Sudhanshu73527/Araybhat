import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },

  date: {
    type: String
  },

  description: {
    type: String
  }

}, { timestamps: true });

export default mongoose.model("Notice", noticeSchema);