// function writeOnly(cha) {
//   document.getElementById("input").value += cha;
// }
// function clearInput() {
//   document.getElementById("input").value = "";
// }
// function dleteCha() {
//   var words = document.getElementById("input").value;
//   var finallength = words.slice(0, -1);
//   document.getElementById("input").value = finallength;
// }
var display = document.getElementById("display");

var firstNumber = "";
var secondNumber = "";
var operator = "";

function appendNumber(num) {
  display.value += num;
}

function setOperator(op) {
  if (display.value == "") return;

  firstNumber = display.value;
  operator = op;

  display.value = firstNumber + " " + operator + " ";
}
function calculate() {
  var exp = display.value.split(" ");
  console.log(exp);

  firstNumber = exp[0];
  operator = exp[1];
  secondNumber = exp[2];

  var result;

  if (operator == "+") {
    result = Number(firstNumber) + Number(secondNumber);
  } else if (operator == "-") {
    result = Number(firstNumber) - Number(secondNumber);
  } else if (operator == "*") {
    result = Number(firstNumber) * Number(secondNumber);
  } else if (operator == "/") {
    if (Number(secondNumber) == 0) {
      display.value = "Error";
      return;
    }
    result = Number(firstNumber) / Number(secondNumber);
  } else if (operator == "%") {
    result = Number(firstNumber) % Number(secondNumber);
  }

  display.value = result;
}
