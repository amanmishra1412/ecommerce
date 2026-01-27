const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    description: {
      type: String,
      required: true,
    },
    images: { type: [String], required: true, validate: (v) => v.length > 0 },
    category: {
      type: String,
      required: true,
      lowercase: true,
    },
    createdBy: {
      type: String,
      default: "admin",
    },
  },
  {
    timestamps: true,
  },
);
module.exports = mongoose.model("Product", productSchema);
