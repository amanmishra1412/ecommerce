const productModel = require("../models/product.model")

const getAllProduct = async (req, res) => {
    try {
        const product = await productModel.find()

        if (!product) {
            res.status(400).json({ message: "Something errror" })
        }

        res.status(200).json({ msg: "Product Fetch Success", product })
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: "Server Error" });
    }
}

module.exports = { getAllProduct }