const express = require("express");
const path = require("path");
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); // for serving static files

// PUG SPECIFIC STUFF
app.set('view engine', 'pug'); // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')); // Set the views dirctory

// ENDPOINT
app.get('/',(req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely."
    const params = {'title': 'PES is the best game', 'content': con}
    res.status(200).render('index.pug', params);
});
app.post('/', (req,res)=>{
    const params = {'message': 'Your form has been submitted sucessfully'}
    res.status(200).render('index.pug', params);
});

// Our pug demo endpoint - CWH VIDEO/TUT - 72 MATERIALS
// app.get("/demo",(req, res)=>{
//     res.status(200).render('demo',{title:'hey saswata', message: 'hello there, how are you'});
// });
// app.get("/",(req, res)=>{
//     res.status(200).send("This is my homepage of first express app.");
// });

// app.get("/about",(req, res)=>{
//     res.send("This is my about page with get request of first express app.");
// });

// app.post("/about",(req, res)=>{
//     res.send("This is my about page wuth post request of first express app.");
// });

// app.get("/services",(req, res)=>{
//     res.send("This is my services page of first express app.");
// });

// app.get("/contact",(req, res)=>{
//     res.status(404).send("Error Code 404: Page Not Found");
// });

app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`);
});
