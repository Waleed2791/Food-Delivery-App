import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js';
import { addOrder, getOrder, updateOrder } from '../controllers/OrdersController.js';
import adminMiddleware from '../middleware/adminMiddleware.js';

const OrderRouter = express.Router();

// Login User Manage Orders Details
OrderRouter.post('/add', authMiddleware, addOrder)
OrderRouter.get('/get', authMiddleware, getOrder)
// Only Admin Can Update Order Status
OrderRouter.post('/update', authMiddleware, adminMiddleware, updateOrder)

export default OrderRouter;