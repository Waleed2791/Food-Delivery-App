import Billing_Detail_Model from "../models/BillingDetailsModel.js";

const addBillingDetails = async (req, res) => {
    try {
        const { first, last, street, city, state, zipcode, country, phone } = req.body;

        const user_id = req.userId;

        if (
            !user_id || !first || !last || !street || !city ||
            !state || !zipcode || !country || !phone
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required!"
            });
        }

        const billingDetails = new Billing_Detail_Model({
            user_id,
            first,
            last,
            street,
            city,
            state,
            zipcode,
            country,
            phone
        });

        const response = await billingDetails.save();

        res.status(200).json({
            success: true,
            message: "Billing details added successfully!",
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


const getBillingDetails = async (req, res) => {
    const userID = req.userId
    const userRole = req.role
    try {

        if (userRole === "admin") {
            const response = await Billing_Detail_Model.find({})
            res.json({
                success: true,
                response
            })
        } else {
            const response = await Billing_Detail_Model.findOne({ user_id: userID })
            res.json({
                success: true,
                response
            })
        }

    } catch (error) {
        console.log("Billing Error:", error);

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
    
}


const updateBillingDetails = async (req, res) => {
    try {
        const { first, last, street, city, state, zipcode, country, phone } = req.body;

        const user_id = req.userId;

        if (
            !user_id || !first || !last || !street || !city ||
            !state || !zipcode || !country || !phone
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required!"
            });
        }

        const billingDetails = await Billing_Detail_Model.findOneAndUpdate(
            { user_id: user_id },
            {
                first,
                last,
                street,
                city,
                state,
                zipcode,
                country,
                phone
            },
            { new: true }
        );

        if (!billingDetails) {
            return res.status(404).json({
                success: false,
                message: "Billing details not found!"
            });
        }

        res.status(200).json({
            success: true,
            message: "Billing details updated successfully!",
            response: billingDetails
        });

    } catch (error) {
        console.log("Billing Error:", error);

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export {addBillingDetails, getBillingDetails, updateBillingDetails}