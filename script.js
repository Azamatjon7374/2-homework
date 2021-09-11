let x = Number(prompt("masofani kiriting"));
let piyoda = Math.round( x / 3.6);
let velosiped = Math.round(x / 20.1);
let mashina = Math.round( x / 70);
let samolyot = Math.round(x /800);
console.log(piyoda, velosiped, mashina, samolyot)
let one = document.querySelector("h2");
one.textContent = `sizga piyoda sayohatga ${piyoda} soat vaqt ketadi`;


let two = document.querySelector("h3");
two.textContent = `sizga velosipedda sayohatga ${velosiped} soat vaqt ketadi`;

let three = document.querySelector("h4");
three.textContent = `sizga mashinada sayohatga ${mashina} soat vaqt ketadi`;

let five = document.querySelector("h5");
five.textContent = `sizga samolyotda sayohatga ${samolyot} soat vaqt ketadi`;



