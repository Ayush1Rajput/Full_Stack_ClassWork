const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/QuoteApp")
    .then(() => {
        console.log("DB Connected");
    })


const quoteRoutes = require('./routes/quote')
app.use(quoteRoutes);


app.listen(5050, (req, res) => {
    console.log("server is running on port 5050");
})