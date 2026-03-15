import express from "express";
import upload from "../middleware/upload.js";
import Gallery from "../models/Gallery.js";

const router = express.Router();


/* UPLOAD IMAGE */

router.post("/upload",upload.single("image"),async(req,res)=>{

const newImage = new Gallery({

image:req.file.filename

});

await newImage.save();

res.json(newImage);

});


/* GET ALL IMAGES */

router.get("/all",async(req,res)=>{

const images = await Gallery.find().sort({createdAt:-1});

res.json(images);

});


/* DELETE IMAGE */

router.delete("/delete/:id",async(req,res)=>{

await Gallery.findByIdAndDelete(req.params.id);

res.json({message:"Deleted"});

});


export default router;