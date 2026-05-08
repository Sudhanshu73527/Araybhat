import express from "express";

import {
  addTeacher,
  getTeachers,
  deleteTeacher,
} from "../controllers/teacherController.js";

const router = express.Router();


// Add Teacher
router.post("/add", addTeacher);


// Get All Teachers
router.get("/all", getTeachers);


// Delete Teacher
router.delete("/delete/:id", deleteTeacher);

export default router;