var divv = $("<div> </div>")
var first= $("<p>HI ! </p>");
var btnNext = $("<button></button")
var name = localStorage.getItem("lastname")
var radio = localStorage.getItem("Radio")

divv.append(first).append(btnNext)

first.append(name)
divv.addClass("firstext")
btnNext.addClass("btn btn-defult")
$("body").append(divv)

btnNext.on("click",function () {
	$(".firstext").fadeOut();
})

/************************/
