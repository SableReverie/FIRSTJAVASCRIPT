// = assignment operator
// == equality operator (loose)
// === strict equality operator
// != not equal (loose)
// !== strict not equal
/*
const PI = 3.14; // constant variable

if(PI === 3.14) {
    console.log("PI is approximately 3.14");
}
else {
    console.log("PI is not 3.14");
}
*/

// WHILE LOOP = repeat some code while some condition is true

/* THIS WILL RUN INFINITELY
let username = "";

while(username === "") {
   console.log("You are not logged in");
}

console.log(`Welcome, ${username}`);
*/
/* THIS WILL PROMPT INFINITELY
let username = "";

while(username === "" || username === null) {
    username = window.prompt("Enter your name: ");
}
console.log(`Welcome, ${username}`);
*/
/*  LOGIN SIMULATION
let loggedIn = false;
let username;
let password;

while(!loggedIn) {
    username = window.prompt("Enter your username: ");
    password = window.prompt("Enter your password: ");

    if(username === "myUser" && password === "myPass") {
        loggedIn = true;
        console.log("You are now logged in!");
    }
    else {
        console.log("Incorrect username or password. Please try again.");
    }
}
    */


/* DO WHILE LOOP = do some code once, then repeat the code while some condition is true
   - guarantees the code will run at least once

let loggedIn = true;
let username;
let password;

do 
     {
    username = window.prompt("Enter your username: ");
    password = window.prompt("Enter your password: ");

    if(username === "myUser" && password === "myPass") {
        loggedIn = true;
        console.log("You are now logged in!");
    }
    else {
        console.log("Incorrect username or password. Please try again.");
    }
} while(!loggedIn);
*/

// FOR LOOP = repeat some code a certain amount of times
/*
for(let i = 0; i < 5; i++){
    console.log(`The current number is ${i}`);
}
/*

// COUNTING EVEN NUMBERS
for(let i = 0; i <= 10; i += 2){
    console.log(`The current even number is ${i}`);
}
*/
/*
// COUNTING ODD NUMBERS
for(let i = 1; i <= 10; i += 2){
    console.log(`The current odd number is ${i}`);
}
*/

// CONTINUE & BREAK
// continue = skip current iteration of the loop and continue to the next one
// break = exit the loop entirely


// COUNTER PROGRAM

// NUMBER GUESSING GAME

const minNum = 1;
const maxNum = 10;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);
    
    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    } else if (guess < minNum || guess > maxNum){
        window.alert("Please enter a valid number");
    }
    else {
        attempts++;
        if(guess < answer){
            window.alert("TOO LOW! TRY AGAIN!");
        } else if (guess > answer){
            window.alert("TOO HIGH! TRY AGAIN!");
        } else {
            window.alert(`CORRECT! The answer is ${answer}. It took you ${attempts}`);
            running = false;
        }
    }
}

