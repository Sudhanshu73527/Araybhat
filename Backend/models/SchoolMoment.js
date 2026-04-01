import mongoose from "mongoose";

const schoolMomentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const SchoolMoment = mongoose.model("SchoolMoment", schoolMomentSchema);

export default SchoolMoment;