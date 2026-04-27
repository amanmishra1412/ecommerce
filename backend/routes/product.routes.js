const { Router } = require("express")
const { getAllProduct, getSingleProduct, createProduct } = require("../controllers/project.controller")
const authMiddleware = require("../middlewares/auth.middleware")
const adminMiddleware = require("../middlewares/admin.middleware")
const route = Router()

route.get("/", getAllProduct)
route.get("/:id", getSingleProduct)
route.post("/create", authMiddleware, adminMiddleware, createProduct)


module.exports = route