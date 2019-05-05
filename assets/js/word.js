// Create an array of words
var words = [
    "corvette",
    "sidepipe",
    "advanced",
    "racecars"
];
// Pick a random word
var word = words[Math.floor(Math.random() * words.length)];
// Set up the answer array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    //answerArray[i] = "_";
    document.getElementById('word').innerHTML = answerArray[i] = "_";
}
var remainingLetters = word.length;
// The game loop

while (remainingLetters > 0) {
    // Show the player their progress
    //alert(answerArray.join(" "));
    document.getElementById('word').innerHTML = answerArray.join(" ");
    // Get a guess from the player
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    //var guess = getElementById('guess');
    if (guess === null) {
        // Exit the game loop
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        // Update the game state with the guess
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
    // The end of the game loop
}

//document.getElementById('won').innerHTML = won;
//document.getElementById('lost').innerHTML = lost;
//document.getElementById('attempts').innerHTML = attempts;

// Show the answer and congratulate the player
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);