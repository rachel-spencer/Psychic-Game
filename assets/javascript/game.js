


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

//Object and property declarations

var user = {};

user.choices = ["q","w","e","r","t","y","u","i","o","p","a","s","d","e","f","g","h","j","k","l","z","x","c","v","b","n","m"];
user.alreadyGuessed = "";
user.guess = "";


var computer = {};

computer.choices = ["q","w","e","r","t","y","u","i","o","p","a","s","d","e","f","g","h","j","k","l","z","x","c","v","b","n","m"];
computer.guess = computer.choices[Math.floor(Math.random() * computer.choices.length)];
console.log(computer.guess);


var scoreboard = {};

winCount = 0;
lossCount = 0;
guessesLeftCount =10;



//Functions that pull from the objects/properties

      document.onkeyup = function(event) {
        console.log(event);
        
        var userGuess = event.key;
        user.alreadyGuessed = user.alreadyGuessed + event.key + ", "

        if (userGuess === computer.guess){
        
          var targetDiv= document.getElementById("wins-p")
            winCount += 1;  
            targetDiv.innerHTML = (winCount); 

          var targetDiv= document.getElementById("guessessofar-p"); 
            targetDiv.innerHTML = (event.key);

            alert ("You are a smart, strong, sensual woman. - Tina ");
          }

        else if (guessesLeftCount <= 0){
          alert ("Your ass is grass and I'm gonna mow it! -Tina"); 
          var targetDiv= document.getElementById("losses-p")
            lossCount += 1;  
            targetDiv.innerHTML = (lossCount); 
        }  

        else {

          var targetDiv= document.getElementById("guessessofar-p");
            targetDiv.innerHTML = (user.alreadyGuessed);

            alert ("You didn't get it this time but don't have a crap attack, it's just a game. Try again!");
          

          var targetDiv= document.getElementById("guessesleft-p")
            guessesLeftCount -= 1;  
            targetDiv.innerHTML = (guessesLeftCount);
          }
      }





//how to reset after a win 
//how to reset after 10 tries 



