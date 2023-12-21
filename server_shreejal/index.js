const express = require('express');
var app = express();

app.use("/",(req,res)=>{
    res.json({message:"whats up"})
})

app.listen(3001,()=>{
    console.log("server is listening on port 3001...")
})