import express from 'express'
import upload from '../config/multer.js'
import { addCategory, getCategory, delCategory } from '../controllers/CategoryController.js'

const CategoryRouter = express.Router()

CategoryRouter.post('/add', upload.single("image"), addCategory)
CategoryRouter.get('/list', getCategory)
CategoryRouter.delete('/del/:id', delCategory)

export default CategoryRouter