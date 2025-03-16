const express = require("express");
require("dotenv").config();
const cors = require("cors");
const cookie = require("cookie-parser");
const connectDB = require("./utils/connectDB");
const userRoute = require('./routes/userRoute')

const app = express();

const port = process.env.PORT || 8484;

// middleware
app.use(express.json());
app.use(cors());
app.use(cookie());

// API's
app.use("/api/user", userRoute)

app.listen(port, () => {
  connectDB();
  console.log("Server running on port", port);
});
