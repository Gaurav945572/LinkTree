const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://gauravoppo9455:gauravoppo9455@cluster0.4s1ku.mongodb.net/").then(()=>console.log("MOngoDB connected"));

app.get('/',(req,res)=>{
    res.send("Hello");
});


app.post('/api/register',(req,res)=>{
    res.send("Register");
})
const port = 8000;

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})