// Node.Js Modules with Examples

const fs = require("fs");
let text = fs.readFileSync("demo.txt", "utf-8");
console.log("The content of file is:");
console.log(text);

text = text.replace("My name is", "I am");
console.log(text)

console.log("Creating a new file...");
fs.writeFileSync("demo2.txt",text);