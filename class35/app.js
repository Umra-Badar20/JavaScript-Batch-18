var student1 = {
    studentName : "Umra",
    email : "umrabadar@gmail.com",
    class: 10,
    enrolled: true,
    days: ["mon", "wed","fri"]
}
var student2 = {
    studentName : "Nazia",
    email : "nazia@gmail.com",
    class: 102,
    enrolled: false,
    days: ["tue", "thu","fri"]
}

// console.log(`My name is ${student2.studentName} . I study in class ${student2.class}`);
// console.log(student1.class);
console.log(student2.studentName);
console.log(student1.studentName);

document.getElementById("table").innerHTML=`  <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Class</th>
            <th>Enrolled</th>
            <th>Days</th>
        </tr>
        <tr>
            <td>${student1.studentName}</td>
            <td>${student1.email}</td>
            <td>${student1.class}</td>
            <td>${student1.enrolled}</td>
            <td>${student1.days[0].toUpperCase()}-${student1.days[1]}-${student1.days[2]}</td>
        </tr>
        <tr>
            <td>${student2.studentName}</td>
            <td>${student2.email}</td>
            <td>${student2.class}</td>
            <td>${student2.enrolled}</td>
            <td>${student2.days}</td>
        </tr>`




console.log(student1.days[1]);
