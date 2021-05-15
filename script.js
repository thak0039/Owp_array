// let myarray = ["pinki", "nisha", "uttkarsh", "himani", "Mittal"];
// var text = "";

// for (let i = 0; i < myarray.length; i++) {

//     text += "<li>" + myarray[i] + "</li>";
// }
// document.write(text);



let sub1 = prompt("Enter Javascript Marks");
let sub2 = prompt("Enter C# Marks");
let sub3 = prompt("Enter Phython Marks");

document.getElementById('jms').innerHTML = sub1;
document.getElementById('cms').innerHTML = sub2;
document.getElementById('pms').innerHTML = sub3;