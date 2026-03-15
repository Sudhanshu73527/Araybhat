import express from "express";
import upload from "../middleware/upload.js";
import Event from "../models/Event.js";

const router = express.Router();


/* GET EVENTS */

router.get("/all", async(req,res)=>{

const events = await Event.find().sort({createdAt:-1});

res.json(events);

});


/* ADD EVENT IMAGE */

router.post("/upload",upload.single("image"),async(req,res)=>{

const total = await Event.countDocuments();

if(total >= 4){

return res.json({message:"Only 4 event images allowed"});

}

const newEvent = new Event({

title:req.body.title,
image:req.file.filename

});

await newEvent.save();

res.json(newEvent);

});


/* DELETE EVENT */

router.delete("/delete/:id",async(req,res)=>{

await Event.findByIdAndDelete(req.params.id);

res.json({message:"Deleted"});

});


export default router;