import mongoose  from "mongoose";

const recordSchema = new mongoose.Schema({
    userId: {type:mongoose.Schema.Types.ObjectId, ref:"User"},
    amount: {type:Number , require:true},
    type: {type:String , enum:["expense" , "income"]},
    catogory:String,
    date:{type:Date , default: Date.now},
    notes:String
})

export default mongoose.model("Record",recordSchema);