const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

exports.signup = async (req, res) => {
    try {
        const { name, email, password, authProvider, providerId } = req.body;

        if (!name || !email || !authProvider) {
            return res.status(400).json({
                message: "name, email and authProvider are required",
            });
        }

        if (authProvider === "local") {
            if (!password) {
                return res.status(400).json({
                    message: "Password is required for local signup",
                });
            }
        }

        if (authProvider === "google" || authProvider === "facebook") {
            if (!providerId) {
                return res.status(400).json({
                    message: "providerId is required for social login",
                });
            }
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

        if (authProvider === "local") {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            userData.authProvider = authProvider;
            userData.password = hashedPassword;
        }

        if (authProvider === "google" || authProvider === "facebook") {
            userData.authProvider = authProvider;
            userData.providerId = providerId;
        }
        const user = await User.create(userData);

        return res.status(201).json({
            message: "User signed up...",
        });
    } catch (err) {
        console.log("SIGNUP ERROR : ", err);
        res.status(500).json({ message: err.message });
    }
};

exports.login = async (req, res) => {
    const { email, password, providerId } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                message: "User not found ",
            });
        }
        if (user.authProvider === "local") {
            let isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({
                    message: "Wrong credentials",
                });
            }
        } else if (
            user.authProvider === "google" ||
            user.authProvider === "facebook"
        ) {
            let isMatch = user.providerId === providerId;
            if (!isMatch) {
                return res.status(401).json({
                    message: "Invalid social login credentials",
                });
            }
        }

        let token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });
        console.log(token);
        res.status(200).json({
            message: "Login Success",
            token,
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};
