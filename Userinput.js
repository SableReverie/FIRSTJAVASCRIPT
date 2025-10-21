/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample HTML Page</title>
    <link href="style.css" rel="stylesheet">
</head>
<body>
    <h1 id = "WELCOME">LOG-IN PAGE</h1>
    <input id ="username" type="text" placeholder="Username"> 
    <br>
    <input id ="password" type="password" placeholder="Password">
    <br>
    <button id="loginBtn">Log In</button>
  <script src="index.js"></script>
</body>
</html>
*/

// ACCEPT USER INPUT AND DISPLAY ALERT

let username;
let password;

document.getElementById("loginBtn").onclick = function() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    document.getElementById("WELCOME").innerHTML = `WELCOME, ${username}!`;
    console.log(username);
    console.log(password);
    alert(`Hello, ${username}! You have successfully logged in.`);
}
