// JavaScript Tutorial: Interaction - Alert, Prompt, Confirm
// Alert in JavaScript-----------------------

// alert("This is alert");

// let a = alert("This is another alert");
// console.log(a); //Alert is in-browser javascript, it doesn't return anything

// Prompt in JavaScript-----------------------

// let name = prompt("What is your name?", "Guest");
// console.log(name);

// Confirm in JavaScript-----------------------

let deletePost = confirm("Do you really want to delete this post?");
// console.log(deletePost);

if(deletePost){
    console.log("Your post has been deleted successfully.");
}
else{
    console.log("Your post has not been deleted.");
}