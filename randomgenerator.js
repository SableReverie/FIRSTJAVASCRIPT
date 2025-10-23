// RANDOM NUMBER GENERATOR

//const min = 50;
//const max = 100;

//let randomNum = Math.floor(Math.random() *(max - min)) + min;
//console.log(randomNum);
 // RANDOM NUMBER GENERATOR 

const MyButton = document.getElementById("MyButton");
const MyLabel = document.getElementById("MyLabel");
const min = 1;
const max = 6;
let randomNumber;

MyButton.onclick = function() {
  randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  MyLabel.textContent = "You rolled a " + randomNumber;
}
