import express from "express";
import {
  createEnquiry,
  getEnquiries,
  updateStatus,
  deleteEnquiry,
} from "../controllers/enquiryController.js";

const router = express.Router();

router.post("/add", createEnquiry);
router.get("/all", getEnquiries);
router.put("/status/:id", updateStatus);
router.delete("/delete/:id", deleteEnquiry);

export default router;

