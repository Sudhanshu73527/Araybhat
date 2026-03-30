import mongoose from "mongoose";

const principalSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Principal = mongoose.model("Principal", principalSchema);

export default Principal;