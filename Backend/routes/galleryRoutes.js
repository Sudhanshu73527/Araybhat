import express from "express";
import upload from "../middleware/upload.js";
import Gallery from "../models/Gallery.js";
import { uploadBufferToCloudinary } from "../Config/cloudinary.js";

const router = express.Router();


/* UPLOAD IMAGE */

const parseGalleryUpload = (req, res) =>
new Promise((resolve, reject) => {
upload.single("image")(req, res, (err) => {
if (err) {
reject(err);
return;
}

resolve();
});
});

router.post("/upload",async(req,res)=>{

try{

await parseGalleryUpload(req, res);

if(!req.file){

return res.status(400).json({message:"No file uploaded"});

}

const isImage = req.file.mimetype.startsWith("image/");
const isVideo = req.file.mimetype.startsWith("video/");

if(!isImage && !isVideo){

return res.status(400).json({message:"Only image or video files are allowed"});

}

const uploadedImage = await uploadBufferToCloudinary(
req.file.buffer,
"gallery",
{
resource_type:isVideo ? "video" : "image",
chunk_size:isVideo ? 6000000 : undefined
}
);

const newImage = new Gallery({

image:uploadedImage.secure_url || uploadedImage.url,
mediaType:isVideo ? "video" : "image"

});

await newImage.save();

res.json(newImage);

}catch(error){

res.status(500).json({
message:error.message || "Upload failed"
});

}

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