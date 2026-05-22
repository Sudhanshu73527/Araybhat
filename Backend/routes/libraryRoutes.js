import express from "express";

import upload from "../middleware/upload.js";

import {
  getLibrary,
  updateLibrary,
} from "../controllers/libraryController.js";

const router = express.Router();


// GET
router.get(
  "/",
  getLibrary
);


// UPDATE
router.put(
  "/update",

  upload.fields([
    {
      name: "image1",
      maxCount: 1,
    },

    {
      name: "image2",
      maxCount: 1,
    },
  ]),

  updateLibrary
);

export default router;