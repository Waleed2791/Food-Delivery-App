import express from 'express'
import { addFoodController, viewFoodlistController, deleteFoodController } from '../controllers/FoodController.js'
import upload from "../config/multer.js";

const foodRouter = express.Router()

foodRouter.post('/add', upload.single("image"), addFoodController)
foodRouter.get('/list', viewFoodlistController)
foodRouter.delete('/delete/:id', deleteFoodController)

export default foodRouter;