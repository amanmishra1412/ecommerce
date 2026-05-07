const connectDB = require("./config/db");
connectDB();
const express = require("express");
const app = express();
const cors = require("cors");
const auth = require("./middlewares/auth.middleware");
const authRoute = require("./routes/auth.routes");
const homeRoute = require("./routes/home.routes");
const categoryRoute = require("./routes/category.routes");
const productRoute = require("./routes/product.routes");
const cookieParser = require("cookie-parser");

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use(cookieParser())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend working");
});

app.use("/auth", authRoute);
app.use("/home", auth, homeRoute);
app.use("/category", categoryRoute);
app.use("/product", productRoute);

module.exports = app;
