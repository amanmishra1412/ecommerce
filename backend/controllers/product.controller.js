const productModel = require("../models/product.model")
const slugify = require('slugify')
const imagekit = require('../services/imagekit')

const getAllProduct = async (req, res) => {
    try {
        const product = await productModel.find()

        if (!product) {
            res.status(400).json({ message: "Something errror" })
        }

        res.status(200).json({ msg: "Product Fetch Success", product })

    } catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
}

const getSingleProduct = async (req, res) => {
    try {
        const { id } = req.params

        if (!id) {
            res.status(400).json({ message: "ID required" })
        }

        const prod = await productModel.findById(id)

        if (!product) {
            res.status(400).json({ message: "Id Does not exist" })
        }

        res.status(200).json({ msg: "Product Fetch Success", product })

    } catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
}

const createProduct = async (req, res) => {
    try {
        const {
            name,
            price,
            description,
            category,
            stock,
        } = req.body;

        if (
            !name ||
            !price ||
            !description ||
            !category
        ) {
            return res.status(400).json({
                success: false,
                message: "All required fields are mandatory",
            });
        }

        if (!req.files || req.files.length === 0) {
            return res.status(400).json({
                success: false,
                message: "At least one image is required",
            });
        }

        const uploadedImages = [];

        for (const file of req.files) {
            const uploaded = await imagekit.upload({
                file: file.buffer,
                fileName: `${Date.now()}-${file.originalname}`,
                folder: "/ecommerce/products",
            });

            uploadedImages.push(uploaded.url);
        }

        const slug = slugify(name, {
            lower: true,
            strict: true,
        });

        const product = await productModel.create({
            name,
            slug,
            price,
            description,
            images: uploadedImages,
            // category,
            stock,
            createdBy: req.user.id,
        });

        return res.status(201).json({
            success: true,
            message: "Product created successfully",
            product,
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};


module.exports = { getAllProduct, getSingleProduct, createProduct }