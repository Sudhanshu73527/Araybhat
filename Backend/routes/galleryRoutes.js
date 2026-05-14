import express from "express";
import upload from "../middleware/upload.js";
import Gallery from "../models/Gallery.js";
import { uploadBufferToCloudinary } from "../Config/cloudinary.js";

const router = express.Router();


/* UPLOAD IMAGE */

router.post("/upload",upload.single("image"),async(req,res)=>{

if(!req.file){

return res.status(400).json({message:"No file uploaded"});

}

const uploadedImage = await uploadBufferToCloudinary(req.file.buffer,"gallery");

const newImage = new Gallery({

image:uploadedImage.secure_url

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