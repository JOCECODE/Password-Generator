var length = prompt("How long do you want your password?", "Number value from 8-128");



var special = confirm("Do you want any special characters");

// var num = confirm("Do you want any numbers?");
// var uppercase = confirm("Do you want uppercase");
// var lowercase = confirm("Do you want any lowercase");

// var a = parseInt("10") + "<br>";


// var customerName = prompt("Please enter your name", "<name goes here>");

// if (customerName!= null) {

//     document.getElementById("welcome").innerHTML =

//     "Hello " + customerName + "! How are you today?";

// }


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
