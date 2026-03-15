import express from "express";

import {
getAdmission,
saveAdmission
} from "../controllers/admissionController.js";

const router = express.Router();

router.get("/get",getAdmission);

router.post("/save",saveAdmission);

export default router;