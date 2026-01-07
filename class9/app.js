// var arr = ["umra","zainab","fizza","hadia"]
// var copyArr = arr.slice(-3,-1)
// console.log(copyArr);

// arr.push("madiha")
// console.log(arr);

var str = "Umra Badar";
// str.push("Badar")
// var copyStr = str.slice(0,4)
// console.log(copyStr);
// str[7] ="s"// wrong
// console.log(str[3]);
// console.log(typeof arr);

var arr = ["umra", "zainab", "fizza", "hadia", "safia"];
var picUrl = [
  "https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg?cs=srgb&dl=pexels-bertellifotografia-3792581.jpg&fm=jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAzBE_P3rPclK8gJnC-y1Mq7kNOvyL8yUHlg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAzBE_P3rPclK8gJnC-y1Mq7kNOvyL8yUHlg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAzBE_P3rPclK8gJnC-y1Mq7kNOvyL8yUHlg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAzBE_P3rPclK8gJnC-y1Mq7kNOvyL8yUHlg&s",
];

for (var i = 0; i < arr.length; i++) {
  // document.write("<h1>"+i+str+"</h1>")
  document.write(`<div class="card" style="width: 18rem;">
  <img src="${picUrl[i]}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${arr[i]}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`);
}
console.log("Loop ended");

var arr = ["umra", "zainab", "fizza", "hadia", "madiha", "safia"];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
console.log(arr.length);

for (var i = 0; i < arr.length; i++) {
  console.log(i + 1 + ")" + arr[i]);
}
