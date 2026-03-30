import Principal from "../models/Principal.js";
import fs from "fs";
import path from "path";

// ✅ GET PRINCIPAL IMAGE
export const getPrincipal = async (req, res) => {
  try {
    const data = await Principal.findOne().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ UPDATE / ADD IMAGE
export const updatePrincipal = async (req, res) => {
  try {
    const oldData = await Principal.findOne();

    // 🧹 Delete old image
    if (oldData && oldData.image) {
      const filePath = path.join("uploads", oldData.image);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
      await Principal.deleteMany(); // keep only one record
    }

    const newData = new Principal({
      image: req.file.filename,
    });

    await newData.save();

    res.status(200).json({
      success: true,
      message: "Principal image updated",
      data: newData,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};