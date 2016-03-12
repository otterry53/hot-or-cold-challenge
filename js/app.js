/* -when the page loads the user can click to look at the instructions or click +newgame
   - when player chooses new game, the counter defaults to 0, guessList empties and
     the computer generates a secret number between 1 and 100
   -the user enters a guess (Can't tell if the user is prompted to make a guess)
   -the user's number is checked
   -the user wins if he picks the right number, otherwise, the user receives feedback about how close
    he is, the counter increasees by one and the user's number is added to the list of guesses*/

//First - declare the functions:

//function for computer to generate secret number between 1 and 100 (Math.random)
var secretNumber() {
    math.floor((math.random() * 100) + 1);
}

//??????function to ask user prompt user to "Make your Guess!" OR IS IT JUST THERE?


//function to validate (HTML5 required flag already set up????????)
function validate() {
    var userGuessCorrectFlag = true;

    while (userGuess.length < 1) {
        var userGuess = prompt("Please enter 1 digit or more.");
        userGuessCorrectFlag = false;
    }
    while (userGuess > 101) {
        var userGuess = prompt("Please enter a number no larger than 100.")
        userGuessCorrectFlag = false;
    }
    //when number is a number tried before andcis already in #guesslist
    while (userGuess === {
            var userGuess = prompt("You already tried that number!");
            userGuessCorrectFlag = false;
        }
        while (Math.floor(userGuess) != userGuess) {
            var userGuess = prompt("Your guess was not a number. Set it again.");
            userGuessCorrectFlag = false;
        }
    }
    //function to determine the difference between the numbers
    function difference(userGuess, secretNumber) {
        return Math.abs(userGuess - secretNumber);
    }
    //named function to give userfeedback in <div id="feedback"> - ice cold (+/-50); cold (31-49); warm (21 to 30); hot (11-20);
    function userFeedback() {
        if (difference >= 50) {
            $('#feedback').prompt("You are freezing! Try again!");
        } else if (difference > 30) {
            $('#feedback').prompt("You are cold! Try again!");
        } else if (difference > 20) {
            $('#feedback').prompt("You are warm! Try again!");
        } else if (difference > 10) {
            $('#feedback').prompt("You are hot! Try again!");
        } else if (difference > 0) {
            $('feedback').prompt("You are smokin'! Try again!");
        } else {
            $('#feedback').prompt("You win!!!");
        }
    }

    //function to supply user with list of numbers already guess; append as <li> to <ul -id = "guesslist">
    function userGuessList() {
        if (userGuess != secretNumber) {
            $('#guessList').append("<li>" + userGuess + "</li>");
        }
    }
    //functon to count number of guesses and give feedback in <span id="count">
    function guessCounter() {
        if (userGuess != comPick) {
            $('#count').add(1);
        }
    }
    //function to cause clicking "New Game" to trigger JavaScript function that starts a new game
    function startNewGame() {
        $(".new").click(function () {
            $('#count').val(0);
            $('#guessList').empty();
        });
    }


    //Then - Use the functions

    $(document).ready(function () {

        /*--- Display information modal box ---*/
        $(".what").click(function () {
            $(".overlay").fadeIn(1000);

        });
        /*--- Hide information modal box ---*/
        $("a.close").click(function () {
            $(".overlay").fadeOut(1000);
        });

        startNewGame(secretNumber);
        var userGuess = prompt("Make your Guess.");

    });
