// ===============================
// controllers/feeController.js
// ===============================

import Fee from "../models/FeeModel.js";



// ====================================
// ADD FEE
// ====================================
export const addFee = async (req, res) => {

  try {

    const fee = await Fee.create(req.body);

    res.status(201).json({
      success: true,
      message: "Fee Added Successfully",
      fee,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};






// ====================================
// GET ALL FEES
// ====================================
export const getFees = async (req, res) => {

  try {

    const fees = await Fee.find().sort({
      createdAt: -1,
    });

    res.status(200).json(fees);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};







// ====================================
// UPDATE FEE
// ====================================
export const updateFee = async (req, res) => {

  try {

    const updatedFee = await Fee.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Fee Updated Successfully",
      updatedFee,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};








// ====================================
// DELETE FEE
// ====================================
export const deleteFee = async (req, res) => {

  try {

    await Fee.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Fee Deleted Successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};