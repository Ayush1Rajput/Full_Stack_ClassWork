const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.send("Home Page");
})

app.get('/index',(req,res)=>{
    res.send("Index Page")
})

app.get('login',(res,req)=>{
    res.send("<h1> Login Page </h1>")
})

app.get('/login/:username/:password',(req,res)=>{
    console.log(req.params)
    res.send("<h2> Work successfully </h2>");
})


app.get('/*',(req,res)=>{
    res.send("<h1> Error 404 </h1>")
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000");

})