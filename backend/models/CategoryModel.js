import mongoose, { model } from "mongoose";

const CategoryScheme = new mongoose.Schema({
    name:{type:String, required:true},
    image:{type:String, required:true},
    createdAt:{type: Date,default: Date.now}
})

const CategoryModel = mongoose.models.FoodCategory || mongoose.model('FoodCategory', CategoryScheme)

export default CategoryModel;