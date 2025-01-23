const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

mongoose
    .connect("mongodb://127.0.0.1:27017/test")
    .then(() => console.log("DB Connected!"))
    .catch(() => {
        console.log("DB not Connected");
    });

const UsersSchema = new mongoose.Schema({
    Usersname: String,
    password: String,
    age: Number,
    city: String,
});

const Users = mongoose.model('Users', UsersSchema);

// Users.create({
//     Usersname: "Karan",
//     password: "karan111",
//     age: 19,
//     city: "Mathura",
// }).then(() => {
//     console.log("Document written");
// });

Users.create([
    {
        "id": 1,
        "Usersname": "rohit_kumar",
        "password": "rohit123",
        "age": 28,
        "city": "Mumbai"
    },
    {
        "id": 2,
        "Usersname": "neha_sharma",
        "password": "neha@456",
        "age": 34,
        "city": "Delhi"
    },
    {
        "id": 3,

        "Usersname": "vikram_singh",
        "password": "vikram789",
        "age": 22,
        "city": "Bangalore"
    },
    {
        "Usersname": "priya_patel",
        "password": "priya@pass",
        "age": 29,
        "city": "Ahmedabad"
    },
    {
        "Usersname": "rajesh_gupta",
        "password": "rajesh2025",
        "age": 31,
        "city": "Chennai"
    }
]
).then(() => {
    console.log("Document written");
});


// =========================Read Command====================
// Users.find({
//     Usersname: "Karan"
// }).then((data) => {
//     console.log(data);
//     console.log("Document Find");
// })

// Users.findOne({
//     Usersname: "Karan"
// }).then((data) => {
//     console.log(data);
//     console.log("Document Find");
// })

// Users.find({}).then((data) => {
//     console.log(data);
// });

// =====================Update command===================

// Users.updateOne({ Usersname: "Ayush" }, { age: 23 }).then((data) => {
//     console.log(data);
// });

// ================= Delete Command=================

// Users.deleteMany({ Usersname: "Hello" }).then((data) => {
//     console.log(data);
// });

app.get('/users', async (req, res) => {
    try {
        const userData = await Users.find({});
        console.log(userData)
        res.render('user', { userData });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching user data');
    }
});



app.get('/users/:id', (req, res) => {
    // const { id } = req.params;

    let user = Users.find((user) => user.id == id);

    res.render('show', { user });

})



const PORT = 4040;
app.listen(PORT, () => {
    console.log("Port is running on " + PORT);
});
