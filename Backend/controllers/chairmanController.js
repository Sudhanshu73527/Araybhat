import Chairman from "../models/Chairman.js";
import fs from "fs";
import path from "path";

// ✅ GET IMAGE
export const getChairman = async (req, res) => {
  try {
    const data = await Chairman.findOne().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ UPDATE IMAGE
export const updateChairman = async (req, res) => {
  try {
    const oldData = await Chairman.findOne();

    // 🧹 Delete old image
    if (oldData && oldData.image) {
      const filePath = path.join("uploads", oldData.image);

      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }

      await Chairman.deleteMany(); // keep only one
    }

    const newData = new Chairman({
      image: req.file.filename,
    });

    await newData.save();

    res.status(200).json({
      success: true,
      message: "Chairman image updated",
      data: newData,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};