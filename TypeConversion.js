// TYPE CONVERSION = Change tje data type of a value to another data type
// Types: String, Number, Boolean, Object, Array
/*
let age = window.prompt("Enter your age: ")

age += 1;

console.log(age);
// Output will be concatenated string because prompt returns a string
*/
/*
let age = window.prompt("Enter your age: ")
age = Number(age); // Converting string to number


console.log(age, typeof age);
// Output will be a number after conversion
*/

let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x); // NaN - Not a Number
y = Boolean(y); // true - Non-empty strings are true
z = String(z); // "pizza" - remains the same

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);





