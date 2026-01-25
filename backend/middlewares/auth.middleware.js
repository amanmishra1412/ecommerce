const jwt = require("jsonwebtoken");
module.exports = (req,res,next)=>{

    try {
  const token = req.headers.authorization?.spit(" ")[1];

  if (!token) {
    res.status(401).json({
      message: "token missing...",
    });
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.id = decoded;
  next()
} catch (err) {
  req.status(401).json({
    message: `Invalid token ${err}`,
  });
}

}
