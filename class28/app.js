var char1 = document.getElementById("char1");
var char2 = document.getElementById("char2");

var left = 0;
function animateChar() {
    console.log(event.keyCode);
    
    if(event.keyCode == 68 && left <1500) {
        left = left+10
        char1.style.left = left +"px"
        char1.src = "https://www.fightersgeneration.com/characters/alicewf.gif"
        char1.style.transform= "scaleX(1)"

     }
     if(event.keyCode == 65 && left > 10) {   
        left = left -10 
        char1.style.left = left+ "px"
        char1.style.transform= "scaleX(-1)"
     }
     if(event.keyCode === 32){
        char1.src = "https://www.fightersgeneration.com/np8/char/alice-chi.gif"
        setTimeout(()=>{
            char1.src = 'https://www.fightersgeneration.com/characters/alicestance.gif'
        },2000)
     }
}   
window.onkeydown = animateChar