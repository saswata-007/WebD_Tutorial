const express = require("express");
const path = require("path");
const app = express();
const port = 80;

// for serving static files
app.use('/static', express.static('static'));

// Set the template engine as pug
app.set('view engine', 'pug');

// Set the views dirctory
app.set('views', path.join(__dirname, 'views'));

// Our pug demo endpoint
app.get("/demo",(req, res)=>{
    res.status(200).render('demo',{title:'hey saswata', message: 'hello there, how are you'});
});
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
});
