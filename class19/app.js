// function greet(){
//     console.log("Hello world");
// }
// console.log(new Date());
// greet()
// greet()
// console.log(new Date());
// greet()
// greet()
// var date = new Date();
// var hours = date.getHours();
// var minutes = date.getMinutes();

// function getTime() {
//   var time = hours + ":" + minutes + "pm";
//   console.log(time);
//   document.write(time);
// }
// console.log(date);

// getTime();



// function tellDate(){
//     var date = moment().format('MMMM Do YYYY, h:mm:ss a | dddd ');
//     console.log(date);    
// }
// tellDate()



function greetUser(userName){
    console.log("Welcome "+ userName);    
}

greetUser("Umra")
greetUser(prompt("Enter your name:"))

var name = prompt("Enter your name:") || "user"
greetUser(name)


// function sum(a,b){
//  console.log(a+b);
 
// }
// sum(2,5)
// sum(3,5)