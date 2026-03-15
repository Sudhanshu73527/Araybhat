import express from "express";
import { addFee , getFees } from "../controllers/feeController.js";

const router = express.Router();

router.post("/add",addFee);

router.get("/all",getFees);

export default router;