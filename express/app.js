const express = require("express");

const app = express();
const port = 80;

app.get("/",(req, res)=>{
    res.send("This is my homepage of first express app.")
});

app.get("/about",(req, res)=>{
    res.send("This is my about page of first express app.")
});

app.get("/services",(req, res)=>{
    res.send("This is my services page of first express app.")
});

app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`)
})