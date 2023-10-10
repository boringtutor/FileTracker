//-------------------------------------imports--------------------------------
const express = require("express");
const cookieParser = require("cookie-parser");
const PORT = 3000;
const userRouter = require("./routes/userRoutes");
const postRouter = require("./routes/postRoutes");
require("dotenv").config();
const app = express();

// --------------------------------------middleware --------------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
// --------------------------------------routes--------------------------------------

app.use("/api", userRouter);
app.use("/api", postRouter);
app.get("/", (req, res) => {
  res.send("hi ...");
});

app.listen(PORT, (req, res) => {
  console.log("listening on 3000");
});
