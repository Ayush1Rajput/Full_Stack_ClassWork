const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("<h1>Hello World</h1>")
})

app.get('/joke',(req,res)=>{
    res.send("Here is a Joke 🤣😂")
})


app.get('/about',(req,res)=>{
    res.send("Here is About Page 1")
})


app.get('/about',(req,res)=>{
    res.send("Here is About Page 2")
})

app.get('/login/:username/:password',(req,res)=>{
    console.log(req.params)
    res.send("Work successfully");
})

app.get('/*',(req,res)=>{
    res.send("<h1> Error 404 Page not found </h1>")
})



app.listen(5050,()=>{
    console.log("Server is running on port 5050");
})