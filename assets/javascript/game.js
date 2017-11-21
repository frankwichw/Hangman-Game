var wins = 0;
var numGuesses = 20;
var wordChoices = ["candyman", "john carpenter", "elm street", "seven days", "xenomorph"];
var lettersAlreadyGuessed = [];
var wordComputerChooses = wordChoices[Math.floor(Math.random() * wordChoices.length)];


document.onkeyup = function(event) {
	var letter = String.fromCharCode(event.keyCode).toLowerCase();

	var winsHtml = document.getElementById('winNumber');
    winsHtml.textContent = wins;

    var guessesLeft = document.getElementById('guessesRemaining');
    guessesLeft.textContent = numGuesses;
    numGuesses--;

    var hangman = document.getElementById('word');

    hangman.textContent = wordComputerChooses;

    var userGuess = event.key;

    lettersAlreadyGuessed.push(userGuess);

    var guessedLetters = document.getElementById('lettersGuessed');
    guessedLetters.textContent = lettersAlreadyGuessed;  

    /*
    if (numGuesses < 1){
	var lettersAlreadyGuessed = [];
	var numGuesses = 20;
	var wordComputerChooses = computerChoices[Math.floor(Math.random() * wordChoices.length)];
	}; 
	*/ 
};




 /*
function (winning){
	var winsHtml = document.getElementById('winNumber');
	winsHtml.textContent = wins;
	var lettersAlreadyGuessed = [];
	var numGuesses = 20;
	var wordComputerChooses = computerChoices[Math.floor(Math.random() * wordChoices.length)];
};

function (losing){
	var lettersAlreadyGuessed = [];
	var numGuesses = 20;
	var wordComputerChooses = computerChoices[Math.floor(Math.random() * wordChoices.length)];
};
/*
on key up{
	choose random array index;
	i f the index is candyman (for instance)
		put 8 underscores in html word area 

	on key up next
	if index string includes key pressed && numGuesses > 0
		numGuesses--;
		somehow add letter to the corresponding place in the underscores
		add event.key push to lettersAlreadyGuessed;
		display letter on page
	else if index string includes key pressed && correct choices === word choices string
		wins++;
		numGuesses = 20;
		lettersAlreadyGuessed = [];
		choose random array index;
		put the new number of underscores on the page (make fun,ction to do this?)
	else if index string does not include key && numGuesses > 0
		numGuesses--;
		add event.key push to lettersAlreadyGuessed;
		display letter on page;
	else (when you lose bc numGuesses = 0)

*/


