const productModel = require("../models/product.model");
const slugify = require("slugify");
const imagekit = require("../services/imagekit");
const { default: mongoose } = require("mongoose");

const getAllProduct = async (req, res) => {
    try {
        const product = await productModel.find();

        if (!product) {
            res.status(400).json({ message: "Something errror" });
        }

        res.status(200).json({ msg: "Product Fetch Success", product });
    } catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
};

const getSingleProduct = async (req, res) => {
    try {
        const { slug } = req.params;

        const query = {
            $or: [{ slug: req.params.slug }],
        };

        if (mongoose.Types.ObjectId.isValid(req.params.slug)) {
            query.$or.push({
                _id: req.params.slug,
            });
        }

        const product = await productModel.findOne(query);

        if (!product) {
            res.status(400).json({ message: "Id Does not exist" });
        }

        res.status(200).json({ msg: "Product Fetch Success", product });
    } catch (err) {
        res.status(500).json({ message: "Server Error", err: err.message });
    }
};

const createProduct = async (req, res) => {
    try {
        const { name, price, description, category, stock } = req.body;

        if (!name || !price || !description || !category) {
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

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params; // Get product to update by current slug
        const {
            name,
            price,
            description,
            category,
            stock,
            isActive,
            existingImages, // This should be an array of URLs sent from the frontend
        } = req.body;

        // 1. Find the existing product
        const product = await productModel.findById(id);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

        // 2. Handle Image Logic
        let finalImages = [];

        // Parse existingImages if it comes as a string (FormData often stringifies arrays)
        const keptImages =
            typeof existingImages === "string"
                ? JSON.parse(existingImages)
                : existingImages || [];

        finalImages = [...keptImages];

        // 3. Upload New Images (if any)
        if (req.files && req.files.length > 0) {
            for (const file of req.files) {
                const uploaded = await imagekit.upload({
                    file: file.buffer,
                    fileName: `${Date.now()}-${file.originalname}`,
                    folder: "/ecommerce/products",
                });
                finalImages.push(uploaded.url);
            }
        }

        // 4. Validation: Ensure product still has at least one image
        if (finalImages.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Product must have at least one image",
            });
        }

        // 5. Handle Slug Change (if name is updated)
        let newSlug = product.slug;
        if (name && name !== product.name) {
            newSlug = slugify(name, {
                lower: true,
                strict: true,
            });
        }

        // 6. Update Database
        const updatedProduct = await productModel.findByIdAndUpdate(
            id,
            {
                name: name || product.name,
                slug: newSlug,
                price: price || product.price,
                description: description || product.description,
                category: category || product.category,
                stock: stock !== undefined ? stock : product.stock,
                isActive: isActive !== undefined ? isActive : product.isActive,
                images: finalImages,
            },
            { new: true, runValidators: true },
        );

        return res.status(200).json({
            success: true,
            message: "Product updated successfully",
            product: updatedProduct,
        });
    } catch (error) {
        console.error("Update Error:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await productModel.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Product deleted successfully from database",
        });
    } catch (error) {
        console.error("Delete Error:", error);

        if (error.kind === "ObjectId") {
            return res.status(400).json({
                success: false,
                message: "Invalid Product ID format",
            });
        }

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

module.exports = {
    getAllProduct,
    getSingleProduct,
    createProduct,
    updateProduct,
    deleteProduct,
};