import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    user_id:{type:String, required:true},
    items:{type:Array, required:true},
    amount:{type:Number, required:true},
    status:{type: String,enum: ["Preparing", "Out for Delivery", "Delivered", "Cancelled"],default: "Preparing"},
    payment:{type:Boolean, required:true, default:false},
    createdAt:{type: Date,default: Date.now}
})

const OrderModel = mongoose.models.Orders || mongoose.model('Orders', OrderSchema)

export default OrderModel;