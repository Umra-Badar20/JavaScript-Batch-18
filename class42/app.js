// try{
//     // console.log("hello")
//     throw "Please enter your email!"
// }catch(error){
//     console.log(error);

// }
// console.log("hello")

// function divide(x,y){
//     if(y===0){
//         // throw "Cant divide by 0"
//         throw new Error("Cant divide by 0")
//     }
//     return x/y
// }
// try {
//     console.log(divide(10,2));
//     console.log(divide(10,0));
    
// } catch (error) {
//     console.log(error);
    
// }
// console.log("hello");

try {
    console.log(Umra);
} catch (error) {
    console.log(error);
    
}
console.log("Umra");
// "Umra".startsWith("Umt")
//Regex
// /^(?=\s*$)/.test("  ")
// true
// /^(\+92|92|0)(3\d{2})\d{7}$/.test("9231112854734957029560275")
// true
// /^[0-9]{5}-[0-9]{7}-[0-9]{1}$/.test("42101-3944516-0")
// true
// /^[0-9]{13}$/.test("4315135455160")
// true
// /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()[\]{}|\\/ \-+_.:;=,~`])[^\s]{8,}$/
// .test("tjlkpkmra.dflokdok137U")

var pass = "Umra.12345"
var passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()[\]{}|\\/ \-+_.:;=,~`])[^\s]{8,}$/
if(passRegex.test(pass)){
    console.log("Access granted!");
    
}else{
    
    console.log("Enter a strong password!");
}