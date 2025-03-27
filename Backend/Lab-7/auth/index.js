const express = require('express');
const app = express();
const session = require('express-session');
const mongoose = require('mongoose');
const User = require('./model/user')
const bcrypt = require("bcrypt");


const saltRounds = 10;

mongoose.connect('mongodb://127.0.0.1:27017/authSec-AA')
    .then(() => console.log('DB Connected!'));

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 2 * 60 * 1000,
    }
}))


app.get('/', (req, res) => {
    res.render('home')
})

app.get('/signup', (req, res) => {
    res.render('signup');
})

app.post('/signup', async (req, res) => {
    const { username, password, email } = req.body;
    let user = await User.findOne({ username });
    if (!user) {

        const hashPassword = await bcrypt.hash(password, saltRounds);

        await User.create({ username, password: hashPassword, email });
        res.redirect('/login')
    }
    else {
        res.redirect('/signup')
    }

})



app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', async (req, res) => {
    const { username, password, email } = req.body;
    let user = await User.findOne({ email });
    if (user) {
        bcrypt.compare(password, user.password, function (err, result) {
            // result == true
            if (result) {

                res.redirect('/')
            }
            else {
                res.send("Wrong password");
            }
        });

    } else {
        res.send("Not find");
    }
})

app.listen(4000, () => {
    console.log('server run at port 4000');
})