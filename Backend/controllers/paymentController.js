import Payment from "../models/paymentModel.js";



// ==========================
// ADD PAYMENT DETAILS
// ==========================
export const addPaymentDetails = async (req, res) => {

  try {

    const payment = new Payment(req.body);

    await payment.save();

    res.status(201).json({
      success: true,
      message: "Payment Details Added Successfully",
      payment,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};






// ==========================
// GET PAYMENT DETAILS
// ==========================
export const getPaymentDetails = async (req, res) => {

  try {

    const payment = await Payment.findOne();

    res.status(200).json({
      success: true,
      payment,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};







// ==========================
// UPDATE PAYMENT DETAILS
// ==========================
export const updatePaymentDetails = async (req, res) => {

  try {

    const payment = await Payment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Payment Details Updated Successfully",
      payment,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};