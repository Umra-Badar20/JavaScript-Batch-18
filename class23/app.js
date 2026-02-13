// var myName = "Umra";

// function printName(){
//     var myName = "abc"
//     console.log(myName);   
// }
// printName()

// for(var i = 1;i<=5; i++){
//     console.log(myName, i);  
// }
// printName()


var day = "sun"

switch(day){
    case "sat":
        console.log("Its Saturday");
       
    case "sun":
        console.log("Its Holiday");
       
    case "mon":
        console.log("Its Monday!");
       
    default:
        console.log("Its working day!");
}

console.log("i".toLocaleUpperCase("TR"));
console.log("I".toLocaleLowerCase("TR"));
console.log("umra".slice(0, 1).toUpperCase());

var text = 'The code loops through the string looking for "World War II." Line 2 progresses through the string phrase character-by-character, examining each 12-character sequence. If it finds "World War II," line 3 concatenates three segments: all the  examining characters preceding "World War II," the substitute phrase "the Second World War," and then all the characters following "World War II."'
console.log(text.indexOf("examining"));
console.log(text.lastIndexOf("examining"));
console.log(text.charAt(text.length -1));
console.log(text.replace(/phrase/g, "Umra"));
