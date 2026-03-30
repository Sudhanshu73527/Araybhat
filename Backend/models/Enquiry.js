import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema({
  parentName: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  studentClass: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Contacted"],
    default: "Pending",
  },
}, { timestamps: true });

const Enquiry = mongoose.model("Enquiry", enquirySchema);

export default Enquiry;