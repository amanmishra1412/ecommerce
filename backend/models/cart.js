const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: {
    type: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
             required: true },
        quantity: { type: Number, required: true, min: 1 },
      },
    ],
  },
});

module.exports = mongoose.model("Cart",cartSchema)