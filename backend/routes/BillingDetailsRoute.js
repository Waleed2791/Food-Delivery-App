import express from 'express'
import { addBillingDetails, getBillingDetails, updateBillingDetails } from '../controllers/BillingDetailsController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const BillingRouter = express.Router()

// Login User Manage Billing Details
BillingRouter.post('/add', authMiddleware, addBillingDetails)
BillingRouter.get('/get', authMiddleware, getBillingDetails)
BillingRouter.post('/update', authMiddleware, updateBillingDetails)

export default BillingRouter;