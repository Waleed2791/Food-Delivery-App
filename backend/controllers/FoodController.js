import Food from "../models/FoodModel.js";
import fs from "fs"

// AddFOOD
const addFoodController = async (req, res) => {
    try {
        const { name, price, description, category } = req.body;

        // Check if image was uploaded
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Image is required"
            });
        }
        const image = req.file.filename;

        const food = new Food({
            name,
            image,
            price,
            description,
            category
        });

        await food.save();
        res.json({
            success: true,
            message: "Food added successfully",
            food
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// VIEW FOODLIST 
const viewFoodlistController = async (req, res) => {
    
    const foodList = await Food.find({})
    res.json({
        success: true,
        data: foodList
    });

};

// DELETE FOODITEM
const deleteFoodController = async (req, res) => {
    const id = req.params.id;

    const getfood = await Food.findById(id);
    fs.unlink(`uploads/${getfood.image}`, ()=>{});
    const food = await Food.findByIdAndDelete(id);
    res.json({
        success: true,
        message: "Food deleted successfully",
        food
    });
};


export { addFoodController, viewFoodlistController, deleteFoodController };