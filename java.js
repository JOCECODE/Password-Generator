// Assignment Code
var PassAmount = parseInt(
  prompt("How long do you want your password?", "Number value from 8-128")
);
var num = confirm("Do you want a number?");
console.log(num);
// var special = confirm("Do you want any special characters");
// var uppercase = confirm("Do you want uppercase");
// var lowercase = confirm("Do you want any lowercase");
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

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  for (var i = 0; i < PassAmount; i++) {
    if (num === true) {
      result += letArray.concat(numArray)[
        Math.floor(Math.random() * letArray.concat(numArray).length)
      ];
    } else {
      result += letArray[Math.floor(Math.random() * letArray.length)];
    }
  }
  return result;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// import java.util.ArrayList;

// public class MyClass {
//   public static void main(String[] args) {
//     ArrayList<String> cars = new ArrayList<String>();
//     cars.add("Volvo");
//     cars.add("BMW");
//     cars.add("Ford");
//     cars.add("Mazda");
//     System.out.println(cars);
//   }
// }

// function makeid(length) {
//    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//    var charactersLength = characters.length;
//    for ( var i = 0; i < length; i++ ) {
//       result += characters.charAt(Math.floor(Math.random() * charactersLength));
//    }
//    return result;
// }

// console.log(makeid(12));

// var text = "";
// var i;
// for (i = 0; i < 5; i++) {
//   text += "The number is " + i + "<br>";
// }
// document.getElementById("demo").innerHTML = text;

// var a = parseInt("10") + "<br>";

// var customerName = prompt("Please enter your name", "<name goes here>");

// if (customerName!= null) {

//     document.getElementById("welcome").innerHTML =

//     "Hello " + customerName + "! How are you today?";

// }
