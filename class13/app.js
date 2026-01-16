// for(var i=1; i<=10; i++){
//     console.log("Hello");
// }
// var arr = ["karachi","lahore","multan","quetta","sawat"]
// for(var i=0; i<arr.length; i++){
//     console.log(i,arr[i]);
// }

var multiArr = [
  [["a"], ["b"]],
  [["c"], ["d"]],
  [["e"], ["f", "g"]],
];
for (var i = 0; i < multiArr.length; i++) {
  // console.log(multiArr[i]);
  for (var j = 0; j < multiArr[i].length; j++) {
    // console.log(multiArr[i][j]);
    for (var k = 0; k < multiArr[i][j].length; k++) {
      console.log(multiArr[i][j][k]);
    }
  }
}
