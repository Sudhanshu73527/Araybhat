import Admission from "../models/AdmissionModel.js";


// GET admission data

export const getAdmission = async(req,res)=>{

try{

const data = await Admission.findOne();

res.json(data);

}catch(err){

res.status(500).json({message:"Server Error"})

}

};


// ADD / UPDATE admission

export const saveAdmission = async(req,res)=>{

try{

const {title,description,startDate,lastDate,classes,hurryMessage} = req.body;

let admission = await Admission.findOne();

if(admission){

admission.title = title
admission.description = description
admission.startDate = startDate
admission.lastDate = lastDate
admission.classes = classes
admission.hurryMessage = hurryMessage

await admission.save()

}else{

admission = new Admission({
title,
description,
startDate,
lastDate,
classes,
hurryMessage
})

await admission.save()

}

res.json({message:"Admission Updated Successfully"})

}catch(err){

res.status(500).json({message:"Server Error"})

}

};