import express from 'express'
import { RegisterUser, loginUser, getUsers } from '../controllers/UserController.js';
import authMiddleware from '../middleware/authMiddleware.js'
import adminMiddleware from '../middleware/adminMiddleware.js'

const UserRouter = express.Router()

UserRouter.post("/login", loginUser)
UserRouter.post("/add", RegisterUser)
UserRouter.get("/list", authMiddleware, adminMiddleware, getUsers);

export default UserRouter;