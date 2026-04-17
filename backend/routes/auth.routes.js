const { signup, login, getMe } = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("auth route running");
});

router.post("/signup", signup);
router.post("/login", login);
router.get("/get-me", authMiddleware, getMe);

module.exports = router
