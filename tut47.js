// Scope, If-else Conditionals & Switch Case in JavaScript

// ---------------- scopes -------------
var str1 = "This is string 1";
var str1 = "This is string 2";
console.log(str1);

let a = "u";
{
 let a = "uu";
console.log(a);
}
console.log(a);

const b = "This cannot be changed";
// b = "this cannot be changed, because it is const(constant)";
console.log(b);

// ------------------- if-else conditionals ------------------
let age = 5;
if(age>18){
    console.log("You can drive");
}
else if(age<=5){
    console.log("defintely you cannot drive");
}
else{
    console.log("You can not drive");
}

// ------------ swtich ----------------
const cups = 15;
switch (cups) {
    case 4:
        console.log("the value of cups is 4")
        break;

    case 10:
        console.log("the value of cups is 10")
        break;

    case 15:
        console.log("the value of cups is 15")
        break;

        case 20:
    console.log("the value of cups is 20")
    break;

    default:
        console.log("the value of cups is none of 4,10,15,20")
        break;
}

