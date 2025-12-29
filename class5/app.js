// var gender = prompt("Enter your gender:");
// var message;

// if (gender == "female") {
//   message = "You are eligible in Aliabad";
// } else if (gender == "male") {
//   message="You are eligible in Bahadurabad"
// } else {
//   message="You are not eligible"
// }
// console.log(message);

// if(gender == "male"){
//     console.log("You are eligible in Bahadurabad");
// }


// var sub1 = +prompt("Enter marks of subject 1:");
// var sub2 = +prompt("Enter marks of subject 2:");
// var sub3 = +prompt("Enter marks of subject 3:");
// var totalMarks = 300;
// var obtainedMarks = sub1 + sub2 + sub3;
// var percentage = (obtainedMarks/totalMarks) *100;
// var grade, remarks;

// if(percentage > 100){
//     obtainedMarks ="Invalid"
//     percentage = "Invalid"
//     grade= "Invalid"
//     remarks = "Enter marks into 100s"
// }
// else if (percentage >= 80) {
//     grade = "A-one";
//     remarks = "Excellent"
// }
// else if (percentage >= 70) {
//      grade = "A";
//     remarks = "Good"
// }
// else if (percentage >= 60) {
//      grade = "B";
//     remarks = "You need to improve!"
// }
// else if (percentage >= 50) {
//      grade = "Fail";
//     remarks = "Sorry"
// }
// document.write("<h1>Marks Sheet</h1>")
// document.write("<table width='700px' cellpadding='20' cellspacing='30' bgcolor='pink' border='1'>")
// document.write("<tr> <th>Total Marks :</th> <td>" + totalMarks + " </td></tr>");
// document.write("<tr> <th>Marks Obtained :</th> <td>" + obtainedMarks+ "</td></tr>");
// document.write("<tr> <th>Percentage :</th> <td>" + percentage + "% </td></tr>");
// document.write("<tr> <th>Grade :</th> <td>" + grade+ "</td></tr>");
// document.write("<tr> <th>Remarks :</th> <td>" + remarks+ "</td></tr>");
// document.write("</table>")



var city = prompt("Enter your city")
var exp =  +prompt("Enter your exp in years")

// if(city == "karachi" && exp >= 2){
//     console.log("You are eligible");   
// }else{
//     console.log("You are not eligible");   
// }

// if(city == "karachi" || exp >= 2){
//     console.log("You are eligible");   
// }else{
//     console.log("You are not eligible");   
// }