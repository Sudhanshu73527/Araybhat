import express from "express";
import upload from "../middleware/upload.js";
import UpcomingEvent from "../models/UpcomingEvent.js";

const router = express.Router();


/* GET EVENTS */

router.get("/all",async(req,res)=>{

const events = await UpcomingEvent.find().sort({createdAt:-1});

res.json(events);

});


/* ADD EVENT */

router.post("/add",upload.single("image"),async(req,res)=>{

const total = await UpcomingEvent.countDocuments();

if(total >= 4){

return res.json({message:"Only 4 upcoming events allowed"});

}

const newEvent = new UpcomingEvent({

title:req.body.title,
date:req.body.date,
description:req.body.description,
image:req.file.filename

});

await newEvent.save();

res.json(newEvent);

});


/* DELETE EVENT */

router.delete("/delete/:id",async(req,res)=>{

await UpcomingEvent.findByIdAndDelete(req.params.id);

res.json({message:"Deleted"});

});

export default router;