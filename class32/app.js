// console.log(document.childNodes[1].childNodes[0].childNodes[5]);

var container = document.getElementsByClassName("container")[0]
// var box1 = container.childNodes[1]

// var body = box1.parentNode.parentNode
// console.log(body.childNodes[3]);
// console.log(body.childNodes[1].nodeType);
var box1 = container.firstChild
// console.log(box1.nextSibling.nextSibling);
console.log(box1.nextElementSibling.nextElementSibling);
console.log(container.lastChild);


