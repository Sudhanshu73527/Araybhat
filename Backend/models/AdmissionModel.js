import mongoose from "mongoose";

const admissionSchema = new mongoose.Schema({

title:{
type:String,
required:true
},

description:{
type:String,
required:true
},

startDate:{
type:String,
required:true
},

lastDate:{
type:String,
required:true
},

classes:{
type:String,
required:true
},

hurryMessage:{
type:String,
required:true
}

},{timestamps:true})

const Admission = mongoose.model("Admission",admissionSchema);

export default Admission;