// let myarray = ["pinki", "nisha", "uttkarsh", "himani", "Mittal"];
// var text = "";

// for (let i = 0; i < myarray.length; i++) {

//     text += "<li>" + myarray[i] + "</li>";
// }
// document.write(text);

let numsubject = prompt("Number of subject");
var marks = [];
var val = [];
let total = 0;

let text = "<table><tr><th>Subject Name</th><th>Subject Marks</th></tr>";
for (let i = 0; i < numsubject; i++) {
    subvalue = prompt("Enter Subject");
    val.push(subvalue);
    // text = "<tr><td>" + val + "</td></tr>";
}
console.log(val);
for (let i = 0; i < val.length; i++) {
    submarks = prompt("Enter Marks" + " " + val[i]);
    total += parseInt(submarks);
    marks.push(submarks);
    // text += "<td>" + marks + "</td>";
}
for (i = 0, j = 0; i < val.length, j < marks.length; i++, j++) {
    text += "<tr><td>" + val[i] + "</td>" + "<td>" + marks[j] + "</td></tr>";
}
text += "<tr><td><b>Total</b></td><td>" + total + "</td></tr>";
let per = total / marks.length;
text += "<tr><td><b>Persontage</b></td><td>" + per + "</td></tr>";
text += "<tr><td><b>Class</b></td>";

if (per >= 35 && per < 60) {
    text += "<td> 3 class</tr>";
} else if (per >= 60 && per < 80) {
    text += "<td>2 class</td></tr>";
} else if (per >= 80 && per <= 100) {
    text += "<td>1 class </td></tr>";
} else {

    text += "<td> you are fail</td></tr>";
}


text += "</table>";

document.write(text);