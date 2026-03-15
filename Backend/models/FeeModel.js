import mongoose from "mongoose";

const feeSchema = new mongoose.Schema({

className:{
type:String,
required:true
},

tuition:{
type:Number,
required:true
},

activity:{
type:String,
default:"-"
},

computer:{
type:String,
default:"-"
},

totalPerMonth:{
type:Number,
required:true
},

regFee:{
type:Number,
required:true
},

development:{
type:Number,
required:true
},

admission:{
type:Number,
required:true
},

total:{
type:Number,
required:true
}

});

const Fee = mongoose.model("Fee",feeSchema);

export default Fee;