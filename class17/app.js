var str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*()_+{}|:><?-=\;'.,/'"
var password = ""

// console.log(str[randomIndex], randomIndex);
for(var i=0; i<=12; i++){
    var randomIndex = Math.floor(Math.random() * str.length)
    password += str[randomIndex]
}
console.log(password);



//Dates



// console.log(Date.now())

// Ramadan Calculator
var today = new Date()
var firstRamadan = new Date("feb 18 2026")
var diff = firstRamadan.getTime() - today.getTime()

var days = Math.round(diff / (24 * 60* 60 *1000))
var month = Math.round(diff / (30 * 24 * 60* 60 *1000))
console.log(days, month);  


console.log(today.setFullYear(2010));
console.log(firstRamadan.setHours(12));
