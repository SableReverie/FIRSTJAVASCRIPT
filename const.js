<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample HTML Page</title>
    <link href="style.css" rel="stylesheet">
</head>
<body>
  
  <h1 id ="myH1">Enter the radius of a circle: </h1>
  <input type="text" id="radiusInput"><br><br>
  <button id="mySubmit">submit</button>
  <h3 id="myH3"></h3>
  <script src="index.js"></script>
</body>
</html>

// const = a variable that cannot be reassigned

const PI = 3.14159;
let radius;
let circumference;



document.getElementById("mySubmit").onclick = function() {
  let radiusInput = document.getElementById("radiusInput").value;
  radiusInput = Number(radiusInput);
  let circumferenceResult = 2 * PI * radiusInput;
  document.getElementById("myH3").textContent = `The circumference is: ${circumferenceResult}`;
}
