import express from "express";

import {
  addPaymentDetails,
  getPaymentDetails,
  updatePaymentDetails,
} from "../controllers/paymentController.js";

const router = express.Router();



// ADD
router.post("/add", addPaymentDetails);



// GET
router.get("/get", getPaymentDetails);



// UPDATE
router.put("/update/:id", updatePaymentDetails);

export default router;