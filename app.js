// Get random word
var guessIt = ['dog', 'cat', 'turtle'];

// Pick a random word
var guessWord = guessIt[Math.floor(Math.random() * guessIt.length)];

// Setting up answer array
var answer = [];
for (var i = 0; i < guessWord.length; i++) {
	answer[i] = '_';
}

var remainingLetters = guessWord.length;

// The game loop

while (remainingLetters > 0) {
	// show their progress
	alert(answer.join(' '));

	// Player guess
	var guess = prompt(
		'Guess the word by typing a letter, or Cancel to stop playing.'
	);

	if (guess === null) {
		// exit the game
		break;
	} else if (guess.length !== 1) {
		alert('Please type one letter.');
	} else {
		// Update the game state with the guess
		for (var j = 0; j < guessWord.length; j++) {
			if (guessWord[j] === guess) {
				answer[j] = guess;
				remainingLetters--;
			}
			//Game ends
		}
	}
}

if (guessWord == answer.join('')) {
	alert(answer.join(' '));
	alert('Congratulations you guess the word! Guess word is: ' + guessWord);
} else {
	alert('Try again next time!');
}
