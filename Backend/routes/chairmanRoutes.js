import express from "express";
import upload from "../middleware/upload.js";
import {
  getChairman,
  updateChairman,
} from "../controllers/chairmanController.js";

const router = express.Router();

router.get("/", getChairman);
router.post("/update", upload.single("image"), updateChairman);

export default router;