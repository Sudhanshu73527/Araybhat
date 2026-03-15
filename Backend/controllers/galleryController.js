import Gallery from "../models/Gallery.js";


// UPLOAD IMAGE

export const uploadImage = async(req,res)=>{

try{

const newImage = new Gallery({

image:req.file.filename

});

await newImage.save();

res.json({message:"Image Uploaded",data:newImage});

}catch(err){

res.status(500).json({message:"Upload Failed"});

}

};



// GET IMAGES

export const getImages = async(req,res)=>{

const images = await Gallery.find().sort({createdAt:-1});

res.json(images);

};



// DELETE IMAGE

export const deleteImage = async(req,res)=>{

await Gallery.findByIdAndDelete(req.params.id);

res.json({message:"Image Deleted"});

};