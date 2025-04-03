const express = require('express')
const router = express.Router()
const User = require('../model/user')
const Product = require('../model/product')



router.get('/users/cart/add/:productId', async (req, res) => {
    const { productId } = req.params;
    const product = await Product.findById(productId);

    const userId = req.user._id;
    const user = await User.findById(userId);

    // let idx = User.cart.findIndex(p => p === productId)
    // if (idx !== -1) {
    //     console.log("No")
    // } else {
    //     console.log("Yes");
    // }

    let index = -1;
    let x = user.cart.find((item, ind) => {
        if (item.productId === productId) {
            index = ind;
            return item;
        }
    })

    if (x) {
        user.cart[index].quantity += 1;
    } else {
        user.cart.push({ productId });
    }

    await user.save()

    res.redirect('/products');
})

router.get('/users/cart', async (req, res) => {

    const userId = req.user._id;
    const user = await User.findById(userId).populate(User.productId);

    // console.log(user.productId)
    res.render('cart/index', { user })

})

module.exports = router;