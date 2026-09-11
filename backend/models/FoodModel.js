import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name:{type:String, required:true},
    image:{type:String, required:true},
    price:{type:Number, required:true},
    description:{type:String, required:true},
    category:{type:String, required:true},
    createdAt:{type: Date,default: Date.now}
})

const Food = mongoose.models.Food || mongoose.model("Food", foodSchema)

export default Food;