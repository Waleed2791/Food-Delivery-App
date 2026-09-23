import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js';
import { addOrder } from '../controllers/OrdersController.js';

const OrderRouter = express.Router();

// Login User Manage Orders Details
OrderRouter.post('/add', authMiddleware, addOrder)

export default OrderRouter;