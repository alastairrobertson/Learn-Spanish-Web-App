//gameEngine is a global namespace object for organisation of code
window.gameEngine = {};
//level is a global variable that tracks the current level the user is playing at
window.level = 1;
//correctCount is a global variable that tracks when a new level should be incremented
window.correctCount = 0;


/*
This function takes no parameers but returns a gamedata object
This function creates a random number that will be used to delect data from gameData
It is a global function
*/
window.gameEngine.newWord = function() {
    randomNumber = Math.floor((Math.random() * gameData.length) + 1);
    console.log(randomNumber);
    return gameData[randomNumber - 1];

}
/*
This function takes one parameter which is called milliseconds and is a integer
This function simply sleeps for the time specificed in milliseconds, in the milliseconds param.
There is nothing returned.
*/
function sleep(milliseconds) {
    var start = new Date().getTime();
    console.log(start);
    for (var current = 0; current < 1e7; current++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

 
/*
This function does not have any parameters or returns any data
displayNewWord checks if sound is turned on and will play the correct sound if true
displayNewWord also removes the previous word and resets some objects and then generates a new wordObject
displayNewWord sets up the game page to have a new word in the middle of the screen ready to be dragged to targets.
*/
function displayNewWord() {
    console.log("sound " + settings.sound);
    if (settings.sound) {
        console.log("correct sound");
        var correctAudio = new Audio("sounds/correct.wav");
        correctAudio.play();
    }
    document.getElementById("draggableWord").remove();
    wordObject = null;
    paragraph = null;
    textNode = null;
    wordObject = gameEngine.newWord();
    paragraph = createParagraph();
    paragraph.id = "draggableWord";
    //create text and display it
    textNode = document.createTextNode(wordObject.WordOrSentence)
    paragraph.appendChild(textNode);
    gamePage.appendChild(paragraph);
    
    word = document.getElementById("draggableWord");
    word.setAttribute("draggable", "true");
}

/*
successfulDrag takes three parameters
targ is the target object 
wordObj word object 
wordElement is a html element
It does not return a value
successfulDrag updates userscore, gives last correct word translation, displays level and 
creates a new word if target matches word
if it does not match incorrect sound is player a incorrect animation will occur and bonusScore will be reset

*/
function successfulDrag(targ, wordObj, wordElement) {
    console.log(targ);
    console.log(wordObj);
    console.log(wordElement);
    if (targ.id == wordObj.Category) {
        console.log("we got a match");
        successfulCount++;
        wordElement.style.visiblity = "hidden";
        if (successfulCount > 1) {
            bonusScore = 2;
        }
        //increase userscore
        userScore = (bonusScore * 1) + userScore;
        var scoreDisplay = document.getElementById("gamescoreDisplay");
        console.log(scoreDisplay);

        document.body.classList.add("success");
        //remove "success" after 3 seconds to ensure success animation can be repeated
        setTimeout(function() {
            document.body.classList.remove("success");
        }, 1000 * 3);
        //reset score display for new gamescore
        scoreDisplay.innerHTML = null;
        scoreDisplay.innerHTML = "Gamescore: " + userScore;
        console.log(scoreDisplay.innerHTML);
        console.log("__________________________________________________");
        console.log(document.getElementById("draggableWord").childNodes[0]);
        //create word translation paragraph on page
        paragraph = createParagraph();
        textNode = document.createTextNode("Last correct word translation: " + wordObj.Translation);
        paragraph.appendChild(textNode);
        scoreDisplay.appendChild(paragraph);


        //increment the amount of times we completed a drag that was correct
        correctCount++;
        //if correctCount is 20, then a new level is activated
        if (correctCount == 20) {
            correctCount = 0;
            level++;
        
            lev = createH1();
            textNode = document.createTextNode("Level: " + level);
            lev.appendChild(textNode);
            scoreDisplay.appendChild(lev);
        } 

        
        
        displayNewWord();


    }
    else {
        //unsuccessful drag (was not correct)
        if (settings.sound) {
            console.log("incorrect sound");
            var incorrectAudio = new Audio("sounds/incorrect.wav");
            incorrectAudio.play();
        }
        //count restart
        successfulCount = 0;
        //bonus score multiplier restarted
        bonusScore = 1;
        document.body.classList.add("fail");
        //remove fail class in three seconds so it can be activated again
        setTimeout(function() {
            document.body.classList.remove("fail");
        }, 1000 * 3);
        


    }
}
/*
gameEngine.beginGame is a function that does not take parameters and does not return any values
It sets up the game by creating a new word, making the word draggable and defines dragging events 
It is a global function

*/

window.gameEngine.beginGame = function() {
    //set id and innerHTML for gamescore display
    gamescoreDisplay.id = "gamescoreDisplay";
    gamescoreDisplay.innerHTML = "Gamescore: ";
    gamePage.appendChild(gamescoreDisplay);
    //generate new word
    wordObject = gameEngine.newWord();
    paragraph = createParagraph();
    paragraph.id = "draggableWord";
    //create text node with spanish word
    textNode = document.createTextNode(wordObject.WordOrSentence)
    paragraph.appendChild(textNode);
    
    console.log(gamePage);
    gamePage.appendChild(paragraph);
    console.log(gamePage);
    //make draggableWord "draggable"
    word = document.getElementById("draggableWord");
    word.setAttribute("draggable", "true");

    /*
    event listener is added for dragover which takes the following parameters
    "dragover" is a string that represents the event type to listen for
    the next parameter is a anonymous function that will be called when the event if fired
    capture: A Boolean indicating that events of this type will be dispatched to the registered listener
    before being dispatched to any EventTarget beneath it in the DOM tree.
    */
    /* events fired on the drop targets */
    document.addEventListener("dragover", function( event ) {
        console.log(event);
        // prevent default to allow drop
        event.preventDefault();
    }, false);

    
    /*
    event listener is added for drop which takes the following parameters
    "drop" is a string that represents the event type to listen for
    the next parameter is a anonymous function that will be called when the event if fired
    capture: A Boolean indicating that events of this type will be dispatched to the registered listener
    before being dispatched to any EventTarget beneath it in the DOM tree.
    This event listener calles the successfulDrag function to check if a drag is correct
    */
    document.addEventListener("drop", function( event ) {
        // prevent default action (open as link for some elements)
        console.log("drop");
        event.preventDefault();
        // move dragged elem to the selected drop target
        console.log(event);
        console.log(event.target);
        console.log(event.target.id);
        console.log(wordObject);
        //check if successfulDrag was correct
        successfulDrag(event.target, wordObject, word);
    }, false);
        


}



