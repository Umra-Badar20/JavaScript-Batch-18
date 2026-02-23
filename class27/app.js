var inp = document.getElementById("inp")
function addVal(){
    inp.value="Umra" 
}
function submitForm(){
    console.log(inp.value);
    alert("Form Submitted")
    inp.value=""
}
function abc(){
    console.log(event.key , event.keyCode);  
    if(event.keyCode ===13){
       submitForm()
    }
}