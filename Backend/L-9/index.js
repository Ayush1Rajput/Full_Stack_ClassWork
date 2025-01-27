const express = require("express");
const app = express();

const mongoose = require("mongoose");
const Product = require("./model/product");

app.set("view engine", "ejs");

mongoose.connect('mongodb://localhost:27017/Sec-AA')
    .then(() => {
        console.log("Database connected")
    })
    .catch(() => {
        console.log("Database not connected ")
    })



app.get("/products", async (req, res) => {
    const products = await Product.find({})
    res.render("product", { products });
})


app.listen(5000, () => {
    console.log("Server is running on port 5000")
})