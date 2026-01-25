const express = require("express");
const app = express();
const connectDB=require("./config/db")
connectDB()
const auth = require("./middlewares/auth.middleware")

const authRoute = require("./routes/auth.routes")
const homeRoute = require("./routes/home.routes")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend working");
});


app.use("/auth",authRoute)
app.use("/home",auth,homeRoute)

app.listen(3000, (req, res) => {
  console.log("Server running on port 3000");
});
