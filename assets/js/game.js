var won = 0;
var lost = 0;
var attempts = 10;
var usedArray = [];
var ranLetter = ranLetter;
var letters = "qwertyuiopasdfghjklzxcvbnm"

//secret Letter generation 
ranLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(ranLetter);

//uses number generated with ranLetter to generate letter from var letters
function jsGuess() {
      ranLetter = letters[Math.floor(Math.random() * letters.length)];
      console.log(ranLetter);

}

//capturing keystrokes
document.onkeyup = function (event) {
      var playerGuess = event.key;

      //looks for match and tallies guesses.
      if (playerGuess === ranLetter) {
            won++;
            attempts = 10;
            usedArray = [];

      }

      //tallies incorrect guesses
      jsGuess();
      if (playerGuess !== ranLetter) {
            attempts--;

      }

      //game reset if lost
      if (attempts == 0) {
            lost++;
            usedArray = []
            attempts = 10;
      }


      //prevents a letter to be printed a second time, but still tallies as a guess
      if (usedArray.indexOf(playerGuess) >= 0) {

      } else {
            //writes incorrect guess
            usedArray.push(playerGuess);
            document.getElementById('playerGuess').innerHTML = usedArray;
            console.log(usedArray);

      }
      //HTML output
      document.getElementById('won').innerHTML = won;
      document.getElementById('lost').innerHTML = lost;
      document.getElementById('attempts').innerHTML = attempts;

}
