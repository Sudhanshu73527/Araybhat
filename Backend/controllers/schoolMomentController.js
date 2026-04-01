import SchoolMoment from "../models/SchoolMoment.js";
import fs from "fs";
import path from "path";

// ✅ ADD IMAGE
export const addMoment = async (req, res) => {
  try {
    const newMoment = new SchoolMoment({
      title: req.body.title,
      image: req.file.filename, // local storage
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

    // delete image from uploads
    if (moment?.image) {
      const filePath = path.join("uploads", moment.image);

      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    await SchoolMoment.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};