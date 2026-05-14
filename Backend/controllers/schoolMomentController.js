import SchoolMoment from "../models/SchoolMoment.js";
import { uploadBufferToCloudinary } from "../Config/cloudinary.js";

// ✅ ADD IMAGE
export const addMoment = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const uploadedImage = await uploadBufferToCloudinary(
      req.file.buffer,
      "moments"
    );

    const newMoment = new SchoolMoment({
      title: req.body.title,
      image: uploadedImage.secure_url,
    });

    await newMoment.save();

    res.status(201).json({
      success: true,
      message: "Moment added",
      data: newMoment,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ GET ALL
export const getMoments = async (req, res) => {
  try {
    const data = await SchoolMoment.find().sort({ createdAt: -1 });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ DELETE
export const deleteMoment = async (req, res) => {
  try {
    const moment = await SchoolMoment.findById(req.params.id);

    await SchoolMoment.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};