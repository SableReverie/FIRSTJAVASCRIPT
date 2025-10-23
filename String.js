// String Methods = trim(), toUpperCase(), toLowerCase(), slice()

/*
let userName = "Prince";

console.log(userName.charAt(0)); // Print the first character
console.log(userName.length); // Print the length of the string
console.log(userName.trim()); // Remove whitespace from both ends
console.log(userName.toUpperCase()); // Convert to uppercase
console.log(userName.toLowerCase()); // Convert to lowercase
console.log(userName.slice(1, 4)); // Extract substring from index 1 to 4
console.log(userName.replace("n", "m")); // Replace 'n' with 'm'
console.log(userName.includes("ce")); // Check if 'ce' is in the string
console.log(userName.indexOf("r")); // Find index of 'r'
console.log(userName.split("")); // Split string into array of characters
console.log(`Hello, ${userName}!`); // Template literal
document.getElementById("mainBody").innerHTML = `Welcome, ${userName}!`;
*/

// STRING SLICING = creating a substring by extracting characters from a string between two specified indices

const FullName = "Prince Gian";

//let firstName = FullName.slice(0, 6); // Extracts "Prince"
//let lastName = FullName.slice(7); // Extracts "Gian"

//console.log("First Name:", firstName);
//console.log("Last Name:", lastName);

let FirstName = FullName.slice(0, FullName.indexOf(" "));
let LastName = FullName.slice(FullName.indexOf(" ") + 1);

console.log("First Name:", FirstName);
console.log("Last Name:", LastName);
