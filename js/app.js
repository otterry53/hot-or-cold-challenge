/* -when the page loads the user can click to look at the instructions or click +newgame
   - when player chooses new game, the counter defaults to 0, guessList empties and
     the computer generates a secret number between 1 and 100
   -the user enters a guess (Can't tell if the user is prompted to make a guess)
   -the user's number is checked
   -the user wins if he picks the right number, otherwise, the user receives feedback about how close
    he is, the counter increasees by one and the user's number is added to the list of guesses*/


//FIRST - Set the global variables:

var secretNumber = computerPick(1, 100);
var counter = 0


//SECOND - declare the functions:

//function for computer to generate secret number between 1 and 100 (Math.random)
function computerPick(min, max) {
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

//function to give userfeedback in <div id="feedback">
function userFeedback(userGuess, secretNumber) {
    var difference = Math.abs(userGuess - secretNumber);
    if (difference >= 50) {
        $('#feedback').text("You are freezing! Try again!");
    } else if (difference > 30) {
        $('#feedback').text("You are cold! Try again!");
    } else if (difference > 20) {
        $('#feedback').text("You are warm! Try again!");
    } else if (difference > 10) {
        $('#feedback').text("You are hot! Try again!");
    } else if (difference > 0) {
        $('#feedback').text("You're smokin'! Try again!");
    } else {
        $('#feedback').text("You win!!!");
    }
}

//function to validate user's guess
function validate(userGuess) {
    var userGuessCorrectFlag = true;

    while (userGuess.length < 1) {
        var userGuess = prompt("Please enter 1 digit or more.");
        userGuessCorrectFlag = false;
    }
    while (userGuess > 101) {
        var userGuess = prompt("Please enter a number no larger than 100.")
        userGuessCorrectFlag = false;
    }

    while (Math.floor(userGuess) != userGuess) {
        var userGuess = prompt("Your guess was not a number. Set it again.");
        userGuessCorrectFlag = false;
    }
    if (userGuessCorrectFlag == true) {
        userFeedback(userGuess, secretNumber);
        counter++;
        guessCounter(counter);
        userGuessList(userGuess);
        $('#userGuess').val('');
    }
}

//function to supply user with list of nos. guessed; append as <li> to <ul -id = "guessList">
function userGuessList(userGuess, secretNumber) {
    if (userGuess != secretNumber) {
        $('#guessList').append("<li>" + userGuess + "</li>");
    }
}

//functon to count number of guesses and give feedback in <span id="count">
function guessCounter(userGuess) {
    $('#count').text(counter);
}


//function to cause clicking "New Game" to trigger JavaScript function that starts a new game
function startNewGame() {
    //document.location.reload(true);
    $(".new").click(function () {
        $('#count').text(0);
        counter = 0;
        $('#guessList').empty();
        $('#feedback').text("Make your Guess!")
    });
}

//THIRD Use the functions
$(document).ready(function () {

    $('.new').on('click', startNewGame);

    $('#guessButton').on('click', function () {
        //first get the value that user added in the input box
        var userGuess = $('#userGuess').val();
        var newGuess = userGuess;
        validate(userGuess);
    });

    /*--- Display information modal box ---*/
    $(".what").click(function () {
        $(".overlay").fadeIn(1000);

    });
    /*--- Hide information modal box ---*/
    $("a.close").click(function () {
        $(".overlay").fadeOut(1000);
    });
});
