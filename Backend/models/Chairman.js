import mongoose from "mongoose";

const chairmanSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Chairman = mongoose.model("Chairman", chairmanSchema);

export default Chairman;