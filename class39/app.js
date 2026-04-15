// localStorage.setItem("name","Umra")
// localStorage.setItem("name","Safia")
// localStorage.setItem("email","Safia@gmail.com")
// // localStorage.removeItem("name")
// // console.log(localStorage.getItem("name"));
// // localStorage.removeItem("email")
// localStorage.clear()



// var obj={
//     name:"Umra",
//     email:"umra@gmail.com",
//     phone: 123
// }
// console.log(obj);
// localStorage.setItem("data",JSON.stringify(obj))
// var localData = localStorage.getItem("data")
// console.log(JSON.parse(localData));

function submit(){
    var userName =  document.getElementById("userName")
    var password =  document.getElementById("password")
    var storage = JSON.parse(localStorage.getItem("data"))
    if(!storage){
        storage = []
    }
    var data = {
        userName : userName.value,
        password: password.value
    }
    storage.push(data)
    console.log(data);
    localStorage.setItem("data", JSON.stringify(storage))
}