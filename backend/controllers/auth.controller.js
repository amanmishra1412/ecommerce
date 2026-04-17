const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const { JWT_SECRET } = require("../config/env");

exports.signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email) {
            return res.status(400).json({
                message: "name, email are required",
            });
        }

        if (password.length < 6) {
            return res.status(400).json({
                message: "Password must be at least 6 characters",
            });
        }

        let exist = await User.findOne({ email });

        if (exist) {
            return res.status(400).json({
                message: "Email already registered",
            });
        }

        const userData = {
            email,
            name,
        };

        const hashedPassword = await bcrypt.hash(password, 10);

        userData.password = hashedPassword;

        const user = await User.create(userData);

        let token = await jwt.sign({ id: user._id }, JWT_SECRET, {
            expiresIn: "7d",
        });

        res.cookie("token", token)

        const userDetail = {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
        };

        return res.status(201).json({
            message: "User signed up...",
            userDetail
        });
    } catch (err) {
        console.log("SIGNUP ERROR : ", err);
        res.status(500).json({ message: "Server Error" });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email }).select('+password');
        if (!user) {
            return res.status(404).json({
                message: "Invalid credentials",
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid credentials",
            });
        }

        let token = await jwt.sign({ id: user._id }, JWT_SECRET, {
            expiresIn: "7d",
        });

        res.cookie("token", token)

        const userData = {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
        };
        // console.log(token);
        res.status(200).json({
            message: "Login Success",
            userData
        });
    } catch (err) {
        res.status(400).json({
            message: err.message,
        });
    }
};

exports.getMe = async (req, res) => {
    const { id } = req.user
    const user = await User.findById(id)
    if (!user) {
        res.status(404).json({ message: "User not found" })
    }

    res.status(200).json({ message: "Success", user })

}