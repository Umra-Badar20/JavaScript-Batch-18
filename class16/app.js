// var num = Math.round(2.59)
// var num = Math.floor(2.59)
// var num = Math.ceil(2.09)
// console.log(num);


// var randomNum = Math.round(Math.random() *6)
// console.log(randomNum);



// var str = "20.7576"
// // var num = Number(str)
// // var num = parseInt(str)
// var num = parseFloat(str)
// console.log(str, num);

// Number()
// num.toString()



// var num =  10.5874536
// console.log(num.toFixed(2));
// var num = 2
// console.log(num.toString());



// var date = new Date("1 22 2026")
// dateStr = date.toString()
// var time = dateStr.slice(16,24)
// console.log(date);


// var date = new Date("1 20 26");
// console.log(date);

// var datestr = date.toString();
// var day =datestr.slice(0,3);
// console.log(day);
// if  (day ==="Thu"){
//     // console.log(day + "rsday")
//     day= day+"rsday"
// }
// else if (day ==="Wed"){
// console.log(day + "nesday")
// }
// else if (day ==="Sat"){
// console.log(day + "urday")
// }
// else if (day ==="Tue"){
// console.log(day + "sday")
// }
// else{
//     console.log(day+"day")
// }



var dayNames=  ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"] 

var date = new Date()
var day = date.getDay()
// console.log(date, day);
console.log(day);

console.log(dayNames[day]);


console.log("Date" +date.getDate());
