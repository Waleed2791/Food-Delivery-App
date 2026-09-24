import OrderModel from "../models/OrdersModel.js";
// import stripe from "../config/stripe.js"

const addOrder = async (req, res) => {
    try {
        const { items, amount, status, payment } = req.body;

        const user_id = req.userId;

        if (
            !user_id || !items || !amount || !payment
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required!"
            });
        }

        const Order = new OrderModel({
            user_id,
            items,
            amount,
            status,
            payment
        });

        const response = await Order.save();

        res.status(200).json({
            success: true,
            message: "Order details added successfully!",
            response: response
        });

    } catch (error) {
        console.log("Order Error:", error);

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}


const getOrder = async (req, res) => {
    const userId = req.userId
    const userRole = req.role
    try {
        if (userRole === "admin") {
            const response = await OrderModel.find({})
            res.json({
                success: true,
                response
            })
        } else {
            const response = await OrderModel.findOne({user_id:userId})
            res.json({
                success: true,
                response
            })
        }

    } catch (error) {
        console.log("Order Error:", error);

        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


const updateOrder = async (req, res) => {
    try {

        const { OrderId, Status } = req.body
        const response = await OrderModel.findByIdAndUpdate(OrderId,{status:Status},{new:true})

        if (!response) {
            return res.status(404).json({
                success: false,
                message: "Order details not found!"
            });
        }

        res.status(200).json({
            success: true,
            message: "Order Status Updated Successfully!",
            response: response
        });

    } catch (error) {
        console.log("Order Error: ", error);

        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export { addOrder, getOrder, updateOrder }