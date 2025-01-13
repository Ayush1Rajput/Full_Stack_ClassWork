const express = require('express');
const app = express();
const path = require('path');


app.set('view engine',"ejs");
app.use(express.urlencoded({extended:true}))


app.use(express.static(path.join(__dirname,'public')));


app.get('/',(req,res)=>{
    res.render("home");
})

app.get('/signup',(req,res)=>{
    res.render('signup')
})


app.get('/KuchBhi',(req,res)=>{
    res.send("Okay Form submitted")
    // alert("okay");
})

// app.get('/login',(req,res)=>{
//     res.render('login');
// })

app.post('/login',(req,res)=>{
    console.log(req.body);
    res.send('ok');
})

const PORT = 5050;
app.listen(PORT,()=>{
    console.log(`server run at ${PORT}`)
})
