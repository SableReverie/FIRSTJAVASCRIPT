// MATH = Built in object that has properties and methods for mathematical constants and functions

let x = 3.14
let y = 2;
let z;

z = Math.round(x); // rounds to the nearest integer
z = Math.ceil(x);
z = Math.floor(x);
z = Math.sqrt(y);
z = Math.abs(-y);
z = Math.pow(x, y); // x to the power of y
z = Math.min(0, 150, 30, 20, -8, -200); // returns the lowest value
z = Math.max(0, 150, 30, 20, -8, -200);
z = Math.random(); // returns a random number between 0 and 1
z = Math.floor(Math.random() * 100 + 1); // random number between 1 and 100
z = Math.PI; // returns the value of PI
z = Math.E; // returns the value of Euler's number
z = Math.cos(x); // returns the cosine of 0 radians
z = Math.sin(x); // returns the sine of 0 radians
z = Math.tan(x); // returns the tangent of an angle
let max = Math.max(x, y, z);
let min = Math.min(x, y, z);
console.log(z);
