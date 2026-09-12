import UserModal from "../models/UserModel.js";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";

const RegisterUser = async (req, res) => {

    const { name, email, password } = req.body;
    const normalizedEmail = email.toLowerCase();

    if (!name || !email || !password) {
        return res.json({
            success: false,
            message: "All fields are required"
        });
    }

    if (!validator.isEmail(email)) {
        return res.json({
            success: false,
            message: "Please enter a valid email"
        });
    }

    if (password.length < 8) {
        return res.json({
            success: false,
            message: "Password must be at least 8 characters"
        });
    }

    const existingUser = await UserModal.findOne({ email: normalizedEmail });

    if (existingUser) {
        return res.json({
            success: false,
            message: "User already exists"
        });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new UserModal({
        name,
        email,
        password: hashedPassword
    });

    await user.save();

    const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET
    );

    res.json({
        success: true,
        token,
        user: {
            name: user.name,
            email: user.email,
        }
    });
};


const loginUser = async (req, res) => {

    const { email, password } = req.body;
    const normalizedEmail = email.toLowerCase();

    if ( !email || !password ) {
        return res.json({
            success: false,
            message: "All fields are required"
        });
    }

    if (!validator.isEmail(email)) {
        return res.json({
            success: false,
            message: "Please enter a valid email"
        });
    }

    const user = await UserModal.findOne({ email: normalizedEmail });
    if (!user) {
        return res.json({
            success: false,
            message: "Invalid email or password"
        });
    }

    const isPasswordCorrect = await bcrypt.compare(password,user.password);
    if (!isPasswordCorrect) {
        return res.json({
            success: false,
            message: "Invalid email or password"
        });
    }

    const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET
    );

    res.json({
        success: true,
        token,
        user: {
            name: user.name,
            email: user.email,
        }
    });

}


const getUsers = async (req, res) => {

    try {
        const response = await UserModal.find({});
        res.json({
            success: true,
            response
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: (error || "Internal Server Error 500!")
        })
    }

}


export { RegisterUser, loginUser, getUsers };