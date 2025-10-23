<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample HTML Page</title>
    <link href="style.css" rel="stylesheet">
</head>
<body id ="mainBody">
  
  <label id="counterLabel">0</label><br>
  <div id = "btnContainer">
   <button id="decreaseBtn" class="buttons">Decrease</button>
   <button id="resetBtn" class="buttons">Reset</button>
   <button id="increaseBtn" class="buttons">Increase</button>
  </div>
  
  <script src="index.js"></script>
</body>
</html>



#mainBody {
    background-color: #a4e48f;
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#counterLabel {
    font-size: 10em;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 20px;
    display: block;
    text-align: center;
}
#btnContainer {
    text-align: center;
}
.buttons {
    font-size: 1.5em;
    padding: 10px 20px;
    margin: 5px;
    cursor: pointer;
    background-color: red;
    border-radius: 5px;
    transition: background-color 0.25s;
}
.buttons:hover {
    background-color: hsl(214, 100%, 50%);
}



// COUNTER PROGRAM

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const counterLabel = document.getElementById("counterLabel");

let count = 0;

increaseBtn.onclick = function() {
    count++;
    counterLabel.innerText = count;
}
decreaseBtn.onclick = function() {
    count--;
    counterLabel.innerText = count;
}
resetBtn.onclick = function() {
    count = 0;
    counterLabel.innerText = count;
}
