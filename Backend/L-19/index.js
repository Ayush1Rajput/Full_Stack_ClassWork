const express = require('express')
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser('secretKey'));

app.get('/', (req, res) => {
    res.send("Hello Cookie-Parser")
})

// app.get('/store', (req, res) => {
//     res.cookie('Discount', 10000);
//     res.send("Visited on store route ")
// })

// app.get('/buyproduct', (req, res) => {
//     let productPrice = 40000;
//     const { Discount } = req.cookies;
//     if (Discount) {
//         productPrice -= Discount;
//         res.send("Product purchased, Discount available")
//     } else {
//         res.send("Discount not available")
//     }
// })


//////////////// Here we use signed cookie
const cookieOption = { signed: true }


app.get('/store', (req, res) => {
    res.cookie('Discount', 10000, cookieOption);
    res.send("Visited on store route ")
})



app.get('/buyproduct', (req, res) => {
    let productPrice = 40000;
    console.log(req.signedCookies)
    const { Discount } = req.signedCookies;
    if (Discount) {
        productPrice -= Discount;
        res.send(`Product purchased, Discount available and final price is ${productPrice}`)
    } else {
        res.send(`Product purchased, Discount not available and final price is ${productPrice}`)
    }
})

app.listen(4040, () => {
    console.log("Server is running on port 4040");
})