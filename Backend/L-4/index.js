const express = require('express')
const app = express()

const Users = require('./data/user');

app.set('view engine',"ejs")

app.get('/',(req,res)=>{
    res.send("Home Page ...");
})

app.get('/users',(req,res)=>{
    res.render('user',{Users})
})

app.listen(4040,()=>{
    console.log("Server is running on PORT 4040")
})