var first= $("<p>HI ! </p>");

var name = localStorage.getItem("lastname")

first.append(name)

$("body").append(first)