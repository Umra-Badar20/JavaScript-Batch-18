function on(e){
    console.log(e.style);  
    e.src = "https://media.tenor.com/r2QLp4VFCaMAAAAM/bigfan.gif"
    e.style.transform = "scale(1.5)"
    e.style.transition = "1s"
    
     
}
function off(e){
    e.src= "images/Capture.PNG"
    e.style.transform = ""
}

function greet(userName){
    console.log("Hello "+userName);
}
function bordercolor(e){
    e.style.border="5px solid black"
    e.style.height = "50px"
}
function borderchange(e) {
    e.style.borderColor="blue"
    e.style.height = "70px"
    
}
function focusState(e){
    e.style.outline = "none"
}
function blurState(e){
    e.style.border = "1px solid gray"
    // e.style.borderRadius = "2px"
    // e.style.paddingLeft = "5px"
    // e.style.paddingBottom="2px"
}