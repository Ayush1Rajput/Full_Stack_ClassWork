const express = require('express')
const app = express();
const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => console.log('DB Connected!'))
    .catch(() => {
        console.log("DB not Connected");
    })


const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    age: Number,
    city: String
})


const User = mongoose.model(`User`, userSchema)

User.create({
    // username: "Ayush",
    // password: "1234",
    // age: 21,
    // city: "Aligarh"
    username: "Karan",
    password: "karan123",
    age: 19,
    city: "Mathura"
}).then(() => {
    console.log("Document written")
})

const PORT = 4040;
app.listen(PORT, () => {
    console.log("Port is running on " + PORT)
})