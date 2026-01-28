// Swal.fire("SweetAlert2 is working!");
// Swal.fire({
//   icon: "error",
//   title: "Umra",
//   text: "JavaScript Error!",
//   footer: '<a href="#">Why do I have this issue?</a>',
//   timer: 2500,
// });

// Swal.fire({
//   title: "Drag me!",
//   icon: "success",
 
// });

// Swal.fire({
//      theme: 'dark',
//   position: "top-end",
//   icon: "success",
//   title: "Your work has been saved",
//   showConfirmButton: false,
//   timer: 2500
// });


// Swal.fire({
//      position: "top-end",
//        theme: 'auto',
//   title: "Custom width, padding, color, background.",
//   width: 600,
//   padding: "3em",
//   color: "#716add",
//   background: "#fff url(https://sweetalert2.github.io/images/trees.png)",
//   backdrop: `
//     rgba(0,0,123,0.4)
//     url("https://sweetalert2.github.io/images/nyan-cat.gif")
//     left top
//     no-repeat
//   `
// });


var date = moment().format("MMMM Do,YYYY hh:mm:ss A")
console.log(date);

// var a = moment([2026, 2, 18]);
// var a = moment(new Date("feb 18,2026"));
// var b = moment(new Date())
// var diff = a.diff(b, 'weeks')
// console.log(diff);

var a = moment(new Date("feb 18, 2026"));
var b = moment(new Date("28 jan 2026 03:00 pm"))
// var diff = a.diff(b, 'weeks')
console.log(a.fromNow());
console.log(b.fromNow());

//Plindrome Checker
var word = "umra"
var result = ""

for(var i = word.length-1 ; i>=0; i--){
    // console.log(word[i]);
    result += word[i]
}
console.log(result);
if(word == result){
    console.log("Its A Palindrome word");
    
}else{
    
    console.log("Its not A Palindrome word");
}
