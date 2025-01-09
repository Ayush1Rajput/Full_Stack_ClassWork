const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.send("Home Page");
})

app.get('/about',(req,res)=>{
    // res.send('Ok About page is working fine');
    res.render('about')
})

app.get('/login',(req,res)=>{
    res.render("login");
})

let todoData = ['FullStack',"DSA","Music","College"]

app.get('/todos',(req,res)=>{
    res.render("todos",{todoData});
})

const port = 5050;

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})