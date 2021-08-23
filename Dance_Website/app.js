const express = require("express");
const path = require("path");
const app = express();
const port = 80;


// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); // for serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug'); // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')); // Set the views dirctory

// ENDPOINT
app.get('/',(req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely."
    const params = {'title': 'PES is the best game', 'content': con}
    res.status(200).render('index.pug', params);
});

// START THE SERVER
app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`);
});