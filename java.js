// GLOBAL VARIABLES
var PassAmount;
var num;
var special;
var uppercase;
var lowercase;
var generateBtn = document.querySelector("#generate");
var letArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var speArray = ["!", "@", "#", "$", "%", "&", "*", "?"];
var result = "";

// function isNumber(val) {
// return (val >=0 || val < 0);
// }

// PROMPT FUNCTION ON LOAD
function promptSeq() {
  PassAmount = parseInt(
    prompt("How long do you want your password?", "Number value from 8-128")
  );
  do {
    num = confirm("Do you want a number?");
    special = confirm("Do you want any special characters");
    uppercase = confirm("Do you want uppercase");
    lowercase = confirm("Do you want any lowercase");
  } while (
    num == false &&
    special == false &&
    uppercase == false &&
    lowercase == false
  );
}

// PROMPT SEQUENCE WHEN PAGE LOADS
window.addEventListener("load", promptSeq);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// GENERATE PASSWORD
function generatePassword() {
  for (var i = 0; i < PassAmount; i++) {
    if (num === true) {
      result += letArray.concat(numArray)[
        Math.floor(Math.random() * letArray.concat(numArray).length)
      ];
    } else {
    }
  }
  console.log(result);
  console.log(PassAmount);
  return result;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
