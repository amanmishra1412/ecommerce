const { signup, login } = require("../controllers/auth.controller");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("auth route running");
});

router.post("/signup", signup);
router.post("/login", login);

module.exports = router
