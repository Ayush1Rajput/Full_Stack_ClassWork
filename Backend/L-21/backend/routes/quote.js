const express = require('express')
const router = express.Router();
const QuoteModel = require('../model/quote')

router.get('/api/quotes', async (req, res) => {
    const quotes = await QuoteModel.find({});
    res.status(200).json({ 
        data: quotes
    })
})

module.exports = router;