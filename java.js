// GLOBAL VARIABLES
var CharOffset = 0;
var PassAmount;
var num;
var special;
var uppercase;
var lowercase;
var generateBtn = document.querySelector("#generate");
var lowArray = [
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
var upperCaseArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var custom = [];
function shuffelWord(word) {
  var shuffledWord = "";
  word = word.split("");
  while (word.length > 0) {
    shuffledWord += word.splice((word.length * Math.random()) << 0, 1);
  }
  return shuffledWord;
}
// PROMPT FUNCTION ON LOAD
function promptSeq() {
  do {
    PassAmount = parseInt(
      prompt("How long do you want your password?", "Number value from 8-128")
    );
    console.log(PassAmount);
  } while (PassAmount < 8 || PassAmount > 128 || isNaN(PassAmount));
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
  generateBtn.disabled = true;
}

// GENERATE PASSWORD
function generatePassword() {
  if (num == true) {
    custom = custom.concat(numArray);
    result += numArray[Math.floor(Math.random() * numArray.length)];
    CharOffset++;
    console.log(result);
    console.log(CharOffset);
  }
  if (special == true) {
    custom = custom.concat(speArray);
    result += speArray[Math.floor(Math.random() * speArray.length)];
    CharOffset++;
    console.log(result);
    console.log(CharOffset);
  }
  if (uppercase == true) {
    custom = custom.concat(upperCaseArray);
    result += upperCaseArray[Math.floor(Math.random() * upperCaseArray.length)];
    CharOffset++;
    console.log(result);
    console.log(CharOffset);
  }
  if (lowercase == true) {
    custom = custom.concat(lowArray);
    result += lowArray[Math.floor(Math.random() * lowArray.length)];
    CharOffset++;
    console.log(result);
    console.log(CharOffset);
  }
  for (var i = 0; i < PassAmount - CharOffset; i++) {
    result += custom[Math.floor(Math.random() * custom.length)];
  }
  return shuffelWord(result);
}

// }

// document.querySelector('.word').innerHTML = shuffelWord("shuffle me");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
