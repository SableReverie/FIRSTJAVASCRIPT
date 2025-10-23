// LOGICAL OPERATORS IN JAVASCRIPT = used to combine multiple conditions
// AND = &&
// OR = ||
// NOT = !
/*
const temp = 20;

if(temp > 0){
    console.log("It's above freezing outside!");
}
else if(temp <= 0){
    console.log("It's freezing outside!");
}
else {
    console.log("It's exactly at freezing point!");
}

*/
/*
const temp = 20;

if(temp > 0 && temp < 30){
    console.log("The weather is good today!");
}
else {
    console.log("The weather is bad today!");
}
*/

const temp = 20;

if(temp <= 0 || temp > 30){
    console.log("The weather is good today!"); // corrected condition
} 
else {
    console.log("The weather is bad today!");
}

/*
const isSunny = true;

if(!isSunny){
    console.log("It's cloudy outside!");
}
else {
    console.log("It's sunny outside!");
}
*/
