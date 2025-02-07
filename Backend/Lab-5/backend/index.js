const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Blogs = require('./models/schema');

const app = express();
const Port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/BlogDetail')
    .then(() => console.log('DB Connected'))
    .catch((err) => {
        console.log('DB not Connected', err);
    });

app.post('/blogs', async (req, res) => {
    const { title, content } = req.body;
    const newBlog = new Blogs({ title, content });
    await newBlog.save();
    res.status(201).json(newBlog);
});

app.get('/blogs', async (req, res) => {
    const blogs = await Blogs.find();
    res.status(200).json(blogs);
});

app.get('/blogs/:id', async (req, res) => {
    const { id } = req.params;
    const blog = await Blogs.findById(id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.status(200).json(blog);
});

app.put('/blogs/:id', async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const updatedBlog = await Blogs.findByIdAndUpdate(id, { title, content }, { new: true });
    if (!updatedBlog) return res.status(404).json({ message: 'Blog not found' });
    res.status(200).json(updatedBlog);
});

app.delete('/blogs/:id', async (req, res) => {
    const { id } = req.params;
    const deletedBlog = await Blogs.findByIdAndDelete(id);
    if (!deletedBlog) return res.status(404).json({ message: 'Blog not found' });
    res.status(200).json({ message: 'Blog deleted' });
});

app.listen(Port, () => {
    console.log(`Server running at: http://localhost:${Port}`);
});
