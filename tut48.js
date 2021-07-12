let myvar = 34;
let myvar2 = "string";
let myvar3 = true;
let myvar4 = null;
let myvar5 = undefined;

let employee = {
    name: "Saswata",
    salary: 100000,
    occupation: "student",
    country: "India", 
    "my state": "West Bengal", 
}
console.log(employee);


let names = [1, 6546, "Saswata", null, undefined];
console.log(names);
console.log(names[2]);

let names2 = new Array(1, 6546, 42, "Saswata", null, undefined);
console.log(names2);
console.log(names2.length);
names2=names2.sort();
console.log(names2);

names2.push("This is pushed");
console.log(names2);

let var1 = new Array(23,45); 
let var2 = new Array(23);
console.log(var1);
console.log(var2);