const express = require('express');
const router = express.Router();
const Post = require('../models/Post.js');

router.get('/', async (req, res) => {
    const posts = await Post.find();
    res.render('index', { posts });
});

router.get('/new', (req, res) => {
    res.render('new');
});

router.post('/', async (req, res) => {
    await Post.create(req.body);
    res.redirect('/posts');
});

router.get('/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.render('show', { post });
});

router.get('/:id/edit', async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.render('edit', { post });
});

router.post('/:id/update', async (req, res) => {
    await Post.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/posts/' + req.params.id);
});

router.post('/:id/delete', async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.redirect('/posts');
});

router.post('/:id/comments', async (req, res) => {
    const post = await Post.findById(req.params.id);
    post.comments.push(req.body.comment);
    await post.save();
    res.redirect('/posts/' + req.params.id);
});

module.exports = router;
