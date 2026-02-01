const router = require("express").Router()
const {womenkurtaset,womensaree,womenkurties, womendresses}= require("../controllers/category.controller")

router.get("/womenkurtaset",womenkurtaset)
router.get("/womensaree",womensaree)
router.get("/womenkurties",womenkurties)
router.get("/womendresses",womendresses)

module.exports = router