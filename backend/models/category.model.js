const mongoose = require("mongoose");
const slugify = require("slugify");

const categorySchema = mongoose.Schema(
    {
        categoryName: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        slug: {
            type: String,
            unique: true,
        },
        categoryDescription: {
            type: String,
            trim: true,
        },
        image: {
            type: String,
            default: "",
        },
    },
    {
        timestamps: true,
    }
);

categorySchema.pre("save", function (next) {
    if (this.categoryName) {
        this.slug = slugify(this.categoryName, {
            lower: true,
            strict: true,
        });
    }
    next();
});

module.exports = mongoose.model("Category", categorySchema);