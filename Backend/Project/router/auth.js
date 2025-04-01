const express = require("express")
const router = express.Router();
const User = require('../model/user')

router.get('/signup', (req, res) => {
    res.render('auth/signup');
})

router.post('/signup', async (req, res) => {
    const { username, password, role, email } = req.body;

    console.log(req.body);

    const user = new User({ username, email, role });
    const newUser = await User.register(user, password);

    await newUser.save();
    res.redirect('/login');
})

module.exports = router;