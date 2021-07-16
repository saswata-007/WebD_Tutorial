// Javascript Quizes

console.log(document.getElementById('q1')); //Question 1
let returnval = num(10,10);
function num(a,b){
    if(a>b){
        console.log("A is greater than B");
    }
    else if(b>a){
        console.log("B is greater than A");
    }
    else{
        console.log("A is equal to B");
    }
}             

console.log(document.getElementById('q2')); //Question 2
let ageConfirm = prompt(confirm("Are you older than 18?"));
console.log(ageConfirm);
if (age>18){
    console.log("You are allowed to enter in this club");
}
else{
    console.log("You are not allowed to enter in this club.");
}
