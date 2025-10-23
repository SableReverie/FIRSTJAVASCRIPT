// IF STATEMENTS
/*
let age = 17;
if (age < 18) {
    console.log("You are a minor.");
} else {
    console.log("You are an adult.");
}
*/

let age = 18;
let hasLicense = false;

if (age >= 18) {
    console.log("You are eligible to drive.");
    if (hasLicense) {
        console.log("You have a driving license.");
    } 
    else {
        console.log("You do not have a driving license.");
    }
} 
else {
    console.log("You are not eligible to drive.");
}
