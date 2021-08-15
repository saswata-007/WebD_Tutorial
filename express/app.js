const express = require("express");

const app = express();
const port = 80;

app.get("/",(req, res)=>{
    res.status(200).send("This is my homepage of first express app.");
});

app.get("/about",(req, res)=>{
    res.send("This is my about page with get request of first express app.");
});

app.post("/about",(req, res)=>{
    res.send("This is my about page wuth post request of first express app.");
});

app.get("/services",(req, res)=>{
    res.send("This is my services page of first express app.");
});

app.get("/contact",(req, res)=>{
    res.status(404).send("Error Code 404: Page Not Found");
});

app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`);
})
