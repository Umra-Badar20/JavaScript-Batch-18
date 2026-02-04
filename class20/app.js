// function sum(num1,num2){
//     // console.log(num1,num2);
//     var add = num1+num2
//     return add
// }
// var num = Number(prompt("Enter a number"))
// console.log(sum(num,3));
// document.write(sum(8,5))

function calculation(num1, num2, operator) {
  var operation;
  if (operator == "+") {
    operation = num1 + num2;
  } else if (operator == "-") {
    operation = num1 - num2;
  } else if (operator == "*") {
    operation = num1 * num2;
  } else if (operator == "/") {
    operation = num1 / num2;
  } else {
    operation = "Invalid Operator";
  }
  return operation;
  console.log("Hello");
}
// var userNum1 = Number(prompt("Enter a number"));
// var userNum2 = Number(prompt("Enter another number"));
// var userOperator = prompt("Enter an operator(+, -, *, /)");

// document.write(calculation(userNum1, userNum2, userOperator));

function factorial(n) {
  var result = 1;
  for (var i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}
console.log(factorial(5));

// function calculateSquare(x) {
//   // return x*x
//   return x ** 2;
// }
// console.log(calculateSquare(5));

function calculateHyp(base, perp) {
  function calculateSquare(x) {
    return x ** 2;
  }
  var hypSquare = calculateSquare(base) + calculateSquare(perp)
  return hypSquare
}
console.log(calculateHyp(2,3));
