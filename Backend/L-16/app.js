const express = require('express');
const app = express();
const mongoose = require('mongoose')
const Product = require('./model/product')
const path = require('path')
const ejsMate = require('ejs-mate')



app.set('view engine', "ejs");
app.set('views', path.join(__dirname, 'views'))
app.engine('ejs', ejsMate);

mongoose.connect('mongodb://127.0.0.1:27017/E-Comm')
    .then(() => {
        console.log("DB Connected Sucessfully");

    })
    .catch((err) => {
        console.error(err)
    })


app.get('/products', async (req, res) => {
    let products = await Product.find({});

    res.render('products/index');
})

app.listen(4000, () => {
    console.log("Server is running on port 4000");
})