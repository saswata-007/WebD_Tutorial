// JavaScript Tutorial: for, while, forEach, Do While Loops 

console.log("This is tutorial 51 - about loops");

// for loop ------
console.log("for loop ------");

let forLoop = 0;
for(forLoop=0; forLoop<=2; forLoop++){
    console.log("for loop", forLoop);
}

let friends = ["Saswata", "Tanmoy", "Ritam", "Bishal", "Souvik"];
for (let index = 0; index < friends.length; index++) {
    console.log("Hello,", friends[index]);    
}


// forEach ------
console.log("forEach loop ------");

let friends1 = ["Saswata", "Tanmoy", "Ritam", "Bishal", "Souvik"];
friends1.forEach(function f(element){
    console.log("Hello!", element, "to modern JavaScript");
})


// forOf loop -------
console.log("forOf loop ------");

let friends2 = ["Saswata", "Tanmoy", "Ritam", "Bishal", "Souvik"];
for (element of friends2){
    console.log("Hello!", element, "to modern JavaScript again");
}


// forin loop ------- use this loop to iterate over objects in JavaScript
console.log("forIn loop ------");

let employee = {
    name: "Saswata",
    salary: 40000,
    country: "India"
}
for (key in employee){
    console.log(`The ${key} of employee is ${employee[key]}`);
}


// While loop ------
console.log("while loop ------");

let i = 0;
while (i<4){
    console.log(`${i} is less than 4`);
    i++;
}


// do-while loop ------
console.log("do-while loop ------");

let j = 10
do{
    console.log(`${j} is less than 4`);
    j++;
}while (j<4)