// document.ready so everything loads at the same time
$(document).ready(function() {

// global variables

var targetNumber = 0;
var currentScore = 0;
var wins = 0;
var losses = 0;
var crystalVals = [];

// pick a random target number to aim for
function targetNum() {
	targetNumber = (Math.floor(Math.random() * 100) + 19);
	$('#target-number').html(targetNumber);
}

// resets game
function resetGame() {
	targetNum();
	currentScore = 0;
	crystalVals();
}

// shows current score
$('#player-score').html(currentScore);

// random crystal values between 1 - 12
function crysVal() {
	for (let i = 0; i < 4; i++) {
		var crysVal = (Math.floor(Math.random() * 11) + 1);
		crystalVals.push(crysVal);
		console.log(crystalVals);
	}
}

// runs functions
targetNum();
crysVal();

// on clicks
$('#crystal1').on('click', function () {
	currentScore = currentScore + crystalVals[0];
	$('#player-score').html(currentScore);
});

$('#crystal2').on('click', function () {
	currentScore = currentScore + crystalVals[1];
	$('#player-score').html(currentScore);
});

$('#crystal3').on('click', function () {
	currentScore = currentScore + crystalVals[2];
	$('#player-score').html(currentScore);
});

$('#crystal4').on('click', function () {
	currentScore = currentScore + crystalVals[3];
	$('#player-score').html(currentScore);
});

// compare current score to target score

if (currentScore === targetNumber) {
	wins++;
	$('#winPanel').html(wins);
	$('#winLosePanel').html("You Win!!");
	resetGame();
}
else if (currentScore >= targetNumber) {
	losses++;
	$('#losePanel').html(losses);
	$('#winLosePanel').html("You Lose!!");
	resetGame();
}
else {
	$('#winLosePanel').html("");
}

// document.ready close
});
