const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            select: false,
            minlength: 6,
        },
        role: {
            type: String,
            enum: ["admin", "user"],
            default: "user",
        },

    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model("User", userSchema);