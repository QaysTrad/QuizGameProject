var btnRD = $(".ready")

btnRD.on("click",function () {
	localStorage.setItem("lastname", $(".nickName").val())
})




subject={};
subject.sports={
  questions:['Name the only heavyweight boxing champion to finish his career of 49 fights without ever having been defeated?','In 2011, which country hosted a Formula 1 race for the first time?','Who was the shortest player ever to play in the NBA?'],
  answers:['Rocky Marciano', 'India','Tyrone Bogues'],
  fakeAnswer1:['Max Baer','Pakistan','Arkell Floyd'],
  fakeAnswer2:['Mike Tyson','Turkey','Destin Bryant'],
  fakeAnswer3:['Marquise James','Bulgaria','Farrell Thornton']
};
subject.games={
  questions:['World of Warcraft:What is the name of the desert that surrounds the Caverns of Time?','World of Warcraft:What pit lord was the ruler of Outland before being imprisoned by Illidan Stormrage?','League of Legends: how many champions exist in the game?','Resident Evil 3: what was the name of the main character?','How big is the stack of items size in Minecraft?','Minecraft:Can you mine diamond with stone axe?','GTA:how many versions of the game has been released?','What is the main characters Name in Witcher 3?','Overwatch: what is the name of the Machine gun hero?','Where did the events of outlast happen?'],
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

