// Blocking vs Non-Blocking execution

// Syncchronus or blocking
// -line by line execution

// Asynchronus vs non-blocking
// -line by line not guranteed
// -callbacks will fire

const fs = require("fs");
let text = fs.readFileSync("demo.txt", "utf-8", (err,data)=> {
    console.log(error,data);
});    
console.log("this is a message");

