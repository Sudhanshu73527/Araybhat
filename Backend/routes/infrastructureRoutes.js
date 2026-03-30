import express from "express";
import upload from "../middleware/upload.js";
import {
  addInfrastructure,
  getInfrastructure,
  deleteInfrastructure,
} from "../controllers/infrastructureController.js";

const router = express.Router();

router.post("/add", upload.single("image"), addInfrastructure);
router.get("/all", getInfrastructure);
router.delete("/delete/:id", deleteInfrastructure);

export default router;