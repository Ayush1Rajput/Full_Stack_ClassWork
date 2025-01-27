const express = require('express');
const app = express();
let path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


let blogs = [
    {
        id: 1,
        title: "first blog",
        url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc: "Blog image 1st"
    },
    {
        id: 2,
        title: "Second blog",
        url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc: "Blog image 2nd"
    }
]

app.get('/', (req, res) => {
    res.render('index', { blogs });
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server run: http://localhost:${port}`);
})