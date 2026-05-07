const { Router } = require("express")
const route = Router()
const { getAllProduct, getSingleProduct, createProduct } = require("../controllers/product.controller")
const authMiddleware = require("../middlewares/auth.middleware")
const adminMiddleware = require("../middlewares/admin.middleware")

const multer = require("multer");
const storage = multer.memoryStorage();

const upload = multer({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB
    },
});

route.get("/", getAllProduct)
route.get("/:id", getSingleProduct)
route.post("/create", authMiddleware, adminMiddleware, upload.array("images", 5), createProduct);

module.exports = route