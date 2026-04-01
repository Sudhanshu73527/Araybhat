import express from "express";
import upload from "../middleware/upload.js";
import {
  addMoment,
  getMoments,
  deleteMoment,
} from "../controllers/schoolMomentController.js";

const router = express.Router();

router.post("/add", upload.single("image"), addMoment);
router.get("/", getMoments);
router.delete("/:id", deleteMoment);

export default router;