const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
    trim: true,
  },
  categoryDescription: {
    type: String,
  },
});

module.exports = mongoose.model("Category", categorySchema);
