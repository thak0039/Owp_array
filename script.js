// let myarray = ["pinki", "nisha", "uttkarsh", "himani", "Mittal"];
// var text = "";

// for (let i = 0; i < myarray.length; i++) {

//     text += "<li>" + myarray[i] + "</li>";
// }
// document.write(text);

let numsubject = prompt("Number of subject");
let text = "<table><tr><th>Subject Name</th><th>Subject Marks</th></tr>";
let marks;
let val;
text += "<tr>"
for (let i = 0; i < numsubject; i++) {

    val = prompt("Enter Subject");
    text += "<td>" + val + "</td>";


}
for (let i = 0; i < val; i++) {
    marks = prompt("Enter Marks" + " " + val[i]);
    text += "<td>" + marks + "</td>";
}

text += "</tr></table>";

document.write(text);