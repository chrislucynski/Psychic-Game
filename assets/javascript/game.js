// Computer choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Assigning initial values
var wins = 0
var losses = 0
var guesses = 9

// create "portals" to the HTML document
var winsDis = document.getElementById("wins-display")
var lossesDis = document.getElementById("losses-display")
var guessesLeft = document.getElementById("guesses-left-display")
var guessesDis = document.getElementById("guesses-display")
var audioLose = document.getElementById("audio-lose")
var audioWin = document.getElementById("audio-win")
var bodyColor = document.getElementById("body-color")

// Incorrect guess array
var guessArr = [];

// function for key-up event
document.onkeyup = function(event) { 
    var userGuess = event.key

// computer generated random letter
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// conditions for winning/losing
if(userGuess === computerGuess){
    alert("You guessed right!")
    wins++
    guesses = 9
    userGuess = ""
    guessArr = []
    audioWin.play();
} 
// display guesses, keep guessing up to 9. At 9, losses++ and guesses resets to 9
else {
// array to hold user guesses
    guessArr.push(userGuess);
    guesses--
// once the guesses run out, update score board
if(guesses === 0){
    losses++
    audioLose.play();
    bodyColor.classList.add("loser")
    setTimeout(() => {
        bodyColor.classList.remove("loser")
        
    }, 2000);
// resets guesses so far
    guesses = 9
    userGuess = ""
    guessArr = []
}
}

// display user guesses
guessesDis.textContent = userGuess
lossesDis.textContent = losses
winsDis.textContent = wins
guessesLeft.textContent = guesses
guessesDis.textContent = guessArr


};