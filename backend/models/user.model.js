const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
   
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true
    },
    password: {
      type: String,
      required: function(){
        return this.authProvider === "local" 
      },
      minlength: 6,
    },
    role: {
      type: Number,
      enum: [0, 1],
      default: 0,
    },
    name: {
      type: String,
      required: true,
    },
    authProvider: {
      type: String,
      enum: ["local", "google", "facebook"],
      default: "local"
    },
    providerId: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("User", userSchema);
