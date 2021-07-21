// Math Object in JavaScript

console.log("Math Object in JavaScript");

// Printing the math object
let m  = Math;
console.log(m); //To see all the math functions available

// Printing the constraints in math object
console.log("The value of Math.E is", Math.E);
console.log("The value of Math.LN2 is", Math.LN2);
console.log("The value of Math.LN10 is", Math.LN10);
console.log("The value of Math.LOG2E is", Math.LOG2E);
console.log("The value of Math.PI is", Math.PI);
console.log("The value of Math.SQRT1_2 is", Math.SQRT1_2);
console.log("The value of Math.SQRT2 is", Math.SQRT2);

// Printing the functions in math object
let num1 = 25.54;
let num2 = 40;
console.log(`The value of num1 and num2 is ${num1} and ${num2}`);
console.log(`The value of num1 and num2 rounded is ${Math.round(num1)} and ${Math.round(num2)}`);

console.log("3 to the powers 2 is", Math.pow(3,2));
console.log("2 to the powers 10 is", Math.pow(2,10));

console.log("Using sqrt function", Math.sqrt(100));
console.log("Using sqrt function", Math.sqrt(37));

// Ceil and Floor
console.log("5.8 rounded up to nearest integer", Math.ceil(5.8));
console.log("5.8 rounded down to nearest integer", Math.floor(5.8));

// abs function
console.log("abosolute value of 5.67", Math.abs(5.6));
console.log("abosolute value of -5.67", Math.abs(-5.6));

// Trignometric Functions
console.log("This value of sin(pi) is", Math.sin(Math.PI));
console.log("This value of sin(pi) is", Math.sin(Math.PI/2));
console.log("This value of cos(pi) is", Math.cos(Math.PI/2));
console.log("This value of tan(pi) is", Math.tan(Math.PI/2));

// Min & Max
console.log("Minimum Value of 4, 10, 100 is", Math.min(4,10,100));
console.log("Maximum Value of 4, 10, 100 is", Math.max(4,10,100));

// Log function
console.log(Math.log(2));

// Generating random numbers
console.log("The random number is", Math.random());

// Random number b/w (a,b) = a + (b-a)*Math.random()
// let r1_100 = Math.random();
let a = 1;
let b = 100;
let r1_100 = a + (b-a)*Math.random()
console.log("The random number is in between 1 to 100 is", r1_100);
console.log("The random number is in between 1 to 100 is", Math.round(r1_100));