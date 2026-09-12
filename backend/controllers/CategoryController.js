import CategoryModel from "../models/CategoryModel.js"
import fs from "fs"

// addCategory
const addCategory = async (req, res) => {
    try{

        const { name } = req.body;
        
        // Check if image was uploaded
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Image is required"
            });
        }
        const image = req.file.filename;

        const Category = new CategoryModel({
            name,
            image
        });

        await Category.save();
        res.json({
            success: true,
            message: "Category added successfully",
            Category
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}


const getCategory = async (req, res) => {
    try {
        const response = await CategoryModel.find({})
        res.json({
            success: true,
            message: "Categories fetch successfully",
            response
        })
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: (error.message || "Something went wrong!")
        })
    }
}


const delCategory = async (req, res) => {
    const id = req.params.id
    const category = await CategoryModel.findById(id)
    fs.unlink(`uploads/${category.image}`, ()=>{})
    const resposne = await CategoryModel.findByIdAndDelete(id)
    res.json({
        success: true,
        message: "Category deleted successfully",
        resposne
    })
}


export { addCategory, getCategory, delCategory }