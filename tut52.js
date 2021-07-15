// Manipulating Dom

let main = document.getElementById('main');
console.log(main);

let nav = document.getElementById('nav');
console.log(nav);

let containers = document.getElementsByClassName('container');
console.log(containers);

let sel = document.querySelector('.container');
console.log("Selector Returns, ", sel);

let idSel = document.querySelector('#nav');
console.log("ID Returns, ", idSel);

let idSeltoLi = document.querySelector('#nav>li');
console.log(" Returns, ", idSeltoLi);

let idSeltoLiall = document.querySelectorAll('#nav>li');
console.log(" Returns, ", idSeltoLiall);