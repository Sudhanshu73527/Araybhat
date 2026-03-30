import Enquiry from "../models/Enquiry.js";

// CREATE ENQUIRY
export const createEnquiry = async (req, res) => {
  try {
    const newEnquiry = new Enquiry(req.body);
    await newEnquiry.save();

    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ALL ENQUIRIES (ADMIN)
export const getEnquiries = async (req, res) => {
  try {
    const data = await Enquiry.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE STATUS
export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;

    await Enquiry.findByIdAndUpdate(req.params.id, { status });

    res.status(200).json({
      success: true,
      message: "Status updated",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE ENQUIRY
export const deleteEnquiry = async (req, res) => {
  try {
    await Enquiry.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

