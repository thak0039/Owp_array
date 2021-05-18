// let myarray = ["pinki", "nisha", "uttkarsh", "himani", "Mittal"];
// var text = "";

// for (let i = 0; i < myarray.length; i++) {

//     text += "<li>" + myarray[i] + "</li>";
// }
// document.write(text);

let numsubject = prompt("Number of subject");
var marks = [];
var val = [];
let text = "<table><tr><th>Subject Name</th><th>Subject Marks</th></tr>";
for (let i = 0; i < numsubject; i++) {
    subvalue = prompt("Enter Subject");
    val.push(subvalue);
    // text = "<tr><td>" + val + "</td></tr>";
}
console.log(val);
for (let i = 0; i < val.length; i++) {
    submarks = prompt("Enter Marks" + " " + val[i]);
    marks.push(submarks);
    // text += "<td>" + marks + "</td>";
}
for (i = 0, j = 0; i < val.length, j < marks.length; i++, j++) {
    text += "<tr><td>" + val[i] + "</td>" + "<td>" + marks[j] + "</td></tr>";
}


text += "</table>";

document.write(text);