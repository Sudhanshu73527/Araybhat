import Fee from "../models/FeeModel.js";

export const addFee = async(req,res)=>{

try{

const fee = new Fee(req.body);

await fee.save();

res.json({
success:true,
message:"Fee Added Successfully"
})

}

catch(error){

console.log(error)

res.status(500).json({
message:"Server Error"
})

}

}


export const getFees = async(req,res)=>{

try{

const fees = await Fee.find();

res.json(fees);

}

catch(error){

res.status(500).json(error)

}

}