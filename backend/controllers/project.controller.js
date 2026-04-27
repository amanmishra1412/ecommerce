const productModel = require("../models/product.model")

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

}

module.exports = { getAllProduct, getSingleProduct, createProduct }