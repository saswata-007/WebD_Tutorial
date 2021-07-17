// JavaScript Tutorial: setInterval & setTimeOut

console.log("This is tutorial 54 - JavaScript Tutorial: setInterval & setTimeOut");


// setTimeout  - allows us to run the function once after interval of time
// clearTimeout  - allows us to run the function repeatedly after interval of time

function greet(name, byeText){
    console.log("Hello! Good Morning", name, byeText);
}
// setTimeout(greet, 2000, "Saswata", "Take Care");

// timeOut = setTimeout(greet, 2000, "Saswata", "Take Care");
// console.log(timeOut);
// clearTimeout(timeOut);

// intervalId = setInterval(greet, 1000, "Saswata", "Take Care");
// clearInterval(intervalId);

function displayTime(){
    time = new Date();
    console.log(time);
    document.getElementById('time').innerHTML = time;
}
setInterval(displayTime, 100);