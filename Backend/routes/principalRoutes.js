import express from "express";
import upload from "../middleware/upload.js";
import {
  getPrincipal,
  updatePrincipal,
} from "../controllers/principalController.js";

const router = express.Router();

router.get("/", getPrincipal);
router.post("/update", upload.single("image"), updatePrincipal);

export default router;