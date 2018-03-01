var divv = $("<div> </div>")
var first= $("<h2>Hi , </h2> <br>");
var cont =$("<h2>Do you think you know enough about </h2>")
var btnNext = $("<button></button")
var name = localStorage.getItem("lastname")
var radio = localStorage.getItem("Radio1") 

btnNext.append("<i class='fa fa-angle-right'></i>")
btnNext.css("font-size","30px")
divv.append(first).append(cont).append(btnNext)

first.append(name + "!")
cont.append(radio  )
divv.addClass("firstext ")
btnNext.addClass("btn btn-default")
$(".allBk").append(divv)

/************************/


subject={};
subject.sports={
  questions:['Name the only heavyweight boxing champion to finish his career of 49 fights without ever having been defeated?','In 2011, which country hosted a Formula 1 race for the first time?','Who was the shortest player ever to play in the NBA?'],
  answers:['Rocky Marciano', 'India','Tyrone Bogues'],
  fakeAnswer1:['Max Baer','Pakistan','Arkell Floyd'],
  fakeAnswer2:['Mike Tyson','Turkey','Destin Bryant'],
  fakeAnswer3:['Marquise James','Bulgaria','Farrell Thornton']
};
subject.games={
  questions:['World of Warcraft:What is the name of the desert that surrounds the Caverns of Time?','World of Warcraft:What pit lord was the ruler of Outland before being imprisoned by Illidan Stormrage?','League of Legends: how many champions exist in the game?','Resident Evil 3: what was the name of the main character?','How big is the stack of items size in Minecraft?','Minecraft:Can you mine diamond with stone axe?','GTA:how many games have they released?','What is the main characters Name in Witcher 3?','Overwatch: what is the name of the Machine gun hero?','Where did the events of outlast happen?'],
  answers:['Tanaris','Magtheradon',134,'Jill',64,'YES',15,'Gerlat','Bastion','A Hospital'],
  fakeAnswer1:['Silithus','Azgalor',65,'Lion',128,'No',7,'Ciri','Tracer','Prison'],
  fakeAnswer2:['Desolace','Kazzak',44,'Sam',32,'Maybe',4,'Triss','Reinhart','Playground'],
  fakeAnswer3:['Uldum','Grax',160,'Red',16,'I dont know',12,'Yennefer','Roadhog','Country side']
};
subject.tv={
  questions:['Ser Jaime Lannister is often referred to as...','What is the name of the leader of the Unsullied?','Which character says the line: "The Lannisters send their regards"?',' Who here releases the demon who is destined to break the 66 seals and free Lucifer?','Which of the four horsemen of the apocalypse does not get his ring taken away from him by either Sam, Dean or Castiel?','Compared to a bear and lives in the shadow of his brother..','Can forsee future events..','Who said: "Ideals are peaceful. History is violent"?','What a deadpool\'s favourite weapons?','What is the mental illness in I Am Sam?'],
  answers:['Kingslayer','Grey Worm','Roose Bolton','Azazel',' Famine','Rollo','The seer','Don','Guns and katanas','Mental retardation'],
  fakeAnswer1:['Bianca','The Worm','Tywin Lannister','Lilith','Pestilence','Floki','King Ecbert','Gordo','Pole','Bipolar'],
  fakeAnswer2:['Prince Charming','Brown Worm','Walder Frey','Meg','War','Tortstin','Bjorn','Norman','Fists','Insanity'],
  fakeAnswer3:['Kingkiller','Jeff','Jaime Lannister','Crowleyl','Death','Ivar','Lagertha','Grady','Knives','Depression']
};
subject.random={
  questions:['Name the three primary colours.','What does the term "piano" mean?','What is sushi traditionally wrapped in?',"What is the world's biggest island",'What is the diameter of Earth?','What is the capital city of Spain?','Which is the only American state to begin with the letter "p"?','Name the seventh planet from the sun.','Which animal is the tallest in the world?','What is the plural of the word crisis?'],
  answers:['Red, yellow and blue','To be played softly','Edible seaweed','Greenland','8,000 miles','Madrid','Pennsylvania','Uranus','Giraffe','Crises'],
  fakeAnswer1:['Red, green and blue','To have many keys','Edible Paper','Iceland','5,500 miles','Barcelona','Prenston','Pluto','Anaconda','Criseses'],
  fakeAnswer2:['Red, blue and orange','To be played swiftly','Lettuce','Australia','1,000 miles','Valencia','P','Mars','Cheetah','Crise'],
  fakeAnswer3:['Blue,yellow and green','To have soft noises','Tree leaves','The Caribian','10,000 miles','Granada','p','Venus','Crocodile','Criees']
};




