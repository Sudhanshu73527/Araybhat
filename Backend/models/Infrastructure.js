import mongoose from "mongoose";

const infrastructureSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Infrastructure = mongoose.model("Infrastructure", infrastructureSchema);

export default Infrastructure;