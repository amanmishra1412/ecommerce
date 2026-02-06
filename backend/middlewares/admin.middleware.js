module.exports = (req, res, next) => {
  const role = req.user.role;

  if (role !== "1") {
    return res.status(403).json({
      message: "Access denied. Admin only."
    });
  }

  next();
};
