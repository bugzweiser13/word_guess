//variables
var words = ["slayer", "megadeth", "anthrax", "metallica"];

//variable for letters
var randomWord = "";
var lettersOfWord = [];
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];

//variables for counters (all from zero)
var wins = 0;
var losses = 0;
var guessesRemaining = 9;

//functions

//start functions

function Game() {
    //word generation
    randomWord = words[Math.floor(Math.random() * words.length)];
    //
    lettersOfWord = randomWord.split("");
    //
    blanks = lettersOfWord.length;

    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    }

    //show in HTML
    document.getElementById("word").innerHTML = " " + blanksAndCorrect.join(" ");

    //log to console
    console.log(randomWord);
    console.log(lettersOfWord);
    console.log(blanks);
    console.log(blanksAndCorrect);
}

function reset() {
    guessesRemaining = 9;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game()
}

//letters/compare function