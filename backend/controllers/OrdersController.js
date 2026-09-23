import OrderModel from "../models/OrdersModel.js";

const addOrder = async (req, res) => {
    try {
        const { items, amount, status, payment } = req.body;

        const user_id = req.userId;

        if (
            !user_id || !items || !amount || !status || !payment
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
        console.log("Billing Error:", error);

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export { addOrder }