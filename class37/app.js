// var userKeys = Object.keys(user)
// var userValues = Object.values(user)
// console.log(userKeys, userValues);

// // for(var i =0; i< userKeys.length; i++){
// //     console.log(userKeys[i]);

// // }

// var arr = [1,2,3,4,5]

// for(var values of arr){
//     console.log(values);
// }

var user = {
  name: "Umra",
  education: "BSSE",
  institute: "SMIT",
  course: ["WMA", "GD"],
  address: {
    city: "Karachi",
    country: "Pakistan",
  },
};
// console.log(user.name);
// // console.log(user["education"]);
// console.log(user.address.city);
// console.log(user["address"]["city"]);
// console.log(user["address"]["country"]);

for (var keys in user) {
  // console.log(typeof user[keys]);
  if (Array.isArray(user[keys])) {
    for (var index in user[keys]) {
      console.log(`${keys}${index}: ${user[keys][index]}`);
    }
  } else if (typeof user[keys] === "object") {
    for (var innerKeys in user[keys]) {
      console.log(`${innerKeys} : ${user[keys][innerKeys]}`);
    }
  } else {
    console.log(`${keys} : ${user[keys]}`);
  }
}
