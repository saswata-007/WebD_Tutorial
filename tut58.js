// Json Tutorial

console.log("Json Tutorial");

let jsonObj = {
    name: "Saswata",
    occupation: "Student",
    age: 18,
    food: "Biriyani",
}
console.log(jsonObj);

let myJsonstr = JSON.stringify(jsonObj);
console.log(myJsonstr);

myJsonstr =  myJsonstr.replace("Biriyani", "Mughlai");
console.log(myJsonstr);

newJsonObj = JSON.parse(myJsonstr);
console.log(newJsonObj);