var getData=function(obj){

	var arr=[];
	var smallArr=[];
for (var i = 0; i < obj.questions.length; i++) {
	smallArr=[];
		for(var key in obj){
			smallArr.push(obj[key][i]);
			if(arr[i] === undefined){
				arr.push(smallArr);
			}
		}
	}
	return arr;
}

var nnn = $('<button class="btn btn-default nee" >Next</button>')

$(".final").append(nnn)
var next = $("<button></button>")
next.addClass("btn btn-default nee")
next.text("Next")



/********Button******/
var cout = 1 ;
var len = getData(subject[radio])[cout].length

if(cout >= len)
{
	$(".final").hide()
}

nnn.on("click",function () {

if(cout > len)
{	$(".didIt").show()
	$(".final").hide()
}


var next = $('<button class = "btn btn-default nee"></button>')
next.text("Next")

	var nextDiv = $("<div></div>")
nextDiv.addClass("input-group")
nextDiv.append(next)


var trueAns1 = $('<p class = "dis"></p>')
trueAns1.text(getData(subject[radio])[cout][1])

var falseAns1 = $('<p class = "dis"></p>')
falseAns1.text(getData(subject[radio])[cout][2])

var falseAns2 = $('<p class = "dis"></p>')
falseAns2.text(getData(subject[radio])[cout][3])


var falseAns3 = $('<p class = "dis"></p>')
falseAns3.text(getData(subject[radio])[cout][4])

var input1 = $("<input>")
input1.attr("checked" , "true" )
input1.attr("Value" , "first")
input1.attr("type","radio")
input1.attr("name","optradio")
input1.addClass("ree")



var input2 = $("<input>")
input2.attr( "Value" , "2" )
input2.attr("type","radio")
input2.attr("name","optradio")
input2.addClass("ree")

var input3 = $('<input >')
input3.attr("Value" , "3")
input3.attr("type","radio")
input3.attr("name","optradio")
input3.addClass("ree")

var input4 = $("<input>")
input4.attr("Value" , "3")
input4.attr("type","radio")
input4.attr("name","optradio")
input4.addClass("ree")


var label1 =$("<label></label")
label1.append(input1).append(trueAns1).append("<br>")


var label2 =$("<label></label")
label2.append(input2).append(falseAns1)
var label3 =$("<label></label")
label3.append(input3).append(falseAns2).append("<br>")

var label4 =$("<label></label")
label4.append(input4).append(falseAns3)

var radDiv = $("<div></div>")
radDiv.addClass("radio")
radDiv.append(label1).append(label2).append(label3).append(label4)

var theChoise = $("<div></div>")
theChoise.addClass("theRadio")

theChoise.append(radDiv)

theQuestion = $("<h1></h1>")
theQuestion.text(getData(subject[radio])[cout][0])

theQuestionDiv = $("<div></div>")
theQuestionDiv.append(theQuestion)

var finDiv1 =$("<div></div>")
finDiv1.addClass("col-md-12")
finDiv1.attr("align" ,"center")
finDiv1.append(theQuestionDiv).append(theChoise).append(nextDiv)
var score = $("<h1></h1>")
var finDiv2 = $("<div></div>")
finDiv2.addClass("container-fluid text-center ")
finDiv2.append(finDiv1)

$(".final").append(finDiv2)
$(finDiv2).append(score)


cout+=1

score.text(cout-1 +"/" +len)

next.on("click" , function () {
	$(".container-fluid").hide()
})

})



nnn.hide();
// $(".allBk").hide()
btnNext.on("click",function () {
	nnn.show();
	$(".allBk").fadeOut();
})

$(".back").on("click" , function () {
	
	window.location.href="C:/Users/Lenovo/Desktop/QuizGameProject/Home.html";
})

$(".didIt").hide()
