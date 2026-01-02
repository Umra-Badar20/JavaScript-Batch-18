// var js = prompt("Js aati h?");

// if (js == "yes") {
//   var exp = prompt("Exp kitna h?");

//   if (exp >= 2) {
//     var city = prompt("kahan se ho?");

//     if (city === "karachi") {
//       console.log("Ajao kl se");
//     } else {
//       console.log("Karachi ajao");
//     }
//   } else {
//     console.log("bary ho k aao");
//   }
// } else {
//   console.log("js seekh k aao");
// }


// var city = prompt("Enter your city name:");
// var course = prompt("Enter your selected course:")
// var edu = +prompt("Enter your Last education in numbers")

// if(city === "karachi" && course === "WMA" && edu>=12){
//     console.log("You are selected"); 
// }else{
    
//     console.log("You are not selected"); 
// }


// var city = prompt("Enter your city name:");

// if(city === "karachi" ){
//     var course = prompt("Enter your selected course:")
//     if(course==="WMA"){
//         var edu = +prompt("Enter your Last education in numbers")
//         if(edu>=12){
//             console.log("Congratulations ! You are selected");          
//         }else{
//             console.log("Sorry! This course is availbe after Intermediate.");            
//         }
//     }else{
//         console.log("Sorry! This course is not available");
        
//     }
// }else{
//     console.log("Sorry! This course is not available outside karachi");   
// }


// var student0 = "fizza"
// var student1 = "iqra"
// var student2= "madiha"
// var student3= "arhama"
// var student4 = "areeba"
 
// console.log("Welcome "+ student1);


var students = ["fizza","iqra","madiha","arhama","areeba", 6, true, "random"]
console.log("Welcome "+students[1]);
// console.log(2 + students[6]);

// console.log(students[7]);
students[1] ="umra"
console.log("Welcome "+students[1]);


//Removing elements from end of array
students.pop()
students.pop()

//Adding elements at the end of array
students.push("umra","hanifa")
console.log(students);

var arr = []
arr[0]= "x"
arr[1]= "y"
arr[3]="z"
console.log(arr);


