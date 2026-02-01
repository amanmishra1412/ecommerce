const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    items: {
      type: [
        {
          images: {
            type: [String],
            required: true,
            validate: (v) => v.length > 0,
          },
          productId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Product",
          },
          productName: {
            type: String,
            required: true,
          },
          quantity: {
            type: Number,
            required: true,
          },
          price: {
            type: Number,
            required: true,
          },
          itemTotal: {
            type: Number,
            required: true,
          },
        },
      ],
      required:true,
      validate:(v)=>v.length>0
    },

    totalAmount: {
      type: Number,
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["done", "notDone"],
      default: "notDone",
    },
    orderStatus: {
      type: String,
      enum: ["pending", "confirmed", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Order", orderSchema);
