// var obj = {
//   fName: "Umra",
//   lName: "Badar",
//   fullName: function(){
//     return `My name is ${this.fName} ${obj.lName}`
//   },
//   detais:{
//     fName: "Wajeeha",
// //   lName: "Badar",
//   fullName: function(){
//     return `My name is ${this.fName} ${obj.lName}`
//   },
//   }

// };
// console.log(obj.fullName());
// console.log(obj.detais.fullName());

// var student1={
//     name:"Umra",
//     email: "umra@gmail.com"
// }
// var student2={
//     name:"madiha",
//     email: "madiha@gmail.com"
// }

// function Student(a, b) {
//   this.name = a;
//   this.email = b;
// //   this.fullName = function () {
// //     return `Name is ${this.name}`;
// //   };
// }

// Student.prototype.fullname = function(){
//     return `Name is ${this.name}`
// }

// var name = prompt("Enter your name here:");
// var student1 = new Student(name, "umra@gmail.com");
// var student2 = new Student("madiha", "madiha@gmail.com");
// console.log(student1);
// console.log(student2);

var obj = {
  name: "umra",
  salary: 1000000,
};
// console.log("constructor" in obj); // Also checks prototypes
// console.log(obj.hasOwnProperty("constructor")); // doesn't checks checks prototypes only checks for properties
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

function Student(a, b) {
  this.name = a;
  this.email = b;
}

var students = [
  new Student("Umra", "umra@gmail.com"),
  new Student("Umra", "umra@gmail.com"),
  new Student("Umra", "umra@gmail.com"),
];
console.log(students);

