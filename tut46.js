var str = "This is a string";
console.log(str); //simple variable and string

//First occurance of a substring
var position = str.indexOf('is'); 
console.log(position); //to see the position of string from starting point

//Last occurance of a substring
var position1 = str.lastIndexOf('is');
console.log(position1); //to see the position of string from ending point

//Substring from a string
var substr = str.slice(1,6);
console.log(substr); //to slice a string

var replaced = str.replace('string', 'saswata')
console.log(str)
console.log(replaced) //to replace a string

console.log(str.toUpperCase()); //to make a string uppercase
console.log(str.toLowerCase()); //to make a string uppercase

var newString = str.concat('New String');
console.log(newString); //that's used conactinate strings, we can also + and , and that;s easy

var strWithWhiteSpaces = "   this     contains    white spaces     ";
console.log(strWithWhiteSpaces);
console.log(strWithWhiteSpaces.trim()); //this will trim all the white spaces from both side of the trim

var char3 = str.charAt(3); 
console.log(char3);

var char1 = str.charCodeAt(3);
console.log(char1); //shows the code(probably utf) of the desired string, although '.charCodeat' not very important 

console.log(str[2]); //That's also a technique to slice string