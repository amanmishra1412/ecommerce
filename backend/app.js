const express = require("express");
const app = express();
const connectDB=require("./config/db")
connectDB()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend working");
});

app.listen(3000, (req, res) => {
  console.log("Server running on port 3000");
});
