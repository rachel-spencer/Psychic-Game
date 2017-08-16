


//Psuedo codeing the game logic-

//site has to "think" of a random letter. (I could set up an array and a loop to do this)

//have to assign the number of guesses are allowed before considering a loss. I will code it to
//allow 10 guesses.

//each time the user enters a key the site has to display the selection on the "Your Guesses so far"
//this should not reset but should collect all the guesses until the have typed 10.


//the site has to also check if it's the correct character. If it is, then the wins adds a number. 
//If it isn't the correct choice then the the number of guesses left has to go down by 1.

//upon using all of the 10 guesses the site has to add 1 to the losses 

//upon using all of the 10 guesses the site has to reset the guess count and Your Guesses so far list
//but maintain the wins and losses.

// ==============================================================================

//Creates an array that lists out all of the options of the letters.
var choices = ["q","w","e","r","t","y","u","i","o","p","a","s","d","e","f","g","h","j","k","l","z","x","c","v","b","n","m"]

//Computer randomly chooses a choice from the options array. This is the letter the user is trying to guess
var computerGuess = choices[Math.floor(Math.random() * choices.length)];
        console.log(computerGuess)

// This function is run whenever the user presses a key.
      document.onkeyup = function(event) {
        console.log(event);
      	
        //Determins which key was pressed.
      	var userGuess = event.key;
        
        //check if the what was pressed = what what guessed.
        if (userGuess === computerGuess){
        
        var targetDiv= document.getElementById("wins-p"), count = 0;
          count += 1;  
          targetDiv.innerHTML = (count); 

        var targetDiv= document.getElementById("guessessofar-p"); 
          targetDiv.innerHTML = (event.key);

        alert ("You are a smart, strong, sensual woman. - Tina ");

        }
        
        else {

          var targetDiv= document.getElementById("losses-p"), count = 0;
            count += 1;  
            targetDiv.innerHTML = (count); 

          var targetDiv= document.getElementById("guessessofar-p"); 
            targetDiv.innerHTML = (event.key);

            alert ("You didn't get it this time but don't have a crap attack, it's just a game. Try again!");
          

          var targetDiv= document.getElementById("guessesleft-p"), count = 10;
            count -= 1;  
            targetDiv.innerHTML = (count);

        }
      }
      


//how to reset after a win 
//how to reset after 10 tries 
//how to count the number of guesses left someone has
//how to show all of the guesses not just the most recent guess



