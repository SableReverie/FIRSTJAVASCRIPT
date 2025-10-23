// CHECKER BOX

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample HTML Page</title>
    <link href="style.css" rel="stylesheet">
</head>
<body id ="mainBody">
  
    <input type ="checkbox" id="myCheckBox">
    <label for="myCheckBox">Subscribe</label><br>

    <input type="radio" id="visaBTN" name="card">
    <label for="visaBTN">Visa</label><br>
    <input type="radio" id="MasterCardBTN" name="card">
    <label for="MasterCardBTN">MasterCard</label><br>
    <input type="radio" id="payPalBTN" name="card">
    <label for="payPal">payPal</label><br><br>

    <button type="submit" id="mySubmit">Submit</button>

    <p id="subResult"></p>
    <p id="paymentResult"></p>

 <script src="index.js"></script>
</body>
</html>

#mainBody{
    background-color: rgb(103, 89, 89);
}
#mySubmit{
    background-color: rgb(255, 255, 255);
    color: black;
    font-weight: bold;
}

// CHECKED = propery that determines the checkbox state

const myCheckbox = document.getElementById("myCheckBox");
const mySubmit = document.getElementById("mySubmit");
const visaBtn = document.getElementById("visaBTN");
const masterCardBtn = document.getElementById("MasterCardBTN");
const payPalBtn = document.getElementById("payPalBTN");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function() {

    if (myCheckbox.checked) {
        subResult.textContent = "You have agreed to the terms and conditions.";
    } else {
        subResult.textContent = "You have not agreed to the terms and conditions.";
    }

    if (visaBtn.checked) {
        paymentResult.textContent = "You have selected Visa as your payment method.";
    } else if (masterCardBtn.checked) {
        paymentResult.textContent = "You have selected MasterCard as your payment method.";
    } else if (payPalBtn.checked) {
        paymentResult.textContent = "You have selected PayPal as your payment method.";
    }
      else {
        paymentResult.textContent = "You have not selected a payment method.";
    }

}

