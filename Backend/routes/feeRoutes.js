// ===============================
// routes/feeRoutes.js
// ===============================

import express from "express";

import {
  addFee,
  getFees,
  updateFee,
  deleteFee,
} from "../controllers/feeController.js";

const router = express.Router();



// ADD FEE
router.post("/add", addFee);



// GET FEES
router.get("/all", getFees);



// UPDATE FEE
router.put("/update/:id", updateFee);



// DELETE FEE
router.delete("/delete/:id", deleteFee);



export default router;