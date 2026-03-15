import express from "express";

import {
  addNotice,
  getNotices,
  deleteNotice,
  updateNotice
} from "../controllers/noticeController.js";

const router = express.Router();

router.post("/add", addNotice);

router.get("/all", getNotices);

router.delete("/delete/:id", deleteNotice);

router.put("/update/:id", updateNotice);

export default router;