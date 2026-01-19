// var myName = prompt("Enter your name here:")
// // console.log(myName.slice(0,1).toUpperCase());
// // console.log(myName.slice(1).toLowerCase());
// var firstChar = myName.slice(0,1)
// var remainingChar = myName.slice(1)

// var titleCased = firstChar.toUpperCase() +remainingChar.toLowerCase()
// console.log(titleCased);


// var text = "Pakistan,[f] officially  the Islamic Republic of Pakistan,[g] is a country in South Asia. It is the fifth-most populous country, with a population of over 241.5 million,[d] having the second-largest Muslim population as of 2023. Islamabad is the nation's capital, while Karachi is its largest city and financial centre. Pakistan is the 33rd-largest country by area. Bounded by the Arabian Sea on the south, the Gulf of Oman on the southwest, and the Sir Creek on the southeast, it shares land borders with India to the east; Afghanistan to the west; Iran to the southwest; and China to the northeast. It shares a maritime border with Oman in the Gulf of Oman, and is separated from Tajikistan in the northwest by Afghanistan narrow Wakhan Corridor."
// document.write(text)

// // console.log(text.lastIndexOf("officially"));// returns index number by taking word
// // console.log(text.charAt(13)); // returns letter by taking index number

// // console.log(text.replace("Afghanistan", "Iran"));
// document.write("<h1> Replaced Text </h1>")
// // var newText = text.replace(/241.5/g, "250")
// var newText = text.replaceAll("Afghanistan", "Iran")
// document.write(newText)


var fName = "umra"
var lName = "badar"
// var fullName = fName+ " " +lName
// var fullName = `${fName} ${lName}`
var fullName = fName.concat(" ",lName, "!")
console.log(fullName);
