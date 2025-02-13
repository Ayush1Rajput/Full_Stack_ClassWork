const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/Sec-AA-Assignment")
  .then(() => console.log("Connected to MongoDB"))
  .catch(() => console.log("err"));

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const postRoutes = require("./routes/postRoutes");
app.use("/posts", postRoutes);

app.get("/", (req, res) => {
  res.redirect("/posts");
});

app.listen(4040, () => console.log("Server running on http://localhost:4040"));