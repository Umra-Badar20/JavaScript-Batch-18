function factorial(x) {
  var result = 1;
  for (var i = 1; i <= x; i++) {
    // result *= i;
    result = result * i;
    console.log(i, result);
  }
  console.log(result);
}
factorial(20);

// function calculateHyp(p, b) {
//   var pSq = p * p;
//   var bSq = b * b;
//   var hypSq = pSq + bSq;
//   console.log(hypSq);
// }

function calculateHyp(p, b) {
  function calculateSquare(num) {
    return num * num;
  }
  var hypSq = calculateSquare(p) + calculateSquare(b);
  console.log(hypSq);
}
calculateHyp(5, 2);

console.log(document.getElementById("subject2").value);

function calculateAvg() {
  var sub1 = Number(document.getElementById("subject1").value);
  var sub2 = Number(document.getElementById("subject2").value);
  var sub3 = Number(document.getElementById("subject3").value);
  var sub4 = Number(document.getElementById("subject4").value);
  console.log(sub1 + sub2 + sub3 + sub4);

  var avg = (sub1 + sub2 + sub3 + sub4) / 4;
  console.log(avg);
  if (avg <= 50) {
    document.getElementById("average").innerHTML =
      "Unfortunately! You are failed, Your Average Marks are " + avg;
  } else {
    document.getElementById("average").innerHTML =
      "Cogratulation! You are passed, Your Average Marks are " + avg;
  }

  document.getElementById("subject1").value = "";
  document.getElementById("subject1").value = "";
  document.getElementById("subject1").value = "";
  document.getElementById("subject1").value = "";
  // sub1=""
  // console.log(sub1, sub2);
}

function palindromeChecker() {
  var word = document.getElementById("word").value;
  var reverse = "";

  for (var i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
  }
  if (word == reverse) {
    console.log("Its a palindrome word");
    document.getElementById("result").innerHTML = word+ " is a palindrome word"
} else {
    console.log("Its not a palindrome word");
    document.getElementById("result").innerHTML = word+ " is not a palindrome word"
  } 
  document.getElementById("word").value=""
}
