// Date & Time in JavaScript

console.log("Date & Time in JavaScript");

let dt  = new Date();
console.log(dt);

let dt1 = new Date(0);
console.log(dt1);

let newDate = new Date  ("2021-07-20");
console.log(newDate);

// let newDate = new Date  (year,month,date,hours,minutes,seconds,milliseconds);
let newDate1 = new Date (3000, 12, 12, 12, 12, 12, 12, 12);
console.log(newDate1);

let yr = newDate.getFullYear ();
console.log(`the year is ${yr}`);

let getDT = newDate.getDate ();
console.log(`the date is ${getDT}`);

let mt = newDate.getMonth ();
console.log(`the month is ${mt}`);

let hr = newDate.getHours ();
console.log(`the hour is ${hr}`);

let day = newDate.getDay();
console.log(`the day is ${day}`);

newDate.setDate(2);
 console.log(newDate);

 date = Date.now();
 console.log(date);

 setInterval(updateTime, 1000);
 function updateTime(){
     time.innerHTML = new Date  (); 
 }