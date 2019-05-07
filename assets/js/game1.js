//variables
var words = ["slayer",
    "megadeth",
    "anthrax",
    "metallica",
    "godsmack",
    "sepultura",
    "slipknot",
    "pantera",
    "staind",
    "gojira"
];

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

//audio

//varables
var slayer = document.getElementById("slayer");
var megadeth = document.getElementById("megadeth");
var anthrax = document.getElementById("anthrax");
var metallica = document.getElementById("metallica");
var godsmack = document.getElementById("godsmack");
var sepultura = document.getElementById("sepultura");
var slipknot = document.getElementById("slipknot");
var pantera = document.getElementById("pantera");
var staind = document.getElementById("staind");
var gojira = document.getElementById("gorjira");
var lose = document.getElementById("lose");

function aud() {
    //slayer
    if (randomWord === words[0]) {
        megadeth.pause();
        anthrax.pause();
        metallica.pause();
        godsmack.pause();
        sepultura.pause();
        slipknot.pause();
        pantera.pause();
        staind.pause();
        gorjira.pause();
        slayer.play();
        window.open("assets/images/youwin.jpg", "_blank", "width=510,height=300");
    }
    //megadeth
    else if (randomWord === words[1]) {
        slayer.pause();
        anthrax.pause();
        metallica.pause();
        godsmack.pause();
        sepultura.pause();
        slipknot.pause();
        pantera.pause();
        staind.pause();
        gorjira.pause();
        megadeth.play();
        window.open("assets/images/youwin.jpg", "_blank", "width=510,height=300");
    }
    //anthrax
    else if (randomWord === words[2]) {
        slayer.pause();
        megadeth.pause();
        metallica.pause();
        godsmack.pause();
        sepultura.pause();
        slipknot.pause();
        pantera.pause();
        staind.pause();
        gorjira.pause();
        anthrax.play();
        window.open("assets/images/youwin.jpg", "_blank", "width=510,height=300");
    }
    //metallica
    else if (randomWord === words[3]) {
        slayer.pause();
        megadeth.pause();
        anthrax.pause();
        godsmack.pause();
        sepultura.pause();
        slipknot.pause();
        pantera.pause();
        staind.pause();
        gorjira.pause();
        metallica.play();
        window.open("assets/images/youwin.jpg", "_blank", "width=510,height=300");
    }
    //godsmack
    else if (randomWord === words[4]) {
        slayer.pause();
        megadeth.pause();
        anthrax.pause();
        metallica.pause();
        sepultura.pause();
        slipknot.pause();
        pantera.pause();
        staind.pause();
        gorjira.pause();
        godsmack.play();
        window.open("assets/images/youwin.jpg", "_blank", "width=510,height=300");
    }
    //sepultura
    else if (randomWord === words[5]) {
        slayer.pause();
        megadeth.pause();
        anthrax.pause();
        metallica.pause();
        godsmack.pause();
        slipknot.pause();
        pantera.pause();
        staind.pause();
        gorjira.pause();
        sepultura.play();
        window.open("assets/images/youwin.jpg", "_blank", "width=510,height=300");
    }
    //slipknot
    else if (randomWord === words[6]) {
        slayer.pause();
        megadeth.pause();
        anthrax.pause();
        metallica.pause();
        godsmack.pause();
        sepultura.pause();
        pantera.pause();
        staind.pause();
        gorjira.pause();
        slipknot.play();
        window.open("assets/images/youwin.jpg", "_blank", "width=510,height=300");
    }
    //pantera
    else if (randomWord === words[7]) {
        slayer.pause();
        megadeth.pause();
        anthrax.pause();
        metallica.pause();
        godsmack.pause();
        sepultura.pause();
        slipknot.pause();
        staind.pause();
        gorjira.pause();
        pantera.play();
        window.open("assets/images/youwin.jpg", "_blank", "width=510,height=300");
    }
    //staind
    else if (randomWord === words[8]) {
        slayer.pause();
        megadeth.pause();
        anthrax.pause();
        metallica.pause();
        godsmack.pause();
        sepultura.pause();
        slipknot.pause();
        pantera.pause();
        gorjira.pause();
        staind.play();
        window.open("assets/images/youwin.jpg", "_blank", "width=510,height=300");
    }
    //gorjira
    else if (randomWord === words[9]) {
        slayer.pause();
        megadeth.pause();
        anthrax.pause();
        metallica.pause();
        godsmack.pause();
        sepultura.pause();
        slipknot.pause();
        pantera.pause();
        staind.pause();
        gorjira.play();
        window.open("assets/images/youwin.jpg", "_blank", "width=510,height=300");
    }
};


//letters/compare function

//letter match
function checkLetters(letter) {
    var letterInWord = false;
    //if letter matches randomWord, than true
    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            letterInWord = true;
        }
    }
    //if no match, than false
    if (letterInWord) {
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    } else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    console.log(blanksAndCorrect);
}

//win or loss

function complete() {
    console.log("Wins: " + wins + "| Losses: " + losses + "| Guesses Left: " + guessesRemaining)

    //win
    if (lettersOfWord.toString() == blanksAndCorrect.toString()) {
        wins++;
        aud()
        reset()

        //show win
        document.getElementById("wins").innerHTML = " " + wins;



    } else if (guessesRemaining === 0) {
        losses++;
        window.open("assets/images/youlose.jpg", "_blank", "width=425,height=350");
        lose.play();
        reset()
        document.getElementById("lost").innerHTML = " " + losses;
    }
    //display losses and guesses remaining
    document.getElementById("word").innerHTML = " " + blanksAndCorrect.join(" ");
    document.getElementById("attempts").innerHTML = " " + guessesRemaining;
}

//execute

Game()

//
document.onkeyup = function(event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    //check guessed to randomWord
    checkLetters(guesses);
    //run win/loss
    complete();
    //log guessed to console
    console.log(guesses);

    //display guessed letters
    document.getElementById("letters").innerHTML = " " + wrongGuess.join(" ");
}