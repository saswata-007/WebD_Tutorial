// Functions in JavaScript

console.log("Tut 49 ----- Functions in JavaScript");

// let name = "Saswata";
// let name2 = "Tanmoy";
// let name3 = "Ritam";
// let name4 = "Akash";
// console.log(name , "is a good boy");
// console.log(name2 , "is a good boy");
// console.log(name3 , "is a good boy");
// console.log(name4 , "is a good boy");

function greet(name, greetText="Greetings from Javascript"){
    let name1 = "Name1";
    console.log("HI!", name, greetText);
    console.log(name, "is a good boy");
}
let name1 = "Saswata";
let name2 = "Tanmoy";
let name3 = "Ritam";
let name4 = "Akash";
let greetText = "good morning!";
greet(name1, greetText);
greet(name2, greetText);
greet(name3, greetText);
greet(name4);
// let returnval = greet(name1);
// console.log(returnval);

function sum(a, b, c){
    let d = a + b + c;
    return d; 
}
let returnval = sum(1, 2, 3);
console.log(returnval);


