const router = require("express").Router();

router.get("/home", (req, res) => {
  res.send("welcome to the home ");
});

module.exports = router 