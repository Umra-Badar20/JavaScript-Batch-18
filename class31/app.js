// function myFunc(){
//     var para = document.getElementById("para")
//     para.className += " colorChange"
// }
function myFunc() {
  var para = document.getElementById("para");
  para.style.color = "blue"
}
var p = document.getElementsByTagName("p")
console.log(p);
var paraText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ab quasi vel tempora cupiditate nulla molestias. Mollitia, eligendi quaerat? Harum quisquam impedit voluptas excepturi corporis quaerat quasi officia consectetur sequi!"
// var colorChange = document.getElementsByTagName("p");
// function colorchange() {
//     for (var i =0; i < p.length; i++) {   
//         p[i].style.color = "salmon"
//         // p[i].style.fontWeight = "bold"
//         p[i].innerText =`<b>${paraText}</b>`
//         // p[i].innerHTML =`<b>Hello World</b>`
//     }
// }
// function colorreturn() {
//     for (var i =0; i <= p.length; i++) {
//         p[i].style.color = "blue"
//     }
// }

var div = document.getElementById("div")
var divPara = div.getElementsByTagName("p")

console.log(divPara);
// console.log(document.childNodes[1].childNodes[2].childNodes[3].childNodes[1].childNodes);
var pa = document.childNodes[1].childNodes[2].childNodes[3].childNodes[1].childNodes
console.log(pa);
console.log(pa.parentNode);

