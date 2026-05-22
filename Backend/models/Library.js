import mongoose from "mongoose";

const librarySchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      required: true,
    },

    subHeading: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    quote: {
      type: String,
      required: true,
    },

    image1: {
      type: String,
      required: true,
    },

    image2: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Library = mongoose.model(
  "Library",
  librarySchema
);

export default Library;