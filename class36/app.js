var questions = [
  {
    question:
      "Q1: What is the primary purpose of the const keyword in JavaScript?",
    opt1: "It prevents a variable's value from being re-assigned.",
    opt2: "It always makes a variable global.",
    opt3: "It can only be used for numbers.",
    opt4: "It can be declared without an initial value.",
    answer: "It prevents a variable's value from being re-assigned.",
  },
  {
    question:
      "Q2: Which array method adds a new element to the end of an array?",
    opt1: "pop()",
    opt2: "push()",
    opt3: "shift()",
    opt4: "unshift()",
    answer: "push()",
  },
  {
    question: "Q3: What is the difference between === and ==?",
    opt1: "They perform exactly the same function.",
    opt2: "=== checks both value and data type (Strict Equality).",
    opt3: "== only checks the data type.",
    opt4: "=== is only used for comparing numbers.",
    answer: "=== checks both value and data type (Strict Equality).",
  },
];
var index = 0;
var score = 0
function renderQuiz(){
    var quizContainer = document.getElementById("quizContainer")
    var option = document.getElementsByName("option")
    for(var i = 0; i<option.length; i++){
        // console.log(option[i].value, option[i].checked);
        if(option[i].checked){
            console.log(questions[index-1].answer);
            
           if(option[i].value  == questions[index-1].answer){
            score++
            console.log(score);
            
           }
            
        }
        
    }
    if(!questions[index]){
         quizContainer.innerHTML = `
         <h1 class="text-center">Your Score is : ${score}</h1>
         `
        return
    }
    quizContainer.innerHTML = `
    <p class="question fw-bold">${questions[index].question} </p>
            <label class="border-bottom"><input type="radio" name="option" value="${questions[index].opt1}"> ${questions[index].opt1}</label><br>
            <label class="border-bottom"><input type="radio" name="option" value="${questions[index].opt2}"> ${questions[index].opt2}</label><br>
            <label class="border-bottom"><input type="radio" name="option" value="${questions[index].opt3}"> ${questions[index].opt3}</label><br>
            <label class="border-bottom"><input type="radio" name="option" value="${questions[index].opt4}"> ${questions[index].opt4}</label><br>
          

            <button id="nextBtn" class="btn btn-success w-25 mx-auto" onclick = "renderQuiz()">Next</button>
    `
    if(index=== questions.length-1){
        var nextBtn = document.getElementById("nextBtn")
        nextBtn.innerHTML = "Submit"
        nextBtn.classList.add("btn-danger")
        
    }
    index++
}
renderQuiz()



