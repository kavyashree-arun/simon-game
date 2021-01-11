var userClickedPattern = [];
var gamePattern=[];
var buttonColors=["red","blue","green","yellow"];

var started = false;
var level = 0;

$(document).one('keydown',function(){
	if (!started){
		$("h1").text("Level "+level);
		nextSequence();
		started=true;
	}
});

$(".btn").click(function(){
	var userChosenColor = $(this).attr("id");
	userClickedPattern.push(userChosenColor);
	playSound(userChosenColor);
	animatePress(userChosenColor);
	checkAnswer(userClickedPattern.length-1);
});


function nextSequence(){
	level++;
    $("h1").text("Level "+level);
	var randomNumber=Math.floor(Math.random()*3)+1;
	var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}


function playSound(name){
	var audio = new Audio("sounds/"+name+".mp3");
audio.play();
}


function animatePress(currentColor){
	$("#"+currentColor).addClass("pressed");
	setTimeout(function(){
		$("#"+currentColor).removeClass("pressed");
	},100);
}

function checkAnswer(currentLevel){
	if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
		console.log("success");
	}else{
		console.log("fail");
	}
}


