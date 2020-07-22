// GLOBAL VARIABLES
var result = "";
var custom = [];
var CharOffset = 0;
var PassAmount;
var num;
var special;
var uppercase;
var lowercase;
var generateBtn = document.querySelector("#generate");

// LIST OF ARRAYS
var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var speArray = ["!", "@", "#", "$", "%", "&", "*", "?"];
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

// ARRAY SEQUENCE SHUFFLER FOUND ONLINE BY MAXIMILLIAN LINDSEY
// https://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript
function shuffle(word) {
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

    // INTEGERS MUST BE 8-128
  } while (PassAmount < 8 || PassAmount > 128 || isNaN(PassAmount));

  // DO LIST OF CONFIRMS
  do {
    num = confirm("Do you want at least one number?");
    special = confirm("Do you want at least one special character?");
    uppercase = confirm("Do you want at least one uppercase letter?");
    lowercase = confirm("Do you want at least one lowercase letter?");
  } while (
    // REPEAT PROMPT SEQUENCE IF USER DOES NOT PICK AT LEAST ONE
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

// GENERATE PASSWORD FUNCTION
function generatePassword() {
  // IF USER WANTS A NUMBER IN PASSWORD
  if (num == true) {
    custom = custom.concat(numArray);
    result += numArray[Math.floor(Math.random() * numArray.length)];
    CharOffset++;
  }

  // IF USER WANTS A SPECIAL CHARACTER IN PASSWORD
  if (special == true) {
    custom = custom.concat(speArray);
    result += speArray[Math.floor(Math.random() * speArray.length)];
    CharOffset++;
  }

  //  IF USER WANTS A UPPERCASE IN PASSWORD
  if (uppercase == true) {
    custom = custom.concat(upperCaseArray);
    result += upperCaseArray[Math.floor(Math.random() * upperCaseArray.length)];
    CharOffset++;
  }

  //  IF USER WANTS A LOWERCASE IN PASSWORD
  if (lowercase == true) {
    custom = custom.concat(lowArray);
    result += lowArray[Math.floor(Math.random() * lowArray.length)];
    CharOffset++;
  }

  //  FOR LOOP TO RANDOMIZE PASSWORD
  for (var i = 0; i < PassAmount - CharOffset; i++) {
    result += custom[Math.floor(Math.random() * custom.length)];
  }
  return shuffle(result);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
