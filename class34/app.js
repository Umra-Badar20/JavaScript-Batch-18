// // console.log(document.children[0].children[1]);
// // console.log(document.childNodes[1].childNodes);
// var container =  document.getElementById("container")
// var containerPara = container.getElementsByTagName("p")
// // console.log(containerPara);

// var para = document.getElementsByTagName('p')
// // console.log(para);
// // console.log(container.nodeName.toLowerCase());
// console.log(container.attributes.length);

// console.log(container.hasAttribute('class'));
// console.log(container.getAttribute('class'));
// console.log(container.setAttribute('class','main'));


// var container =  document.createElement("div")
// var h1 = document.createElement("h1")
// var p1 = document.createElement("p")
// var p2 = document.createElement("p")
// var p3 = document.createElement("p")

// var h1Txt = document.createTextNode("hello")
// var p1Txt = document.createTextNode("SMIT")
// var p2Txt = document.createTextNode("hello SMIT")
// var p3Txt = document.createTextNode("Umra Here")

// container.setAttribute("id","container")

// container.appendChild(h1)
// container.appendChild(p1)
// container.appendChild(p2)
// container.appendChild(p3)
// h1.appendChild(h1Txt)
// p1.appendChild(p1Txt)
// p2.appendChild(p2Txt)
// p3.appendChild(p3Txt)

// console.log(container);
// var main =  document.getElementById("main")
// main.appendChild(container)


var h1 =  document.getElementsByTagName("h1")[0]
console.log(h1);

function removeElem(){
    h1.remove()
}
function remContainer(){
    document.getElementById("container").remove()
}