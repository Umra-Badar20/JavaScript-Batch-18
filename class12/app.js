// for (var i = 1; i < 6; i++) {
//   for (var k = 1; k <= 5 - i; k++) {
//     document.write("&nbsp;&nbsp;");
//   }
//   for (var j = 1; j <= i; j++) {
//     document.write("*");
// }
// for(var l = 2; l<=i ; l++){   
//     document.write("*");
//   }
//   document.write("<br>");
// }
// document.write("Loop ended");
// //     *
//    ***
//   *****
//  *******
// *********



var multiArr = [["Umra","Badar"],["Madiha","Hanif","smit"],["Fizza","Naeem"]]

// console.log(multiArr[2][0]);
for(var i = 0; i< multiArr.length ; i++){
    // console.log(multiArr[i]);
    for(var j =0; j< multiArr[i].length ; j++){
        console.log("Hello "+multiArr[i][j])        
    }   
}
