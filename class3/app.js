var num = 10
// console.log(num++); 
// console.log(num); //11
// num--
// console.log(num); //10

// console.log(++num); //11
// console.log(num++); //11
// console.log(--num); //11

// var totalCost = (1 + 3) * 4; //16  13
// console.log(totalCost);

// var firstName = "Umra"
// var lastName = "Badar"
// var fullName = firstName+ " " +lastName
// console.log(fullName);



// var a = 2
// var b = "5"

// console.log(a/b);
// console.log("3"+"3"-"3"); //30





var fName = prompt("Enter your first name","Umra");
var lName = prompt("Enter your last name", "Badar");
var fullName = "Ms. "+fName+" "+lName + "!"
console.log(fullName);

var welcomeNote = "Welcome to the team, "+fName +" "+lName +"! We're excited to work with you and see your contributions.On behalf of everyone, welcome! We're looking forward to achieving great things together.We're delighted to have you join us. Your skills are a perfect fit, and we can't wait sewhat you'll accomplish. Welcome aboard! Feel free to reach out with any questions as you settle in." 

document.write("<h1>"+fullName+"</h1>"+ "<p>"+ welcomeNote+ "</p>")

document.write("<h1 class='heading'>"+fullName+"</h1>"+ "<p>"+"Welcome to the team, "+fName +" "+lName +"! We're excited to work with you and see your contributions.On behalf of everyone, welcome! We're looking forward to achieving great things together.We're delighted to have you join us. Your skills are a perfect fit, and we can't wait sewhat you'll accomplish. Welcome aboard! Feel free to reach out with any questions as you settle in. </p>")


document.write("<h2> Umra Badar </h2>")
