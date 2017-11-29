var wins = 0;
var numGuesses = 15;
var wordChoices = [
	["c", "a", "n", "d", "y", "m", "a", "n"], 
	["c", "a", "r", "p", "e", "n", "t", "e", "r"], 
	["k", "r", "u", "e", "g", "e", "r"], 
	["x", "e", "n", "o", "m", "o", "r", "p", "h"]
	];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lettersAlreadyGuessed = [];
var wordComputerChooses = wordChoices[Math.floor(Math.random() * wordChoices.length)];

/* creating underscore array on page */
var underscores = [];
for(var i = 0; i < wordComputerChooses.length; i++){
    	underscores.push("_");	
    };


/* on key up function */ 
document.onkeyup = function(event) {
	/* basic set up */
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    underscores.join(" ");

    var userGuess = event.key;

    var winsHtml = document.getElementById('winNumber');
    winsHtml.textContent = wins;

    var wordUnderscores = document.getElementById('word');
    wordUnderscores.textContent = underscores;  

    /* making sure an alphabet key is pressed and that you can't press the same letter twice */
    if (alphabet.indexOf(event.key) > -1 && lettersAlreadyGuessed.indexOf(event.key) < 0){

    	lettersAlreadyGuessed.push(userGuess);

    	var guessedLetters = document.getElementById('lettersGuessed');
    	guessedLetters.textContent = lettersAlreadyGuessed;  

    	numGuesses--;
    	var guessesLeft = document.getElementById('guessesRemaining');
    	guessesLeft.textContent = numGuesses;
    } else {
    	console.log("Please press a valid key!");
    };

 	/*putting correct guesses into underscore array */
    if (wordComputerChooses.indexOf(userGuess) > -1){
    	for(var i = 0; i < wordComputerChooses.length; i++){
    		if (wordComputerChooses[i] == userGuess){
    			underscores[i] = userGuess;
    			var wordUnderscores = document.getElementById('word');
    			wordUnderscores.textContent = underscores;  
    		};
    	};
    };
    
    if (underscores.join('') == wordComputerChooses.join('') && numGuesses > 1){
    	alert("You won... :)");
    	winning();
    } else if (numGuesses < 1){
    	alert("You lose! :(");
    	losing();
    };
};

function winning(){
	wins++;
	var winsHtml = document.getElementById('winNumber');
	winsHtml.textContent = wins;

	lettersAlreadyGuessed = [];
	var guessedLetters = document.getElementById('lettersGuessed');
    guessedLetters.textContent = lettersAlreadyGuessed;  

	numGuesses = 15;
	var guessesLeft = document.getElementById('guessesRemaining');
    guessesLeft.textContent = numGuesses;

	wordComputerChooses = wordChoices[Math.floor(Math.random() * wordChoices.length)];

	underscores = [];
	for(var i = 0; i < wordComputerChooses.length; i++){
    	underscores.push("_");
    };
	var wordUnderscores = document.getElementById('word');
    wordUnderscores.textContent = underscores;  
};

function losing(){
	lettersAlreadyGuessed = [];
	var guessedLetters = document.getElementById('lettersGuessed');
    guessedLetters.textContent = lettersAlreadyGuessed;  

	numGuesses = 15;
	var guessesLeft = document.getElementById('guessesRemaining');
    guessesLeft.textContent = numGuesses;

	wordComputerChooses = wordChoices[Math.floor(Math.random() * wordChoices.length)];
	underscores = [];
	for(var i = 0; i < wordComputerChooses.length; i++){
    	underscores.push("_");
    };
	var wordUnderscores = document.getElementById('word');
    wordUnderscores.textContent = underscores;  
};

function giveUp(){
	var givingUp = document.getElementById('word');
    givingUp.textContent = wordComputerChooses; 
}
