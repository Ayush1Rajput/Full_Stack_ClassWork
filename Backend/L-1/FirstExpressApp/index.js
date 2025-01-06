const express = require("express");
const app = express();

app.get('/',(req,res)=>{
    res.send("HEllo World! Working fine!");
})


app.listen(5000);