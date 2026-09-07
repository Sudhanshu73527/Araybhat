import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({

image: {
type: String,
required: true
},
mediaType: {
type: String,
enum: ["image", "video"],
default: "image"
}

},{timestamps:true});

export default mongoose.model("Gallery",gallerySchema);