const { Router } = require("express")
const { getAllProduct } = require("../controllers/project.controller")
const route = Router()

route.get("/", getAllProduct)

module.exports = route