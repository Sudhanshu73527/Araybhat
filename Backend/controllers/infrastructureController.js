import Infrastructure from "../models/Infrastructure.js";
import { uploadBufferToCloudinary } from "../Config/cloudinary.js";

// ================= ADD IMAGE =================
export const addInfrastructure = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const uploadedImage = await uploadBufferToCloudinary(
      req.file.buffer,
      "infrastructure"
    );

    const newData = new Infrastructure({
      image: uploadedImage.secure_url,
    });

    await newData.save();

    res.status(201).json({
      success: true,
      message: "Image uploaded successfully",
      data: newData,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ================= GET ALL IMAGES =================
export const getInfrastructure = async (req, res) => {
  try {
    const data = await Infrastructure.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: data.length,
      data,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ================= DELETE IMAGE (DB + FILE) =================
export const deleteInfrastructure = async (req, res) => {
  try {
    const { id } = req.params;

    // 🔍 Find image first
    const imageData = await Infrastructure.findById(id);

    if (!imageData) {
      return res.status(404).json({
        success: false,
        message: "Image not found",
      });
    }

    // 🗑️ Delete from DB
    await Infrastructure.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Image deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};