// Arrow Function

// function greet(){
//     console.log("good morning");
// }
// greet();


// Arrow Functions
// let greet = ()=> {
//     console.log("Good Morning");
// }
// greet()

let greet = ()=> console.log("Good Morning");
greet();

setTimeout(() => {
  console.log("We are inside setTimeout")  
}, 2000);

// let sum = (a, b)=>{
//     return a+b;
// };

let sum = (a,b)=>a+b;
let half = a => a/2;

let obj1 = {
    greetText: "Good Morning",
    names: ["Saswata", "Ritam", "Tanmoy", "Bishal"],
    speak(){
        this.names.forEach((student)=>{
            console.log(`${this.greetText} hello! how are you ${student}?`);
        });
    }
}
obj1.speak();